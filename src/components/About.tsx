import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import musashiImage from "../../public/pfp/musashi.png";

const About: React.FC = () => (
  <section id="about" className="py-20 bg-bg-primary">
    <div className="px-4 md:px-8 lg:px-16 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          About <span className="text-accent">Me</span>
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Photo Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl bg-white">
            <img
              src={musashiImage}
              alt="Asaad F. Rasul"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
        {/* Bio Column - Now spans 2 columns */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:col-span-2"
        >
          {/* No floating particles - clean solid design */}

          {/* Main content card */}
          <div className="relative card-orange p-8 group">
            {/* Decorative corner elements */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-lg"></div>

            {/* Floating icon */}
            <div className="absolute top-1 left-1 w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
                Backend Engineer & Future Data Scientist
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </h3>

              <div className="space-y-4 mb-8">
                <p className="text-text-secondary leading-relaxed">
                  I'm a passionate software engineer with expertise in building
                  scalable backend systems and full-stack applications.
                  Currently pursuing an M.Sc. in Data Science at the University
                  of Graz, Austria, I blend technical knowledge with a drive for
                  continuous learning.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  With experience in developing microservices, optimizing
                  database performance, and implementing real-time features, I
                  enjoy tackling complex problems and creating efficient
                  solutions.
                </p>
              </div>

              {/* Languages Section */}
              <div className="mb-6 p-4 language-container">
                <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  Languages
                </h4>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.languages.map((language, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center rounded-full px-3 py-1 border-2 border-accent hover:border-accent-light transition-colors duration-300 bg-bg-tertiary"
                    >
                      <span className="text-text-secondary text-sm font-medium">
                        {language.name}
                      </span>
                      <span className="mx-2 text-accent/60">•</span>
                      <span className="text-accent text-sm font-semibold">
                        {language.proficiency}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* No animated border - using solid border style */}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
