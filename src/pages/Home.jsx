import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaCode, FaHeart, FaMagic, FaCogs, FaLightbulb } from 'react-icons/fa';
import { UnicornLogo } from '../images';
import '../styles/Home.css';

export default function Home() {
  const taglines = [
    "Technology So Advanced, It Feels Like Magic",
    "Skunkworks, but Sparkly",
    "Advanced Tech. Artfully Deployed",
    "Engineering Reality, With Style",
    "Open Source. Weird Science. Real Magic",
    "We Specialize in the Impossible",
    "We specialize in WSFM (Weird Science and Freakin' Magic)",
    "Engineering the Extraordinary",
    "Bringing Ideas to Life, Beautifully",
    "Built to Amaze. Designed to Work"
  ];

  const [currentTagline, setCurrentTagline] = useState('');

  useEffect(() => {
    // Select a random tagline on component mount (page refresh)
    const randomIndex = Math.floor(Math.random() * taglines.length);
    setCurrentTagline(taglines[randomIndex]);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="sparkles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="sparkle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <motion.img 
          src={UnicornLogo}
          alt="Magic Unicorn Logo" 
          className="hero-logo"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        <motion.h1 
          className="company-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Magic Unicorn
        </motion.h1>
        
        <motion.div 
          className="company-subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Unconventional Technology & Stuff Inc.
        </motion.div>
        
        <motion.h2 
          className="tagline rotating-tagline"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          key={currentTagline} // This ensures re-animation when tagline changes
        >
          {currentTagline}
        </motion.h2>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          At Magic Unicorn, we don't just innovate—we reimagine what's possible. Harnessing the power of open-source, creativity, and cutting-edge AI, we craft solutions that are as unique as the challenges they solve.
        </motion.p>
      </section>

      {/* Why Choose Magic Unicorn Section */}
      <section className="why-choose-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Magic Unicorn?</h2>
          </motion.div>

          <div className="features-grid">
            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaRocket className="feature-icon" />
              <h3>Innovative Solutions</h3>
              <p>Custom-crafted AI and automation that defy convention.</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FaCode className="feature-icon" />
              <h3>Open Source Commitment</h3>
              <p>Transparent, community-driven technology empowering you.</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FaHeart className="feature-icon" />
              <h3>Unmistakable Whimsy</h3>
              <p>From our distinctive unicorn logo to our out-of-the-box thinking, expect the unexpected.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Magic Toolkit Section */}
      <section className="toolkit-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Magic Toolkit</h2>
          </motion.div>

          <div className="toolkit-grid">
            <motion.div 
              className="toolkit-card featured"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaMagic className="toolkit-icon" />
              <h3>Unicorn Commander UC-1</h3>
              <p>Your personal AI command center—fully local, modular, and privacy-first.</p>
              <Link to="/uc1" className="btn btn-primary">Learn More</Link>
            </motion.div>

            <motion.div 
              className="toolkit-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FaCogs className="toolkit-icon" />
              <h3>AI Automation & Integration</h3>
              <p>Seamless solutions designed around your unique workflows.</p>
            </motion.div>

            <motion.div 
              className="toolkit-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FaLightbulb className="toolkit-icon" />
              <h3>Custom Solutions</h3>
              <p>If you dream it, we build it—innovatively, ethically, and effectively.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Experience the Magic?</h2>
            <p>Join us in shaping the future of technology.</p>
            <div className="cta-buttons">
              <Link to="/about" className="btn btn-primary">Learn More About Magic Unicorn</Link>
              <Link to="/uc1" className="btn btn-secondary">Explore Unicorn Commander UC-1</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
