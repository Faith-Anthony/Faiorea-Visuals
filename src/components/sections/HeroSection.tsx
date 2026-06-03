'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainer } from '@/utils/animations';
import { BRAND_INFO } from '@/utils/constants';

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.23, 1, 0.320, 1],
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-primary-black to-primary-black/80" />

      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-soft-gold/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-soft-gold/5 rounded-full blur-3xl"
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Small Label */}
        <motion.div
          custom={0}
          variants={textVariants}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-soft-gold/10 border border-soft-gold/30 rounded-full text-soft-gold text-sm font-medium tracking-widest">
            CREATIVE MEDIA STUDIO
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          custom={1}
          variants={textVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Capturing Stories</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft-gold via-soft-gold to-soft-gold/70">
            That Matter.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          variants={textVariants}
          className="text-lg md:text-xl text-light-grey mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Videography, storytelling, and creative visuals for brands, creators, and unforgettable moments.
        </motion.p>

        {/* Tagline */}
        <motion.p
          custom={3}
          variants={textVariants}
          className="text-soft-gold text-center text-base md:text-lg font-semibold mb-12 tracking-wide"
        >
          {BRAND_INFO.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-soft-gold text-primary-black rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: '#D4AF37',
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-soft-gold/50 text-soft-gold rounded-lg font-bold text-lg hover:border-soft-gold transition-all duration-300"
          >
            Book a Shoot
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-soft-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
