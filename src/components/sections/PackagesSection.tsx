'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { PACKAGE_CATEGORIES } from '@/utils/constants';

export default function PackagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary-black/95 to-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Custom Packages
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-soft-gold mx-auto mb-6"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-light-grey leading-relaxed"
          >
            Every story is different, and so is every project. Pricing varies depending on location, event duration, deliverables, production requirements, crew requirements, and creative scope.
          </motion.p>
        </motion.div>

        {/* Package Categories Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
        >
          {PACKAGE_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              custom={index}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)',
              }}
              className="p-4 rounded-lg border border-soft-gold/20 hover:border-soft-gold/50 bg-primary-black/50 hover:bg-primary-black/80 transition-all duration-300 cursor-pointer"
            >
              <h3 className="font-semibold text-white text-center hover:text-soft-gold transition-colors">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="p-12 rounded-lg border border-soft-gold/30 bg-gradient-to-r from-primary-black/50 via-primary-black/30 to-primary-black/50 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-4"
          >
            Get a Custom Quote
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-light-grey mb-8 max-w-2xl mx-auto"
          >
            Tell us about your project and we&apos;ll create a personalized package that meets your specific needs and budget.
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-soft-gold text-primary-black rounded-lg font-bold hover:shadow-lg transition-all duration-300"
          >
            Request a Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
