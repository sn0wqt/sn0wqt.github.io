import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FiCode, FiDatabase, FiServer, FiTool } from "react-icons/fi";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "languages":
      return <FiCode className="text-accent text-2xl" />;
    case "frameworks":
      return <FiServer className="text-accent text-2xl" />;
    case "infrastructure":
      return <FiTool className="text-accent text-2xl" />;
    case "specialties":
      return <FiDatabase className="text-accent text-2xl" />;
    default:
      return <FiCode className="text-accent text-2xl" />;
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills: React.FC = () => (
  <section id="skills" className="py-20 bg-bg-primary">
    <motion.div
      className="px-4 md:px-8 lg:px-16 mx-auto max-w-7xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12"
        variants={itemVariants}
      >
        My Core <span className="text-accent">Skills</span>
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 grid-auto-rows-fr">
        {Object.entries(portfolioData.coreSkills).map(([category, skills]) => (
          <motion.div key={category} variants={itemVariants} className="h-full">
            <div className="card-orange p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                {getCategoryIcon(category)}
                <h4 className="text-xl font-semibold text-text-primary capitalize">
                  {category}
                </h4>
              </div>
              <ul className="space-y-3 flex-grow">
                {skills.map((skill, idx) => (
                  <li key={idx}>
                    <motion.div
                      className="text-text-secondary flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="w-4 h-4 text-accent mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{skill}</span>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
