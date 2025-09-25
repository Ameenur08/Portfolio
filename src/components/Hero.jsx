import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Apple-style parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Floating elements animation
  const floatingElements = [
    { icon: "⚡", delay: 0, x: "10%", y: "20%" },
    { icon: "🚀", delay: 0.2, x: "80%", y: "30%" },
    { icon: "💻", delay: 0.4, x: "15%", y: "70%" },
    { icon: "☁️", delay: 0.6, x: "85%", y: "80%" },
    { icon: "🎯", delay: 0.8, x: "50%", y: "15%" },
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        paddingTop: '100px', // Account for fixed navigation
      }}
    >
      {/* Background Gradient Mesh */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--gradient-mesh)',
        opacity: 0.1,
        zIndex: 0,
      }} />

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { 
            opacity: 0.6, 
            scale: 1,
            y: [0, -20, 0],
          } : {}}
          transition={{
            delay: element.delay,
            duration: 0.8,
            y: {
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{
            position: 'absolute',
            left: element.x,
            top: element.y,
            fontSize: '2rem',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      <div className="container">
        <motion.div
          style={{ y, opacity }}
          className="hero-content"
        >
          {/* Main Content */}
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
          }}>
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                marginBottom: 'var(--space-lg)',
              }}
            >
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-sm) var(--space-lg)',
                background: 'var(--glass-bg)',
                backdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
              }}>
                <motion.span
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👋
                </motion.span>
                Hello, I'm Ameen
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              ref={textRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'var(--text-6xl)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: 'var(--space-xl)',
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Azure DevOps Engineer
              <br />
              <span style={{
                background: 'var(--gradient-warm)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                & Software Engineer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: 'var(--space-2xl)',
                maxWidth: '600px',
                margin: '0 auto var(--space-2xl)',
              }}
            >
              I build CI/CD pipelines, automate workflows, and maintain production services. 
              Strong background in Python, Java, and distributed systems. Currently working at{' '}
              <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                Western Alliance Bank
              </span>{' '}
              through AgreeYa Solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{
                display: 'flex',
                gap: 'var(--space-lg)',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-3xl)',
              }}
            >
              <motion.a
                href="/images/profile/ameen-resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary interactive"
                style={{
                  textDecoration: 'none',
                }}
              >
                <span>Download Resume</span>
                <span>📄</span>
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary interactive"
              >
                <span>Let's Connect</span>
                <span>💬</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: 'var(--space-lg)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              {[
                { number: '4+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Delivered' },
                { number: '99%', label: 'Uptime Achieved' },
                { number: '∞', label: 'Problems Solved' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    textAlign: 'center',
                    padding: 'var(--space-lg)',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--radius-xl)',
                    transition: 'var(--transition-normal)',
                  }}
                  className="interactive"
                >
                  <div style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: 'var(--space-sm)',
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: 'var(--space-xl)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          color: 'var(--text-muted)',
          fontSize: 'var(--text-sm)',
        }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: '2px',
            height: '30px',
            background: 'var(--gradient-accent)',
            borderRadius: 'var(--radius-full)',
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;