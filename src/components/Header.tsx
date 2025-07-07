import React, { useState, useEffect, useCallback } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-bg-secondary/95 shadow-orange-lg backdrop-blur-md border-b border-accent/20"
            : "py-5 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-4 md:px-8 lg:px-16 mx-auto max-w-7xl flex justify-between items-center">
          {/* Logo/Name with liquid morphing effect */}
          <motion.div
            className="text-xl md:text-2xl font-mono font-bold text-accent cursor-pointer liquid-morph"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
            >
              <span className="liquid-text">sn0wqt.dev</span>
            </a>
          </motion.div>

          {/* Mobile menu button with rounded design */}
          <motion.button
            className="md:hidden p-2 rounded-xl bg-bg-secondary/50 text-text-primary hover:bg-bg-secondary/70 border border-accent/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>

          {/* Desktop Navigation with beautiful hover effects */}
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Experience", "Projects", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  className="relative text-text-secondary hover:text-accent transition-all duration-300 group py-2 px-3 rounded-lg hover:bg-bg-secondary/50 liquid-morph-nav"
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="nav-text">{item}</span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-light transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2 rounded-full"></span>
                </motion.a>
              )
            )}

            {/* Theme toggle button with beautiful design */}
            <motion.button
              className="p-3 rounded-full bg-bg-secondary/70 text-accent hover:bg-bg-secondary border border-accent/30 transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              <motion.div
                animate={{ rotate: theme === "light" ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
              </motion.div>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu with glass effect */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed top-20 left-4 right-4 z-40 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="rounded-2xl bg-bg-secondary/98 border border-accent/20 shadow-orange-lg overflow-hidden backdrop-blur-[12px]">
              <div className="p-6 space-y-4">
                {["About", "Skills", "Experience", "Projects", "Contact"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      className="block py-3 px-4 text-text-primary hover:text-accent hover:bg-bg-tertiary/50 rounded-lg transition-all duration-300"
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.toLowerCase());
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8 }}
                    >
                      {item}
                    </motion.a>
                  )
                )}

                {/* Theme toggle in mobile menu */}
                <div className="flex items-center justify-between pt-4 border-t border-accent/20">
                  <span className="text-sm text-text-secondary">
                    Switch to {theme === "light" ? "dark" : "light"} mode
                  </span>
                  <motion.button
                    className="p-2 rounded-full bg-bg-tertiary/70 text-accent border border-accent/30"
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;