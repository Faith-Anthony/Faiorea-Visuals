'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { PROCESS_STEPS } from '@/utils/constants';

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary-black via-primary-black to-primary-black/95">
      {/* Decorative Background */}
      <motion.div
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-soft-gold/5 via-transparent to-soft-gold/5"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Our Process
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-soft-gold mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-light-grey text-lg max-w-2xl mx-auto"
          >
            From concept to delivery, we follow a refined creative process
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="relative"
        >
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-soft-gold/20 via-soft-gold/50 to-soft-gold/20" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                custom={index}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative z-10 p-8 rounded-lg border border-soft-gold/30 bg-gradient-to-br from-primary-black/80 to-primary-black/60 hover:border-soft-gold/60 transition-all duration-300 group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-soft-gold text-primary-black flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.id}
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-soft-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-light-grey/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-lg bg-soft-gold/5 -z-10"
                  />
                </motion.div>

                {/* Arrow (Desktop) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-8 text-soft-gold/40">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
