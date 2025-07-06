import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FiCalendar, FiCheckCircle, FiMapPin } from "react-icons/fi";
import { LuGraduationCap, LuBriefcase, LuMedal } from "react-icons/lu";

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
              <LuBriefcase className="text-accent text-2xl" />
              Professional Experience
            </motion.h3>

            <div className="relative space-y-8">
              {/* Timeline line - only visible on md screens and up */}
              <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-light"></div>

              {portfolioData.professionalExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative md:pl-16 pl-0"
                >
                  {/* Timeline dot - only visible on md screens and up */}
                  <div className="hidden md:block absolute left-4 top-6 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary shadow-lg"></div>{" "}
                  <div className="card-orange p-6 mt-0 md:mt-0">
                    <div className="mb-2">
                      <h4 className="text-xl font-semibold text-text-primary font-heading">
                        {exp.role}
                      </h4>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div className="flex items-center text-text-secondary text-sm">
                        <FiCalendar className="mr-2 text-accent" />
                        <span>{exp.period}</span>
                      </div>

                      <div className="flex items-center text-text-secondary text-sm">
                        <FiMapPin className="mr-2 text-accent" />
                        <span>{exp.company}</span>
                      </div>
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
              <LuGraduationCap className="text-accent text-2xl" />
              Education
            </motion.h3>

            <div className="relative space-y-8">
              {/* Timeline line - only visible on md screens and up */}
              <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-light"></div>

              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative md:pl-16 pl-0"
                >
                  {/* Timeline dot - only visible on md screens and up */}
                  <div className="hidden md:block absolute left-4 top-6 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary shadow-lg"></div>

                  <div className="card-orange p-6 mt-0 md:mt-0">
                    {/* Title */}
                    <h4 className="text-xl font-semibold text-text-primary font-heading mb-2">
                      {edu.degree}
                    </h4>

                    {/* Date and Location in a row with space between */}
                    <div className="flex flex-wrap justify-between items-center mb-4">
                      {/* Left side - Date */}
                      <div className="flex items-center text-text-secondary text-sm mr-4 mb-2">
                        <FiCalendar className="mr-2 text-accent flex-shrink-0" />
                        <span>{edu.period}</span>
                      </div>

                      {/* Right side - Location */}
                      <div className="flex items-center text-text-secondary text-sm">
                        <FiMapPin className="mr-2 text-accent flex-shrink-0" />
                        <span className="max-w-[180px] break-words">
                          {edu.institution}
                        </span>
                      </div>
                    </div>

                    {/* Education details - can be toggled based on preference */}
                    {/* <p className="text-text-secondary">{edu.details}</p> */}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications Section */}
            <motion.h3
              variants={itemVariants}
              className="flex items-center gap-2 text-2xl font-bold text-text-primary mt-12 mb-8 font-heading"
            >
              <LuMedal className="text-accent text-2xl" />
              Certifications
            </motion.h3>

            <div className="relative space-y-8">
              {/* Timeline line - only visible on md screens and up */}
              <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-light"></div>

              {portfolioData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative md:pl-16 pl-0"
                >
                  {/* Timeline dot - only visible on md screens and up */}
                  <div className="hidden md:block absolute left-4 top-6 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary shadow-lg"></div>

                  <div className="card-orange p-5 mt-0 md:mt-0">
                    <div className="flex justify-between items-center">
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
