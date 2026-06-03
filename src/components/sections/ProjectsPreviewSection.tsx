'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { containerVariants, itemVariants } from '@/utils/animations';
import { PROJECT_CATEGORIES } from '@/utils/constants';

interface ProjectItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  instagramLink: string;
}

// Sample projects - these should be replaced with real project data
const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    category: 'Weddings',
    title: 'Sarah & Michael',
    description: 'Cinematic wedding film capturing an unforgettable celebration',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop',
    instagramLink: 'https://instagram.com',
  },
  {
    id: 2,
    category: 'Church Programs',
    title: 'Easter Celebration',
    description: 'Professional church event documentation with storytelling',
    image: 'https://images.unsplash.com/photo-1514783212-6d3e8bdfea81?w=500&h=500&fit=crop',
    instagramLink: 'https://instagram.com',
  },
  {
    id: 3,
    category: 'Brand Events',
    title: 'Tech Conference 2024',
    description: 'Corporate event coverage and brand storytelling',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
    instagramLink: 'https://instagram.com',
  },
  {
    id: 4,
    category: 'Event Decorations',
    title: 'Luxury Gala Setup',
    description: 'Elegant event decoration showcase',
    image: 'https://images.unsplash.com/photo-1469881944519-8be822b954d1?w=500&h=500&fit=crop',
    instagramLink: 'https://instagram.com',
  },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-lg cursor-pointer h-64 md:h-80"
    >
      {/* Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
      </div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-end p-6"
      >
        {/* Category Badge */}
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-block px-3 py-1 bg-soft-gold/20 border border-soft-gold/50 rounded-full text-soft-gold text-xs font-semibold">
            {project.category}
          </span>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={project.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-soft-gold hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z" />
            </svg>
          </motion.a>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-soft-gold transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-light-grey/90 text-sm">{project.description}</p>
      </motion.div>

      {/* Border Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 rounded-lg border border-soft-gold/30"
      />
    </motion.div>
  );
}

export default function ProjectsPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-32 bg-primary-black">
      {/* Background Decoration */}
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-b from-soft-gold/10 via-transparent to-transparent"
      />

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
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-soft-gold mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-light-grey text-lg max-w-2xl mx-auto"
          >
            A curated collection of our most memorable work
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SAMPLE_PROJECTS.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants} custom={index}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-soft-gold text-soft-gold rounded-lg font-semibold hover:bg-soft-gold hover:text-primary-black transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
