"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { contactDetails } from "../../../config";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: `https://github.com/${contactDetails?.socialMediaUsername}`,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: `https://linkedin.com/in/${contactDetails?.socialMediaUsername}`,
    icon: Linkedin,
  },
];

export default function Contact() {
  const [ emailIdButtonText, setEmailIdButtonText] = useState(contactDetails?.emailId);

   const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(emailIdButtonText);
          
          setEmailIdButtonText(()=>"Copied !")
          setTimeout(() => setEmailIdButtonText(contactDetails?.emailId), 2000); // Reset "Copied!" state after 2 seconds
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      };


  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out if you'd like to connect!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex flex-row gap-5 justify-center items-center"
          >
            <Link
              href={`mailto:${contactDetails?.emailId}`}
              target="_blank"
              prefetch={false}
              onClick={() => {
                console.log(`mailto:${contactDetails?.emailId}`);
              }}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-lg"
            >
              <Mail size={24} />
              Send me an email
            </Link>
            <div className="text-5xl"> | </div>
            <div 
            onClick={handleCopy}
            className="cursor-pointer gap-3 px-8 py-4 border-2 border-gray-900 hover:bg-gray-100 rounded-lg text-lg font-medium">
              {emailIdButtonText}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-600 mb-6">Or connect with me on</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 hover:text-gray-900"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
