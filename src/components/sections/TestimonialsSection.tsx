'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { containerVariants, itemVariants } from '@/utils/animations';

interface Testimonial {
  id: number;
  clientName: string;
  clientPosition: string;
  clientImage: string;
  review: string;
  rating: number;
}

// Empty testimonials structure - to be filled with real client feedback
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    clientName: 'Client Name',
    clientPosition: 'Position / Organization',
    clientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    review: 'Add testimonial content here',
    rating: 5,
  },
  {
    id: 2,
    clientName: 'Client Name',
    clientPosition: 'Position / Organization',
    clientImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    review: 'Add testimonial content here',
    rating: 5,
  },
  {
    id: 3,
    clientName: 'Client Name',
    clientPosition: 'Position / Organization',
    clientImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    review: 'Add testimonial content here',
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 rounded-lg border border-soft-gold/20 bg-gradient-to-br from-primary-black/80 to-primary-black/60 hover:border-soft-gold/50 transition-all duration-300"
    >
      {/* Quote Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className="text-4xl text-soft-gold/40 mb-4"
      >
        "
      </motion.div>

      {/* Review Text */}
      <p className="text-light-grey leading-relaxed mb-6 min-h-24">
        {testimonial.review}
      </p>

      {/* Star Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-soft-gold"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.clientImage}
          alt={testimonial.clientName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-white">{testimonial.clientName}</h4>
          <p className="text-soft-gold text-sm">{testimonial.clientPosition}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-primary-black">
      {/* Decorative Background */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-b from-soft-gold/5 via-transparent to-transparent"
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
            What Our Clients Say
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-soft-gold mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-light-grey text-lg max-w-2xl mx-auto"
          >
            Real feedback from brands, creators, and individuals we've worked with
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              custom={index}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-light-grey/60 text-sm mt-12"
        >
          Add real client testimonials to this section. Update client names, positions, images, and reviews in the component.
        </motion.p>
      </div>
    </section>
  );
}
