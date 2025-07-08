import React from "react";
import { FiGithub, FiLinkedin, FiGlobe, FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-20 bg-bg-primary">
      <div className="px-4 md:px-8 lg:px-16 mx-auto max-w-7xl relative z-10">
        {/* Scroll to top button */}
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={scrollToTop}
            className="p-4 rounded-full bg-accent text-bg-primary hover:shadow-2xl"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>

        {/* Main content */}
        <div className="text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-text-primary mb-6 font-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Asaad F. Rasul
          </motion.h2>

          <motion.p
            className="text-text-secondary mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Backend Developer & Future Data Scientist
          </motion.p>

          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              href={`https://${portfolioData.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent/10 text-text-secondary hover:bg-accent hover:text-bg-primary transition-all duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Profile"
            >
              <FiGithub size={22} />
            </motion.a>

            <motion.a
              href={`https://${portfolioData.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent/10 text-text-secondary hover:bg-accent hover:text-bg-primary transition-all duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin size={22} />
            </motion.a>

            <motion.a
              href={`https://${portfolioData.contact.portfolio}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent/10 text-text-secondary hover:bg-accent hover:text-bg-primary transition-all duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Portfolio Website"
            >
              <FiGlobe size={22} />
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>

          {/* Copyright */}
          <motion.p
            className="text-text-secondary text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            &copy; {new Date().getFullYear()} Asaad F. Rasul. All rights
            reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
