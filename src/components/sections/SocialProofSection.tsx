'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { containerVariants, itemVariants } from '@/utils/animations';

interface Stat {
  label: string;
  value: number;
}

const STATS: Stat[] = [
  { label: 'Projects Completed', value: 0 }, // Editable
  { label: 'Happy Clients', value: 0 },      // Editable
  { label: 'Events Covered', value: 0 },     // Editable
  { label: 'Content Produced', value: 0 },   // Editable
];

function StatCounter({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = stat.value / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 rounded-lg border border-soft-gold/20 hover:border-soft-gold/50 hover:gold-glow transition-all duration-300"
      >
        <div className="text-4xl md:text-5xl font-bold text-soft-gold mb-2">
          {count}+
        </div>
        <p className="text-light-grey text-sm md:text-base">{stat.label}</p>
      </motion.div>
    </motion.div>
  );
}

export default function SocialProofSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-32 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Our Impact
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-soft-gold mx-auto"
          />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {STATS.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-light-grey/60 text-xs mt-8"
        >
          Update these values in the component file to reflect your actual statistics
        </motion.p>
      </div>
    </section>
  );
}
