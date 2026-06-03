'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { FAQ_ITEMS } from '@/utils/constants';

interface FAQItemProps {
  item: (typeof FAQ_ITEMS)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ item, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      className="border border-soft-gold/20 rounded-lg overflow-hidden hover:border-soft-gold/50 transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-primary-black/50 hover:bg-primary-black/80 transition-all duration-300"
      >
        <h3 className="text-left font-semibold text-white text-lg hover:text-soft-gold transition-colors">
          {item.question}
        </h3>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 text-soft-gold flex-shrink-0 ml-4"
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
        </motion.svg>
      </button>

      {/* Answer */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-primary-black/30 border-t border-soft-gold/20 text-light-grey leading-relaxed">
          {item.answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary-black to-primary-black/95">
      {/* Background Decoration */}
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-t from-soft-gold/5 via-transparent to-transparent"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-soft-gold mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-light-grey text-lg"
          >
            Quick answers to common questions about our services
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-4"
        >
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-light-grey mb-4">Didn&apos;t find what you&apos;re looking for?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-soft-gold text-primary-black rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
