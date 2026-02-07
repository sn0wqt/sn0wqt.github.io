import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypedText from "./common/TypedText";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowScrollIndicator(scrolled < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-bg-primary w-full overflow-x-hidden"
    >
      <div className="px-4 md:px-8 lg:px-16 mx-auto w-full max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center w-full"
        >
          <motion.h2
            className="text-lg md:text-xl text-text-secondary mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-primary font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Asaad F. Rasul
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-text-secondary mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <TypedText
              strings={[
                "Software Engineer",
                "Backend Developer",
                "Reverse Engineer",
              ]}
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              View My Work <FiArrowRight />
            </motion.a>

            <motion.a
              href="/CV.pdf"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV <FiDownload />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Enhanced Mouse Scroll Indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              className="fixed bottom-6 left-6 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 1.5,
                duration: 0.5,
              }}
            >
              <motion.div
                className="relative flex flex-col items-center"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                {/* Mouse body using CSS classes */}
                <div className="scroll-downs">
                  <div className="mousey">
                    <div className="scroller"></div>
                  </div>
                </div>

                {/* Scroll down text */}
                <motion.p
                  className="text-xs text-accent/70 mt-3 text-center font-medium tracking-wider"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  SCROLL
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
