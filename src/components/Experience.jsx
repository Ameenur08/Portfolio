import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCE_DATA, ASSETS } from '../assets.js';

const Experience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [selectedExperience, setSelectedExperience] = useState(EXPERIENCE_DATA[0]);



  const getTechIcon = (techName) => {
    const techMap = {
      'Azure DevOps': ASSETS.technologies.azureDevOps,
      'Python': ASSETS.technologies.python,
      'YAML': ASSETS.technologies.yaml,
      'SonarQube': ASSETS.technologies.sonarqube,
      'Git': ASSETS.technologies.git,
      'GitVersion': ASSETS.technologies.gitversion,
      'Confluence': ASSETS.technologies.confluence,
      'Windows': ASSETS.technologies.javascript, // Fallback
      'Linux': ASSETS.technologies.javascript, // Fallback
      'JIRA': ASSETS.technologies.jira,
      'Agile/Scrum': ASSETS.technologies.jira,
      'Notion': ASSETS.technologies.notion,
      'Freshservice': ASSETS.technologies.freshservice,
      'Java': ASSETS.technologies.java,
      'JavaScript': ASSETS.technologies.javascript,
      'Angular': ASSETS.technologies.angular,
      'SQL': ASSETS.technologies.sql,
      'Spring Boot': ASSETS.technologies.springboot,
      'PeopleSoft': ASSETS.technologies.peoplesoft,
      'React.js': ASSETS.technologies.react,
      'TailwindCSS': ASSETS.technologies.tailwindcss,
      'MySQL': ASSETS.technologies.sql,
      'HTML/CSS': ASSETS.technologies.html,
    };
    return techMap[techName] || ASSETS.technologies.javascript;
  };

  return (
    <section ref={containerRef} className="section" style={{ 
      background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' 
    }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-4xl)',
          }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'inline-block',
              padding: 'var(--space-sm) var(--space-lg)',
              background: 'var(--glass-bg)',
              backdropFilter: 'var(--glass-blur)',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-sm)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              marginBottom: 'var(--space-lg)',
            }}
          >
            Professional Journey
          </motion.span>

          <h2 style={{
            fontSize: 'var(--text-5xl)',
            fontWeight: 700,
            marginBottom: 'var(--space-lg)',
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Experience & Growth
          </h2>

          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            A timeline of my professional evolution, key achievements, and the technologies 
            that have shaped my expertise in cloud architecture and DevOps.
          </p>
        </motion.div>

        {/* Experience Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: 'var(--space-3xl)',
          alignItems: 'start',
        }} className="experience-grid">
          
          {/* Timeline Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              position: 'sticky',
              top: '100px',
            }}
          >
            <div className="glass" style={{
              padding: 'var(--space-xl)',
              borderRadius: 'var(--radius-2xl)',
            }}>
              <h3 style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 600,
                marginBottom: 'var(--space-lg)',
                color: 'var(--text-primary)',
              }}>
                Timeline
              </h3>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-md)',
              }}>
                {EXPERIENCE_DATA.map((exp, index) => (
                  <motion.button
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    onClick={() => setSelectedExperience(exp)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: selectedExperience.id === exp.id 
                        ? 'var(--gradient-accent)' 
                        : 'var(--bg-tertiary)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--space-md)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'var(--transition-normal)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    className="interactive"
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-sm)',
                      marginBottom: 'var(--space-xs)',
                    }}>
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: 'var(--radius-sm)',
                          objectFit: 'contain',
                        }}
                      />
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        color: selectedExperience.id === exp.id 
                          ? 'white' 
                          : 'var(--text-primary)',
                      }}>
                        {exp.company}
                      </span>
                    </div>
                    
                    <div style={{
                      fontSize: 'var(--text-xs)',
                      color: selectedExperience.id === exp.id 
                        ? 'rgba(255,255,255,0.8)' 
                        : 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                    }}>
                      {exp.period}
                    </div>

                    {exp.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          width: '8px',
                          height: '8px',
                          background: 'var(--accent-success)',
                          borderRadius: '50%',
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            key={selectedExperience.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass" style={{
              padding: 'var(--space-3xl)',
              borderRadius: 'var(--radius-2xl)',
            }}>
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-xl)',
                marginBottom: 'var(--space-2xl)',
              }}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--gradient-accent)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '4px',
                    flexShrink: 0,
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <img
                      src={selectedExperience.logo}
                      alt={selectedExperience.company}
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </motion.div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-sm)',
                  }}>
                    {selectedExperience.role}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-lg)',
                    marginBottom: 'var(--space-sm)',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      fontSize: 'var(--text-lg)',
                      color: 'var(--accent-primary)',
                      fontWeight: 600,
                    }}>
                      {selectedExperience.company}
                    </span>
                    
                    <span style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--text-muted)',
                    }}>
                      {selectedExperience.location}
                    </span>
                    
                    <span style={{
                      padding: 'var(--space-xs) var(--space-sm)',
                      background: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}>
                      {selectedExperience.type}
                    </span>
                  </div>
                  
                  <div style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {selectedExperience.period}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: 'var(--space-2xl)',
                fontStyle: 'italic',
              }}>
                {selectedExperience.description}
              </p>

              {/* Achievements */}
              <div style={{ marginBottom: 'var(--space-2xl)' }}>
                <h4 style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  <span>🎯</span>
                  Key Achievements
                </h4>
                
                <div style={{
                  display: 'grid',
                  gap: 'var(--space-md)',
                }}>
                  {selectedExperience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-md)',
                        padding: 'var(--space-lg)',
                        background: 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--glass-border)',
                      }}
                    >
                      <div style={{
                        width: '6px',
                        height: '6px',
                        background: 'var(--accent-primary)',
                        borderRadius: '50%',
                        marginTop: '8px',
                        flexShrink: 0,
                      }} />
                      <p style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}>
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  <span>🛠️</span>
                  Technologies Used
                </h4>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-md)',
                }}>
                  {selectedExperience.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                        padding: 'var(--space-sm) var(--space-md)',
                        background: 'var(--glass-bg)',
                        backdropFilter: 'var(--glass-blur)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 'var(--radius-lg)',
                        transition: 'var(--transition-normal)',
                      }}
                      className="interactive"
                    >
                      <img
                        src={getTechIcon(tech)}
                        alt={tech}
                        style={{
                          width: '20px',
                          height: '20px',
                          objectFit: 'contain',
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        fontWeight: 500,
                      }}>
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;