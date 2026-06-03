'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { BRAND_INFO } from '@/utils/constants';

export default function BookAShootCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary-black via-primary-black to-primary-black/95 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-soft-gold/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -50, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-soft-gold/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Let&apos;s Tell</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft-gold via-soft-gold to-soft-gold/70">
              Your Story
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-soft-gold mx-auto my-6"
          />

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-soft-gold font-semibold mb-8"
          >
            {BRAND_INFO.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-light-grey mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            From concept to delivery, we create cinematic visuals that capture the essence of your story and connect with your audience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 50px rgba(212, 175, 55, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-soft-gold text-primary-black rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Shoot Now
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: '#D4AF37',
                boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-soft-gold/50 text-soft-gold rounded-lg font-bold text-lg hover:border-soft-gold transition-all duration-300"
            >
              View Our Portfolio
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-soft-gold/20"
          >
            <p className="text-light-grey/60 text-sm mb-6">
              Trusted by brands and creators
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full border border-soft-gold/20 bg-primary-black/50"
                >
                  <span className="text-soft-gold/80 text-xs font-semibold">
                    Brand Partner
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
