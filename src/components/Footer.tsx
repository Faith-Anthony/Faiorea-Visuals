'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BRAND_INFO, NAVIGATION_LINKS, SOCIAL_LINKS } from '@/utils/constants';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-primary-black border-t border-soft-gold/20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-gold/5 via-transparent to-primary-black" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-soft-gold mb-3">
                {BRAND_INFO.name}
              </h3>
              <p className="text-light-grey/80 text-sm leading-relaxed">
                {BRAND_INFO.tagline}
              </p>
              <p className="text-light-grey/60 text-xs mt-3">
                Creative media studio specializing in videography and storytelling
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-light-grey/80 hover:text-soft-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-light-grey/80 hover:text-soft-gold transition-colors">
                    Videography
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-grey/80 hover:text-soft-gold transition-colors">
                    Video Editing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-grey/80 hover:text-soft-gold transition-colors">
                    Event Coverage
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-grey/80 hover:text-soft-gold transition-colors">
                    Brand Content
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-light-grey/80 hover:text-soft-gold transition-colors text-sm block"
                >
                  📧 {SOCIAL_LINKS.email}
                </a>
                <div className="flex gap-4 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.2, color: '#D4AF37' }}
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-grey/80 text-lg"
                  >
                    📸
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, color: '#D4AF37' }}
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-grey/80 text-lg"
                  >
                    🎵
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-soft-gold/50 to-transparent my-8"
          />

          {/* Bottom Footer */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <motion.p
              variants={itemVariants}
              className="text-light-grey/60 text-sm"
            >
              © {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex gap-6 mt-4 md:mt-0"
            >
              <a
                href="#"
                className="text-light-grey/60 hover:text-soft-gold transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-light-grey/60 hover:text-soft-gold transition-colors text-sm"
              >
                Terms of Service
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="h-1 bg-gradient-to-r from-transparent via-soft-gold to-transparent"
        />
      </div>
    </footer>
  );
}
