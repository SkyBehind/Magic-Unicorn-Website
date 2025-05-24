import React from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import BackgroundSparkles from '../components/BackgroundSparkles'
import { FaRobot, FaCode, FaChartLine, FaPalette, FaFlask, FaPhone, FaMagic } from 'react-icons/fa'
import '../styles/Services.css'

function Services() {
  const services = [
    {
      icon: <FaRobot />,
      title: "AI Solutions & Automation",
      emoji: "💡",
      description: "Build smart, adaptive systems tailored to your workflows.",
      features: [
        "Custom AI & LLM Pipelines",
        "Natural Language Interfaces",
        "Automation Workflows",
        "System Orchestration & Plugins",
        "Open Interpreter & Agent Systems"
      ]
    },
    {
      icon: <FaCode />,
      title: "Custom Development & Integration",
      emoji: "🖥️",
      description: "Tailored software to solve complex, high-impact problems.",
      features: [
        "Web & Mobile Apps",
        "API / Plugin Development",
        "Systems Integration",
        "Local-First Infrastructure Consulting"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Data Intelligence",
      emoji: "📊",
      description: "Turn raw data into real insight and action.",
      features: [
        "Business Dashboards",
        "RAG & Knowledge Graph Design",
        "Metric Design & Monitoring",
        "Analytics & Visualization"
      ]
    },
    {
      icon: <FaPalette />,
      title: "Creative Installations",
      emoji: "🎨",
      description: "Blending art, tech, and jaw-dropping experiences.",
      features: [
        "Immersive Lighting (Residential & Commercial)",
        "Club Sound Systems & AV Consulting",
        "Digital Art Installations",
        "Interactive Environments",
        "Recording Studio Buildouts"
      ]
    },
    {
      icon: <FaFlask />,
      title: "Innovation Services",
      emoji: "🚀",
      description: "Explore what's possible before it's mainstream.",
      features: [
        "Prototyping & Proof of Concept",
        "R&D Experiments",
        "Tech Demos & Exploratory Projects",
        "Custom Build Advisory"
      ]
    }
  ];

  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="Services" 
        subtitle="🛠️ Discover our magical solutions tailored to your needs"
        backgroundVariant="services"
      />
      
      <main className="page-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="service-header">
                  <div className="service-emoji">{service.emoji}</div>
                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaMagic className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div 
            className="contact-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="contact-card">
              <div className="contact-header">
                <div className="contact-emoji">📞</div>
                <div className="contact-icon">
                  <FaPhone />
                </div>
              </div>
              <h3>Let's Talk</h3>
              <p>Not sure what you need? That's where we shine.<br />
                 Let's jam on your idea and see what magic we can make.</p>
              <motion.a 
                href="mailto:technologists@magicunicorn.tech"
                className="btn btn-primary contact-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                👉 Book a Discovery Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default Services
