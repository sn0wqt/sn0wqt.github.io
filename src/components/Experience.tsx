import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FiBriefcase, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const Experience: React.FC = () => {
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

  return (
    <section id="experience" className="py-20 bg-bg-primary">
      <div className="px-4 md:px-8 lg:px-16 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
            Experience & <span className="text-accent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Professional Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h3
              variants={itemVariants}
              className="flex items-center gap-2 text-2xl font-bold text-text-primary mb-8 font-heading"
            >
              <FiBriefcase className="text-accent text-2xl" />
              Professional Experience
            </motion.h3>

            <div className="relative space-y-8">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-light"></div>

              {portfolioData.professionalExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary shadow-lg"></div>{" "}
                  <div className="card-orange p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-text-primary font-heading">
                        {exp.role}
                      </h4>
                      <span className="px-3 py-1 text-sm rounded-full font-medium bg-accent text-bg-primary">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center text-text-secondary mb-4 text-sm">
                      <FiCalendar className="mr-2" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-text-secondary"
                        >
                          <FiCheckCircle className="text-accent shrink-0 mt-1" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h3
              variants={itemVariants}
              className="flex items-center gap-2 text-2xl font-bold text-text-primary mb-8 font-heading"
            >
              <FaGraduationCap className="text-accent text-2xl" />
              Education
            </motion.h3>

            <div className="relative space-y-8">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-light"></div>

              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary shadow-lg"></div>

                  <div className="card-orange p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-text-primary font-heading">
                        {edu.degree}
                      </h4>
                      <span className="px-3 py-1 text-sm rounded-full font-medium bg-accent text-bg-primary">
                        {edu.institution}
                      </span>
                    </div>

                    <div className="flex items-center text-text-secondary mb-4 text-sm">
                      <FiCalendar className="mr-2" />
                      <span>{edu.period}</span>
                    </div>

                    <p className="text-text-secondary">{edu.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications Section */}
            <motion.h3
              variants={itemVariants}
              className="flex items-center gap-2 text-2xl font-bold text-text-primary mt-12 mb-8 font-heading"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="card-orange p-5 flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary font-heading">
                        {cert.name}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        {cert.institution}
                      </p>
                    </div>

                    <div className="text-accent font-medium">{cert.date}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
