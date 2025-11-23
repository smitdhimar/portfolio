'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../lib/data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and problem-solving approaches
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
                >
                  <Github size={18} />
                  Code
                </a>
                {project?.demo ? <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
                >
                  <ExternalLink size={18} />
                  Demo
                </a> :<></> }
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}