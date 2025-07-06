import React, { useState, useEffect, useRef, useMemo } from 'react';

interface TypedTextProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenStrings?: number;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetweenStrings = 1500,
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Ref to hold the timeout ID for cleanup
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Memoize cursor blinking to prevent unnecessary re-renders
  const cursorElement = useMemo(() => (
    <span className={`inline-block w-0.5 h-6 ml-1 bg-indigo-500 dark:bg-indigo-400 transition-opacity duration-100 align-middle ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} style={{ verticalAlign: 'middle', marginBottom: '3px' }}></span>
  ), [cursorVisible]);
  
  // Optimized cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 600);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Typing effect
  useEffect(() => {
    const currentString = strings[currentStringIndex];
    
    const handleTyping = () => {
      // Clear any existing timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      if (!isDeleting && displayText === currentString) {
        // Wait before starting to delete
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenStrings);
        return;
      }
      
      if (isDeleting && displayText === '') {
        // Move to the next string when current is deleted
        setIsDeleting(false);
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        return;
      }
      
      // Calculate delay based on whether typing or deleting
      const delay = isDeleting ? deletingSpeed : typingSpeed;
      
      // Set timeout for next character
      timeoutRef.current = setTimeout(() => {
        setDisplayText((prevText) => {
          if (isDeleting) {
            return prevText.substring(0, prevText.length - 1);
          } else {
            return currentString.substring(0, prevText.length + 1);
          }
        });
      }, delay);
    };
    
    handleTyping();
    
    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentStringIndex, delayBetweenStrings, displayText, isDeleting, strings, deletingSpeed, typingSpeed]);
  
  return (
    <span className="inline-block">
      {displayText}
      {cursorElement}
    </span>
  );
};

export default TypedText;
