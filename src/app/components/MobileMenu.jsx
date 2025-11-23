'use client';

import { motion } from 'framer-motion';
import { ArrowRightFromLine } from 'lucide-react';

const menuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

export default function MobileMenu({ navLinks, onClose }) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
      />

      {/* Menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl z-50 md:hidden"
      >
        <div className="flex justify-between flex-col h-full p-6 pt-20">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              download
              custom={navLinks.length}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              onClick={handleLinkClick}
              className="mt-4 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-center font-medium"
            >
              Download Resume
            </motion.a>
          </nav>
          <div className="h-12 flex items-center">
            <div className="h-10 w-10 rounded-3xl flex items-center justify-between bg-gray-900" onClick={onClose}>

          <ArrowRightFromLine className='ml-2' color='#ffffff' strokeWidth={3} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}