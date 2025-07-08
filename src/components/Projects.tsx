import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";

// Card Animations on First Load
// Container animation that controls the overall grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Individual card animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// Define project interface
interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  imageUrl: string;
}

const allTags = Array.from(
  new Set(portfolioData.selectedProjects.flatMap((project) => project.tags))
);

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(
    portfolioData.selectedProjects as Project[]
  );
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  useEffect(() => {
    // When filter changes, update filtered projects immediately
    if (selectedFilter === "All") {
      setFilteredProjects(portfolioData.selectedProjects as Project[]);
    } else {
      const filtered = (portfolioData.selectedProjects as Project[]).filter(
        (project) => project.tags.includes(selectedFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedFilter]);

  const handleCardTouch = (projectTitle: string) => {
    // Only handle touch interactions on touch devices
    if (isTouchDevice) {
      setActiveCard(activeCard === projectTitle ? null : projectTitle);
    }
  };

  return (
    <section id="projects" className="py-20 bg-bg-primary">
      <div className="px-4 md:px-8 lg:px-16 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
            My <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            className={`px-6 py-3 rounded-full font-medium ${
              selectedFilter === "All"
                ? "filter-btn-selected"
                : "card-orange text-text-secondary border-2"
            }`}
            onClick={() => setSelectedFilter("All")}
            initial={false}
            animate={{
              scale: selectedFilter === "All" ? 1.05 : 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
          >
            All
          </motion.button>

          {allTags.map((tag) => (
            <motion.button
              key={tag}
              className={`px-6 py-3 rounded-full font-medium ${
                selectedFilter === tag
                  ? "filter-btn-selected"
                  : "card-orange text-text-secondary border-2"
              }`}
              onClick={() => setSelectedFilter(tag)}
              initial={false}
              animate={{
                scale: selectedFilter === tag ? 1.05 : 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            exit={{ opacity: 0, y: 20 }}
            id="projects-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ gridAutoRows: "1fr" }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`h-full ${isTouchDevice ? "cursor-pointer" : ""}`}
                layout
                onClick={() => handleCardTouch(project.title)}
                animate={{
                  scale:
                    isTouchDevice && activeCard === project.title ? 1.012 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                // whileHover={!isTouchDevice ? { scale: 1.012 } : undefined}
              >
                <div className="card-orange overflow-hidden group flex flex-col h-full">
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-accent to-accent-dark relative overflow-hidden">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-accent to-accent-dark">
                        <h3 className="text-white font-bold text-xl drop-shadow-lg">
                          {project.title}
                        </h3>
                      </div>
                    )}

                    {/* Title overlay */}
                    <div
                      className={
                        `absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent ` +
                        `transition-all duration-300 flex items-center justify-center ` +
                        (isTouchDevice
                          ? activeCard === project.title
                            ? "opacity-100"
                            : "opacity-0"
                          : "opacity-0 group-hover:opacity-100")
                      }
                    >
                      <div className="text-center px-4">
                        <h3 className="text-white font-bold text-xl drop-shadow-lg">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-text-secondary mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Project Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs rounded-full font-medium bg-accent text-bg-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    {(project.githubUrl ||
                      project.liveUrl ||
                      project.appStoreUrl ||
                      project.playStoreUrl) && (
                      <div className="flex gap-4 mt-auto">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent transition-colors duration-200"
                            aria-label={`View ${project.title} source code on GitHub`}
                          >
                            <FiGithub size={20} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent transition-colors duration-200"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <FiExternalLink size={20} />
                          </a>
                        )}
                        {project.appStoreUrl && (
                          <a
                            href={project.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent transition-colors duration-200"
                            aria-label={`Download ${project.title} from App Store`}
                          >
                            <FaApple size={20} />
                          </a>
                        )}
                        {project.playStoreUrl && (
                          <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent transition-colors duration-200"
                            aria-label={`Download ${project.title} from Google Play Store`}
                          >
                            <FaGooglePlay size={20} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;