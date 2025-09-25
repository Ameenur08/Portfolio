import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS_DATA } from '../assets.js';
import LazyImage from './ui/LazyImage';

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState(PROJECTS_DATA[0]);
  const [filter, setFilter] = useState('all');



  // Enhanced project data with more details
  const enhancedProjects = [
    {
      ...PROJECTS_DATA[0],
      category: 'Full-Stack',
      year: '2024',
      status: 'Completed',
      link: null, // No live link yet
      github: PROJECTS_DATA[0].github,
      highlights: [
        'Built complete MERN stack application with authentication',
        'Implemented real-time availability checking system',
        'Created admin portal for booking management'
      ]
    },
    {
      ...PROJECTS_DATA[1],
      category: 'Full-Stack',
      year: '2023',
      status: 'Completed',
      link: null,
      github: PROJECTS_DATA[1].github,
      highlights: [
        'Interactive dashboard displaying IPL statistics',
        'Java Spring Boot backend with React frontend',
        'Clean data visualization and user interface'
      ]
    },
    {
      ...PROJECTS_DATA[2],
      category: 'Database',
      year: '2023',
      status: 'Completed',
      link: null,
      github: PROJECTS_DATA[2].github,
      highlights: [
        'Optimized database queries for better performance',
        'Implemented complex PL/SQL procedures',
        'Designed efficient database schema for e-commerce'
      ]
    },
    {
      ...PROJECTS_DATA[3],
      category: 'Automation',
      year: '2024',
      status: 'Completed',
      link: null,
      github: PROJECTS_DATA[3].github,
      highlights: [
        'Automated folder creation from calendar events',
        'Email automation for PDF form distribution',
        'Google Apps Script integration with Drive and Calendar'
      ]
    },
    {
      ...PROJECTS_DATA[4],
      category: 'Design',
      year: '2023',
      status: 'Completed',
      link: null,
      github: PROJECTS_DATA[4].github,
      highlights: [
        'Created interactive prototypes using Figma',
        'Improved user experience through design research',
        'Delivered comprehensive design system'
      ]
    }
  ];

  const categories = ['all', 'Full-Stack', 'Database', 'Automation', 'Design'];
  
  const filteredProjects = filter === 'all' 
    ? enhancedProjects 
    : enhancedProjects.filter(project => project.category === filter);

  const getTechColor = (tech) => {
    const colors = {
      'AWS': '#ff9900',
      'Azure DevOps': '#0078d4',
      'Docker': '#2496ed',
      'Kubernetes': '#326ce5',
      'React': '#61dafb',
      'Node.js': '#339933',
      'Python': '#3776ab',
      'Java': '#ed8b00',
      'Terraform': '#623ce4',
    };
    return colors[tech] || 'var(--accent-primary)';
  };

  return (
    <section ref={containerRef} className="section" style={{ 
      background: 'var(--bg-primary)' 
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
            Featured Work
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
            Projects & Solutions
          </h2>

          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto var(--space-2xl)',
            lineHeight: 1.6,
          }}>
            A showcase of technical solutions, automation projects, and system architectures 
            that demonstrate my expertise in cloud technologies and DevOps practices.
          </p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-sm)',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: 'var(--space-sm) var(--space-lg)',
                  background: filter === category 
                    ? 'var(--gradient-accent)' 
                    : 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-blur)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-full)',
                  color: filter === category 
                    ? 'white' 
                    : 'var(--text-secondary)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'var(--transition-normal)',
                  textTransform: 'capitalize',
                }}
                className="interactive"
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'var(--space-2xl)',
            marginBottom: 'var(--space-4xl)',
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="glass interactive"
              style={{
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'var(--transition-normal)',
                border: selectedProject.id === project.id 
                  ? '2px solid var(--accent-primary)' 
                  : '1px solid var(--glass-border)',
              }}
            >
              {/* Project Image */}
              <div style={{
                position: 'relative',
                height: '250px',
                overflow: 'hidden',
              }}>
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  style={{
                    height: '250px',
                    background: 'var(--gradient-accent)',
                  }}
                  fallback={
                    <div style={{
                      height: '250px',
                      background: 'var(--gradient-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: 'var(--text-4xl)',
                    }}>
                      💻
                    </div>
                  }
                />
                
                {/* Status Badge */}
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-md)',
                  right: 'var(--space-md)',
                  padding: 'var(--space-xs) var(--space-sm)',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-blur)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  color: 'white',
                  fontWeight: 500,
                }}>
                  {project.status}
                </div>

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-md)',
                  left: 'var(--space-md)',
                  padding: 'var(--space-xs) var(--space-sm)',
                  background: 'var(--accent-success)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  color: 'white',
                  fontWeight: 500,
                }}>
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div style={{ padding: 'var(--space-xl)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--space-md)',
                }}>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}>
                    {project.title}
                  </h3>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {project.year}
                  </span>
                </div>

                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: 'var(--space-lg)',
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-sm)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: 'var(--space-xs) var(--space-sm)',
                        background: 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--text-xs)',
                        color: getTechColor(tech),
                        fontWeight: 500,
                        border: `1px solid ${getTechColor(tech)}20`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span style={{
                      padding: 'var(--space-xs) var(--space-sm)',
                      background: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-muted)',
                    }}>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-sm)',
                }}>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      padding: 'var(--space-sm) var(--space-md)',
                      background: 'var(--gradient-accent)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      textAlign: 'center',
                      transition: 'var(--transition-normal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'var(--space-sm)',
                    }}
                    className="interactive"
                  >
                    <span>View Code</span>
                    <span style={{ fontSize: 'var(--text-base)' }}>📂</span>
                  </motion.a>
                  
                  {project.link && (
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: 'var(--space-sm)',
                        background: 'var(--glass-bg)',
                        backdropFilter: 'var(--glass-blur)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 'var(--radius-lg)',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'var(--transition-normal)',
                      }}
                      className="interactive"
                    >
                      <span style={{ fontSize: 'var(--text-lg)' }}>🚀</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Project Detail */}
        {selectedProject && (
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass"
            style={{
              padding: 'var(--space-3xl)',
              borderRadius: 'var(--radius-2xl)',
              marginTop: 'var(--space-2xl)',
            }}
          >
            <h3 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-md)',
            }}>
              <span>🎯</span>
              Project Highlights: {selectedProject.title}
            </h3>

            <div style={{
              display: 'grid',
              gap: 'var(--space-md)',
              marginBottom: 'var(--space-xl)',
            }}>
              {selectedProject.highlights?.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-md)',
                    padding: 'var(--space-lg)',
                    background: 'var(--bg-tertiary)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: 'var(--accent-success)',
                    borderRadius: '50%',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--text-secondary)',
                  }}>
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              gap: 'var(--space-lg)',
              justifyContent: 'center',
            }}>
              <motion.a
                href={selectedProject.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary interactive"
                style={{ textDecoration: 'none' }}
              >
                <span>View Source Code</span>
                <span>📂</span>
              </motion.a>
              
              {selectedProject.link && (
                <motion.a
                  href={selectedProject.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary interactive"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Live Demo</span>
                  <span>🚀</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;