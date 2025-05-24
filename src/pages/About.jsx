import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import BackgroundSparkles from '../components/BackgroundSparkles'
import { FaLock, FaCubes, FaGlobe, FaMagic, FaLightbulb, FaBrain, FaHandshake, FaMicroscope, FaPlay } from 'react-icons/fa'
import '../styles/About.css'
import LazyImage from '../components/LazyImage'
import { UnicornLogo } from '../images'

function About() {
  const location = useLocation();
  
  // Scroll to top when the component mounts or location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const ethos = [
    {
      icon: <FaLock />,
      title: "Freedom First",
      description: "Fully local systems. No subscriptions. No surveillance. Your tech, your rules."
    },
    {
      icon: <FaCubes />,
      title: "Modular by Nature",
      description: "Tools that evolve with you—swap, customize, and command your digital destiny."
    },
    {
      icon: <FaGlobe />,
      title: "Open Source Forever",
      description: "Built by the community. Crafted ethically. Developed transparently."
    }
  ]

  const featureCards = [
    {
      icon: <FaBrain />,
      title: "The MUUT Hut – Where the Magic Starts",
      description: "Inside Unicorn HQ, where tools meet intuition. This is the MUUT Hut—part creative lab, part command center, and 100% magic.",
      mediaType: "image",
      mediaSrc: "/src/images/muut-hut.jpg", // Placeholder - you'll add this file
      alt: "MUUT Hut - Magic Unicorn Workspace"
    },
    {
      icon: <FaHandshake />,
      title: "From the Club to the Cloudless Future",
      description: "We started by lighting up dance floors—now we're illuminating workflows. Creativity is the throughline.",
      mediaType: "video",
      youtubeId: "j0GdZpJIbgs",
      shortsId: "-S8c3CanJfU",
      alt: "Club Lighting Project"
    },
    {
      icon: <FaMicroscope />,
      title: "BigBoy: The Beast Behind the Brilliance",
      description: "Meet BigBoy—our muscle under the hood. Dual Tesla P40s, CUDA-tuned, and always hungry for more models. This is where Unicorn Commander gets its horsepower.",
      mediaType: "image",
      mediaSrc: "/src/images/bigboy-server.jpg", // Placeholder - you'll add this file
      alt: "BigBoy AI Server"
    }
  ]

  const teamMembers = [
    {
      name: "Aaron Stransky",
      title: "Unconventional Technologist & CEO",
      bio: "With deep roots in cybersecurity, military ops, and systems engineering, Aaron fuses technical mastery with visionary leadership. His mission: democratize powerful tech through open-source innovation and modular design.",
      image: "/src/images/aaron_profile.jpg" // Placeholder - you'll add this file
    },
    {
      name: 'Doug "Crash" Walker',
      title: "Founding Engineer, Unicorn Commander",
      bio: "Crash transformed the vision of Unicorn Commander into a working reality. A polymath with experience in defense contracting, music, and complex systems architecture, he brings a sharp, creative edge to our AI ecosystem.",
      image: "/src/images/crash_profile.jpg" // Placeholder - you'll add this file
    }
  ]

  return (
    <div className="page-container">
      <BackgroundSparkles />
      
      <main className="page-content">
        <div className="container">
          <section className="company-hero-section">
            <motion.div
              className="company-logo-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={UnicornLogo} alt="Magic Unicorn Logo" className="company-logo" />
            </motion.div>
            
            <motion.h2
              className="section-title gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Magic Unicorn
            </motion.h2>
          </section>

          <motion.div 
            className="about-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>Magic Unicorn Unconventional Technology & Stuff Inc. was born from a spark—an idea ignited by Aaron Stransky, polymath, Unconventional Technologist, and (reluctantly titled) CEO. With over 20 years of expertise in defense systems, AI innovation, and government automation, Aaron saw a gap in the industry: a need for tech that's powerful, accessible, and delightfully unconventional.</p>
            <p>While others lagged behind—locked into cloud silos and clunky interfaces—Aaron was already building modular AI pipelines, running local inference, and championing open-source as the foundation for a freer, smarter future.</p>
            <p>Magic Unicorn is the embodiment of that vision: a company that's as imaginative as it is impactful, delivering boundary-pushing solutions with creativity, community, and a sprinkle of unicorn magic. 🦄✨</p>
          </motion.div>

          {/* Legacy section moved up as requested */}
          <section className="legacy-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              A Legacy of Unexpected Magic
            </motion.h2>
            
            <motion.div 
              className="legacy-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>Before Magic Unicorn became a name in AI, we were building immersive environments: custom furniture with hidden LED lighting, residential setups that transformed into party-ready wonderlands, and large-scale installations like hospital video walls and full club sound systems.</p>
              <p>These weren't side gigs—they were strategic stepping stones. They funded our growth, sharpened our capabilities, and kept our creative flame lit while the AI world caught up.</p>
              <p>From dance floor glows to server rack hums, every project was a signal flare pointing toward the future. When the tech aligned, we pivoted fully to AI—and haven't looked back. (Though for the right boundary-pushing build… we might still light up a space. Literally.)</p>
            </motion.div>
          </section>

          {/* Feature Cards Section */}
          <motion.section 
            className="feature-cards-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="feature-cards-grid">
              {featureCards.map((card, index) => (
                <motion.div 
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <div className="feature-card-header">
                    <div className="feature-icon">
                      {card.icon}
                    </div>
                    <h3 className="feature-title">{card.title}</h3>
                  </div>
                  
                  <div className="feature-media">
                    {card.mediaType === 'image' ? (
                      <div className="feature-image-container">
                        <LazyImage 
                          src={card.mediaSrc} 
                          alt={card.alt} 
                          className="feature-image" 
                        />
                      </div>
                    ) : (
                      <div className="feature-video-container">
                        <div className="video-links">
                          <a 
                            href={`https://www.youtube.com/watch?v=${card.youtubeId}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="video-link"
                          >
                            <FaPlay /> Watch Full Video
                          </a>
                          <a 
                            href={`https://youtube.com/shorts/${card.shortsId}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="video-link shorts"
                          >
                            <FaPlay /> Watch Short
                          </a>
                        </div>
                        <div className="youtube-embed">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${card.youtubeId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <p className="feature-description">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <section className="ethos-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Ethos
            </motion.h2>
            
            <div className="values-grid">
              {ethos.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="team-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Meet the Minds Behind the Magic
            </motion.h2>
            
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="team-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="member-image-container">
                    <LazyImage src={member.image} alt={member.name} className="member-image" />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-title">{member.title}</p>
                    <p className="member-bio">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="join-section">
            <motion.div
              className="join-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Join the Movement</h2>
              <motion.div
                className="join-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p>Magic Unicorn isn't just a tech company—it's a rebellion against bloatware, black-box models, and boring tools. It's a rally point for builders, dreamers, and doers who want tools that work, a team that listens, and a future they own.</p>
                <p>Let's redefine what technology can be—together.</p>
                <p>Reach out. Collaborate. Or just come build something wild.</p>
              </motion.div>
              <motion.div
                className="cta-button-container"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <button className="cta-button">
                  <FaMagic className="button-icon" /> Get in Touch
                </button>
                <button className="cta-button secondary-button">
                  <FaLightbulb className="button-icon" /> Explore Our Products
                </button>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default About
