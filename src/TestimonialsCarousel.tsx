import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CTO, TechCorp',
    text: 'BLUU HORIZON delivered an exceptional AI solution that transformed our operations. Their team is highly skilled and professional.',
    initials: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, InnovateLabs',
    text: 'Working with them was a game-changer. They understood our needs perfectly and built a scalable platform within weeks.',
    initials: 'PS',
  },
  {
    name: 'Amit Patel',
    role: 'Product Manager, FutureSoft',
    text: 'Their expertise in AI/ML is unmatched. The predictive models they developed saved us 30% in operational costs.',
    initials: 'AP',
  },
  {
    name: 'Neha Gupta',
    role: 'Founder, AlphaAI',
    text: 'I highly recommend BLUU HORIZON for any software development project. They are reliable, innovative, and results-driven.',
    initials: 'NG',
  },
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="testimonials-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="testimonial-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="testimonial-quote-mark">"</div>
          <div className="testimonial-avatar">
            <div className="avatar-wrapper">
              {testimonials[currentIndex].initials}
            </div>
          </div>
          <p className="testimonial-text">
            {testimonials[currentIndex].text}
          </p>
          <div className="testimonial-author">
            <strong>{testimonials[currentIndex].name}</strong>
            <span>{testimonials[currentIndex].role}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-btn">
          ←
        </button>
        <button onClick={handleNext} className="carousel-btn">
          →
        </button>
      </div>

      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;