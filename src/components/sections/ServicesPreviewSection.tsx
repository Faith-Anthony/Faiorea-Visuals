'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { SERVICES } from '@/utils/constants';

export default function ServicesPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-32 bg-primary-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-primary-black/95 to-primary-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Our Services
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-soft-gold mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-light-grey text-lg max-w-2xl mx-auto"
          >
            Premium creative services designed to tell your story
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              custom={index}
              whileHover={{
                y: -5,
                boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)',
              }}
              className="group p-6 rounded-lg border border-soft-gold/20 bg-gradient-to-br from-primary-black to-primary-black/80 hover:border-soft-gold/50 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-soft-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-light-grey/80 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Gold Accent */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-soft-gold mt-4"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
