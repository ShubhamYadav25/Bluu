import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ServiceCard from './ServiceCard';
import TestimonialsCarousel from './TestimonialsCarousel';
import './App.css';

const services = [
  { title: 'Custom AI Solutions', desc: 'LLMs, computer vision & predictive analytics for enterprise', icon: '⚡' },
  { title: 'AI/ML Development', desc: 'End-to-end model development, training & deployment', icon: '🧬' },
  { title: 'Web Development', desc: 'React, Next.js, Vue — modern full-stack platforms', icon: '◆' },
  { title: 'Mobile Apps', desc: 'iOS, Android, Flutter & React Native experiences', icon: '▲' },
  { title: 'Cloud & DevOps', desc: 'AWS, Azure, GCP with CI/CD & Kubernetes', icon: '☁' },
  { title: 'Data Engineering', desc: 'ETL pipelines, data lakes & real-time analytics', icon: '◉' },
  { title: 'Blockchain & Web3', desc: 'Smart contracts, dApps & DeFi protocols', icon: '⬡' },
  { title: 'IoT & Edge AI', desc: 'Intelligent devices with real-time processing', icon: '◎' },
];

const whyUs = [
  { title: 'Expert Team', desc: 'Senior AI engineers and full-stack developers with 10+ years experience.', icon: '◈' },
  { title: 'Proven Results', desc: '30+ successful projects delivered across industries.', icon: '✦' },
  { title: 'Cutting-Edge Tech', desc: 'We leverage the latest AI/ML frameworks and tools.', icon: '⚡' },
  { title: 'Client-Centric', desc: 'Your success is our north star. Always.', icon: '◆' },
];

const clients = [
  { name: 'TechCorp', emoji: '◆' },
  { name: 'InnovateLabs', emoji: '▲' },
  { name: 'FutureSoft', emoji: '◉' },
  { name: 'AlphaAI', emoji: '⬡' },
  { name: 'BetaSolutions', emoji: '◈' },
  { name: 'GammaTech', emoji: '✦' },
];

const stats = [
  { number: '30+', label: 'Projects Delivered' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '15+', label: 'Team Members' },
  { number: '5+', label: 'Years Experience' },
];

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div className="app">
      {/* ════════ HEADER ════════ */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="header"
      >
        <div className="logo">
          <span className="logo-text">BLUU HORIZON</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#who">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#testimonials">Reviews</a>
          <a href="#whyus">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      {/* ════════ HERO ════════ */}
      <motion.section className="hero" id="home" style={{ y: backgroundY }}>
        <div className="grid-bg" />
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="badge-dot" />
            AI-Powered Software Company
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            BLUU
            <br />
            HORIZON
          </motion.h1>

          <motion.p
            className="slogan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Innovating Beyond Boundaries
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started →
            </motion.a>
            <motion.a
              href="#services"
              className="cta-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Our Services ↓
            </motion.a>
          </motion.div>
        </div>

        <div className="particles">
          {[...Array(210)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -30, 30, 0],
                x: [0, 15, -15, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + Math.random() * 15,
                repeat: Infinity,
                repeatType: 'mirror',
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
              }}
            />
          ))}
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          scroll
          <div className="scroll-line" />
        </motion.div>
      </motion.section>

      {/* ════════ STATS BAR ════════ */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WHO WE ARE ════════ */}
      <section className="section dark" id="who">
        <div className="container">
          <div className="section-header">
            <motion.div
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              ◈ About Us
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Who We Are
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              A premier AI & software development company
            </motion.p>
          </div>

          <motion.div
            className="who-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="who-text-card">
              <p>
                <span className="highlight">BLUU HORIZON</span> is a premier AI and software development
                company dedicated to transforming businesses through cutting-edge technology. With a team
                of passionate experts, we craft <span className="highlight">intelligent solutions</span> that
                drive growth, efficiency, and innovation across industries.
              </p>
            </div>
            <div className="who-features">
              <motion.div
                className="who-feature"
                whileHover={{ y: -3 }}
              >
                <div className="who-feature-icon">⚡</div>
                <div className="who-feature-text">Fast Delivery</div>
              </motion.div>
              <motion.div
                className="who-feature"
                whileHover={{ y: -3 }}
              >
                <div className="who-feature-icon">◆</div>
                <div className="who-feature-text">Premium Quality</div>
              </motion.div>
              <motion.div
                className="who-feature"
                whileHover={{ y: -3 }}
              >
                <div className="who-feature-icon">✦</div>
                <div className="who-feature-text">24/7 Support</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ WHAT WE DO ════════ */}
      <section className="section light" id="services">
        <div className="grid-bg" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <motion.div
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              ⚡ Services
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              What We Do
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              End-to-end technology solutions for modern businesses
            </motion.p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════ OUR CLIENTS ════════ */}
      <section className="section dark" id="clients">
        <div className="container">
          <div className="section-header">
            <motion.div
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              ✦ Trusted By
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Clients
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Companies that trust us to deliver excellence
            </motion.p>
          </div>
          <motion.div
            className="clients-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="client-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="client-dot" />
                {client.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section className="section light" id="testimonials">
        <div className="container">
          <div className="section-header">
            <motion.div
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              ◉ Reviews
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              What Clients Say
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Real feedback from real partners
            </motion.p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ════════ WHY US ════════ */}
      <section className="section dark" id="whyus">
        <div className="container">
          <div className="section-header">
            <motion.div
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              ▲ Advantages
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              What sets us apart from the rest
            </motion.p>
          </div>
          <div className="whyus-grid">
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                className="whyus-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="whyus-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CONTACT ════════ */}
      <section className="section light" id="contact">
        <div className="container">
          <div className="section-header">
            <motion.div
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              ◆ Get In Touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to start your next project? Let's talk.
            </motion.p>
          </div>
          <motion.div
            className="contact-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">
              <h3>☎ Let's Connect</h3>
              <p>
                <span className="contact-icon">📍</span>
                <span><strong>Location</strong><br />New Delhi, India</span>
              </p>
              <p>
                <span className="contact-icon">📞</span>
                <span><strong>Phone</strong><br />+91 7887036667</span>
              </p>
              <p>
                <span className="contact-icon">✉</span>
                <span><strong>Email</strong><br />hello@bluuhorizon.com</span>
              </p>
              <p>
                <span className="contact-icon">◆</span>
                <span><strong>Website</strong><br />www.bluuhorizon.com</span>
              </p>
              <div className="social-icons">
                <a href="#" className="social-icon">in</a>
                <a href="#" className="social-icon">𝕏</a>
                <a href="#" className="social-icon">◉</a>
                <a href="#" className="social-icon">▶</a>
              </div>
            </div>
            <div className="contact-form">
              <h3>✍ Send a Message</h3>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Tell us about your project..." rows={5}></textarea>
              <button className="submit-btn">Send Message →</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 BLUU HORIZON. All rights reserved.</p>
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