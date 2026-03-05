import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ServiceCard from './ServiceCard';
import TestimonialsCarousel from './TestimonialsCarousel';
import './App.css';

// Services data (same)
const services = [
  { title: 'Custom AI Solutions', desc: 'LLMs, computer vision, predictive analytics', icon: '🧠' },
  { title: 'AI/ML Development', desc: 'End-to-end model development & deployment', icon: '⚙️' },
  { title: 'Web Development', desc: 'React, Vue, Angular, Node.js, Python', icon: '🌐' },
  { title: 'Mobile Apps', desc: 'iOS, Android, Flutter, React Native', icon: '📱' },
  { title: 'Cloud & DevOps', desc: 'AWS, Azure, GCP, CI/CD, Kubernetes', icon: '☁️' },
  { title: 'Data Engineering', desc: 'ETL, data lakes, real-time analytics', icon: '📊' },
  { title: 'Blockchain & Web3', desc: 'Smart contracts, dApps, DeFi', icon: '🔗' },
  { title: 'IoT & Edge AI', desc: 'Intelligent devices & real-time processing', icon: '📡' },
];

// Why Us data (same)
const whyUs = [
  { title: 'Expert Team', desc: 'Senior AI engineers and full-stack developers.', icon: '👥' },
  { title: 'Proven Results', desc: '30+ successful projects delivered.', icon: '🏆' },
  { title: 'Cutting-Edge Tech', desc: 'We use the latest AI/ML frameworks.', icon: '⚡' },
  { title: 'Client-Centric', desc: 'Your success is our priority.', icon: '🤝' },
];

// Clients (same)
const clients = ['TechCorp', 'InnovateLabs', 'FutureSoft', 'AlphaAI', 'BetaSolutions', 'GammaTech'];

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="app">
      {/* Header with logo and navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="header"
      >
        <div className="logo">
          <span className="logo-icon">🔷</span>
          <span className="logo-text">BLUUE HORIZON</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#who">Who We Are</a>
          <a href="#services">What We Do</a>
          <a href="#clients">Our Clients</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#whyus">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      {/* Hero Section (black) */}
      <motion.section className="hero" id="home" style={{ y: backgroundY }}>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            BLUUE HORIZON
          </motion.h1>
          <motion.p className="slogan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
          >
            Innovating Beyond Boundaries ✨
          </motion.p>
          <motion.a href="#contact" className="cta"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255,255,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started 🚀
          </motion.a>
        </div>
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
              animate={{
                y: [null, '-30px', '30px', '-30px'],
                x: [null, '20px', '-20px', '20px'],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
            />
          ))}
        </div>
      </motion.section>

      {/* Who We Are (white) */}
      <section className="section white" id="who">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Who We Are 👥
          </motion.h2>
          <motion.div
            className="who-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              BLUUE HORIZON is a premier AI and software development company dedicated to transforming businesses through cutting-edge technology. With a team of passionate experts, we craft intelligent solutions that drive growth and innovation. 🌟
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do (black) */}
      <section className="section black" id="services">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            What We Do ⚙️
          </motion.h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients (white) */}
      <section className="section white" id="clients">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Our Clients 🤝
          </motion.h2>
          <motion.div
            className="clients-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="client-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {client}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials (black) */}
      <section className="section black" id="testimonials">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            What Our Clients Say 💬
          </motion.h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Why Us (white) */}
      <section className="section white" id="whyus">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us ⚡
          </motion.h2>
          <div className="whyus-grid">
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                className="whyus-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                <div className="whyus-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us (black) */}
      <section className="section black" id="contact">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Contact Us 📬
          </motion.h2>
          <motion.div
            className="contact-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">
              <h3>Let's Talk! 💬</h3>
              <p><span className="contact-icon">📍</span> <strong>Location:</strong> New Delhi, India</p>
              <p><span className="contact-icon">📞</span> <strong>Phone:</strong> +91 12345 67890</p>
              <p><span className="contact-icon">✉️</span> <strong>Email:</strong> hello@bluuehorizon.com</p>
              <p><span className="contact-icon">🌐</span> <strong>Website:</strong> www.bluuehorizon.com</p>
              <div className="social-icons">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">💼</a>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send a Message ✍️</h3>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows={4}></textarea>
              <button className="submit-btn">Send Message 📨</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer (black) */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 BLUUE HORIZON. All rights reserved. ✨</p>
          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;