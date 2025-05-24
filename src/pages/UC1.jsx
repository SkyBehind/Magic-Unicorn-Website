import React, { useState, lazy, Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, FaCubes, FaCloud, FaBolt, FaSearch, FaTools, 
  FaLock, FaCogs, FaGlobe, FaRocket, FaExchangeAlt, FaChartLine, 
  FaWrench, FaLeaf, FaMicrochip, FaMemory, FaHdd, FaMicrophone, 
  FaFan, FaCube, FaWifi, FaBrain, FaDesktop, FaPalette, 
  FaMicrophoneAlt, FaCode, FaFlask, FaBoxOpen
} from 'react-icons/fa';
import { FiSliders } from 'react-icons/fi';
import { UC1Logo } from '../images';
import '../styles/UC1.css';

// Lazy load components
const LazyImage = lazy(() => import('../components/LazyImage'));

export default function UC1() {
  const [activeTab, setActiveTab] = useState('demo'); // Set demo as default tab
  const [activeFeature, setActiveFeature] = useState(null);

  // Set demo as default tab on component mount
  useEffect(() => {
    setActiveTab('demo');
  }, []);

  const hardwareSpecs = [
    { component: 'CPU', icon: <FaMicrochip />, description: 'AMD Ryzen 9 8945HS (Zen 4, 8c/16t)' },
    { component: 'GPU', icon: <FaPalette />, description: 'Radeon 780M iGPU (ROCm-ready) with optional dGPU expansion' },
    { component: 'RAM', icon: <FaMemory />, description: '96GB DDR5 (Upgradeable)' },
    { component: 'Storage', icon: <FaHdd />, description: '2TB NVMe SSD (Boot + Data)' },
    { component: 'Mic', icon: <FaMicrophone />, description: 'High-fidelity external mic for voice control' },
    { component: 'Cooling', icon: <FaFan />, description: 'RGB fan (quiet + cool)' },
    { component: 'Form Factor', icon: <FaCube />, description: 'Ultra-compact mini-PC (NUC-style)' },
    { component: 'Connectivity', icon: <FaWifi />, description: 'Wi-Fi 6E, Bluetooth 5.3, HDMI, Ethernet, USB-C' }
  ];

  const features = [
    {
      id: 'privacy',
      icon: <FaLock />,
      title: "Privacy & Full Local Control",
      emoji: "🔐",
      description: "Your data stays with you—always. UC-1 runs powerful AI models locally with no mandatory cloud dependency, ensuring maximum privacy and compliance for sensitive workflows."
    },
    {
      id: 'modular',
      icon: <FaCogs />,
      title: "Modular Hardware & Software Stack",
      emoji: "⚙️",
      description: "Future-proof your AI setup with easy-to-upgrade, swappable components. Need more GPU power or storage? Swap or expand without replacing your entire system."
    },
    {
      id: 'providers',
      icon: <FaGlobe />,
      title: "Supports All Top AI Providers",
      emoji: "🌐",
      description: "Seamlessly integrate with OpenAI, Anthropic, Google Gemini, Mistral, Cohere, Hugging Face, Together.ai, and more."
    },
    {
      id: 'setup',
      icon: <FaRocket />,
      title: "One-Click AI & RAG Setup",
      emoji: "🚀",
      description: "Deploy AI agents, retrieval-augmented generation (RAG), and embeddings with a single click. No PhD required."
    },
    {
      id: 'search',
      icon: <FaSearch />,
      title: "Advanced Search & Deep Data Retrieval",
      emoji: "🔍",
      description: "Leverage Qdrant-powered vector search to find exactly what you need in your data."
    },
    {
      id: 'tools',
      icon: <FaTools />,
      title: "Custom Tools & Function Servers",
      emoji: "🛠️",
      description: "Run your own custom microservices and function servers locally via Docker containers."
    }
  ];

  const softwareCategories = [
    {
      title: 'Inference Engine',
      icon: <FaBrain />,
      items: [
        'Ollama (OpenAI-compatible API)',
        'Powered by models like LLaMA, Gemma, Qwen, Mixtral, and more',
        'Built on: llama.cpp (highly optimized C++ backend)'
      ]
    },
    {
      title: 'AI UI & Desktop Environment',
      icon: <FaDesktop />,
      items: [
        'Open-WebUI (agent support, tools, profiles)',
        'Bolt.DIY (customized as MagiCode — low-code frontend builder)',
        'Open Interpreter (natural language system control)',
        'KDE Plasma 6 (sleek, customizable desktop environment)'
      ]
    },
    {
      title: 'Search, RAG & Knowledge Systems',
      icon: <FaSearch />,
      items: [
        'Qdrant – vector DB for document embeddings',
        'Redis – fast caching layer',
        'PostgreSQL – structured data + pgvector',
        'SearxNG – meta-search engine for deep queries'
      ]
    }
  ];

  const handleFeatureClick = (id) => {
    setActiveFeature(activeFeature === id ? null : id);
  };

  return (
    <div className="uc1">
      {/* Magic Unicorn presents text - top left */}
      <motion.div 
        className="magic-unicorn-presents"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Magic Unicorn presents...
      </motion.div>

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
        <Suspense fallback={<div>Loading...</div>}>
          <motion.img 
            src={UC1Logo}
            alt="UC-1 Logo" 
            className="hero-logo"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </Suspense>
        <motion.div 
          className="product-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Unicorn Commander: UC-1
        </motion.div>
        <motion.h1 
          className="glowing-text"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="headline-emphasis">Take Command</span> of Your AI. 
          <span className="headline-emphasis">Dominate</span> Your Workflow. 
          <span className="headline-emphasis">Enjoy the Freedom</span> to Spend Your Time However You Want.
        </motion.h1>
        <motion.p 
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Run the models you love—locally or from the cloud. UC-1 plays nice with OpenAI, Anthropic, Gemini, and more.
        </motion.p>
        <div className="cta-buttons">
          <div className="cta-container">
            <motion.a 
              href="https://buy.stripe.com/cNi5kDf0h0n45K2cHk18c00" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Order Now
            </motion.a>
            <motion.span 
              className="price-tag"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              $1,500
            </motion.span>
          </div>
          <motion.a 
            href="https://unicorncommander.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Official Product Page
          </motion.a>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-nav">
            <button 
              className={`tab-button ${activeTab === 'demo' ? 'active' : ''}`}
              onClick={() => setActiveTab('demo')}
            >
              <FaDesktop /> Demo
            </button>
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <FaRocket /> Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              <FaBolt /> Features
            </button>
            <button 
              className={`tab-button ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              <FaMicrochip /> Tech Specs
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Key Features Snapshot */}
            <section className="features-section">
              <div className="container">
                <motion.div 
                  className="section-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2>Powerful, Private, Modular</h2>
                </motion.div>

                <div className="features-grid">
                  <motion.div 
                    className="feature-card"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <FaShieldAlt className="feature-icon" />
                    <h3>Privacy & Full Local Control</h3>
                    <p>Your data stays with you, always.</p>
                  </motion.div>

                  <motion.div 
                    className="feature-card"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <FaCubes className="feature-icon" />
                    <h3>Modular Hardware & Software Stack</h3>
                    <p>Upgrade and customize on your terms.</p>
                  </motion.div>

                  <motion.div 
                    className="feature-card"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <FaCloud className="feature-icon" />
                    <h3>Supports All Top AI Providers</h3>
                    <p>OpenAI, Anthropic, Gemini, Mistral, and more.</p>
                  </motion.div>

                  <motion.div 
                    className="feature-card"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <FaBolt className="feature-icon" />
                    <h3>One-Click AI & RAG Setup</h3>
                    <p>Instant deployment, no PhD required.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="feature-card"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <FaSearch className="feature-icon" />
                    <h3>Search & Deep Search</h3>
                    <p>Find anything in your data with powerful search capabilities.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="feature-card"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                  >
                    <FaTools className="feature-icon" />
                    <h3>Local Tools & Function Servers</h3>
                    <p>Run custom tools and function servers locally for complete control.</p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Freedom of Choice Banner */}
            <section className="freedom-section">
              <div className="container">
                <motion.div 
                  className="section-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2>Freedom of Choice. Total Control.</h2>
                  <p>Whether you prefer blazing-fast local inference or tapping into the latest frontier models from OpenAI, Anthropic, Gemini, or Mistral—we've got you covered. Unicorn Commander UC-1 connects securely to your API keys, letting you switch between providers or fall back on cloud when needed. No lock-in. Just power.</p>
                </motion.div>
                <div className="logos-grid">
                  <motion.div 
                    className="logo-placeholder"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <span>OpenAI</span>
                  </motion.div>
                  <motion.div 
                    className="logo-placeholder"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <span>Anthropic</span>
                  </motion.div>
                  <motion.div 
                    className="logo-placeholder"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <span>Google Gemini</span>
                  </motion.div>
                  <motion.div 
                    className="logo-placeholder"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <span>Mistral</span>
                  </motion.div>
                  <motion.div 
                    className="logo-placeholder"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <span>Cohere</span>
                  </motion.div>
                  <motion.div 
                    className="logo-placeholder"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <span>Hugging Face</span>
                  </motion.div>
                  <motion.div 
                    className="logo-placeholder"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <span>Together.ai</span>
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === 'features' && (
          <motion.section 
            className="detailed-features-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container">
              <motion.h2
                className="section-title gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Complete Feature Set
              </motion.h2>
              
              <div className="features-grid detailed">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className={`feature-card detailed ${activeFeature === feature.id ? 'active' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleFeatureClick(feature.id)}
                  >
                    <div className="feature-header">
                      <div className="feature-emoji">{feature.emoji}</div>
                      <div className="feature-icon">{feature.icon}</div>
                      <h3>{feature.title}</h3>
                    </div>
                    <motion.div 
                      className="feature-description"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: activeFeature === feature.id ? 'auto' : 0,
                        opacity: activeFeature === feature.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{feature.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'specs' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <section className="hardware-specs-section">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">
                    <FaMicrochip /> Hardware Specifications
                  </h2>
                  <p className="section-subtitle">Standard UC-1 Build — Upgradable & Modular</p>
                </div>
                
                <div className="specs-table">
                  <div className="specs-table-header">
                    <div className="specs-table-cell">Component</div>
                    <div className="specs-table-cell">Description</div>
                  </div>
                  {hardwareSpecs.map((spec, index) => (
                    <motion.div 
                      className="specs-table-row"
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="specs-table-cell component">
                        <span className="component-icon">{spec.icon}</span>
                        <span>{spec.component}</span>
                      </div>
                      <div className="specs-table-cell">{spec.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section className="software-specs-section">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">
                    <FaCode /> Software Stack
                  </h2>
                  <p className="section-subtitle">Everything runs locally out of the box. Modular. Expandable. Unicornized.</p>
                </div>
                
                <div className="software-categories">
                  {softwareCategories.map((category, index) => (
                    <motion.div 
                      className="software-category"
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="category-header">
                        <div className="category-icon">{category.icon}</div>
                        <h3>{category.title}</h3>
                      </div>
                      <ul className="category-items">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === 'demo' && (
          <motion.section 
            className="demo-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container">
              <motion.div 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2>See UC-1 in Action</h2>
              </motion.div>
              <div className="video-container">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/nE3glhp2Pg8" 
                  title="UC-1 Demo Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <motion.p 
                className="video-caption"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Discover how UC-1 transforms AI workflows with local power and modular flexibility.
              </motion.p>
            </div>
          </motion.section>
        )}
      </div>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Liberate Your AI?</h2>
            <p>Experience the future with Unicorn Commander UC-1</p>
            <div className="cta-buttons-final">
              <a href="https://buy.stripe.com/cNi5kDf0h0n45K2cHk18c00" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Order Now - $1,500</a>
              <a href="https://unicorncommander.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit Official Product Site</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
