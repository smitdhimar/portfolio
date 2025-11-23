'use client';

import { motion } from 'framer-motion';
const name = process.env.NEXT_PUBLIC_NAME
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 text-sm text-center md:text-left">
            © {currentYear} {name}. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-500 text-xs">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}