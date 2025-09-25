import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully! I\'ll get back to you soon.');
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'ameenurrahman007@gmail.com',
      link: 'mailto:ameenurrahman007@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/ameenur-rahman-khan',
      link: 'https://linkedin.com/in/ameenur-rahman-khan',
      description: 'Let\'s connect professionally'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/Ameenur0',
      link: 'https://github.com/Ameenur0',
      description: 'Check out my code'
    }
  ];

  const quickActions = [
    {
      icon: '💼',
      title: 'Hire Me',
      description: 'Looking for a DevOps Engineer?',
      action: 'Let\'s discuss your project',
      color: 'var(--gradient-accent)'
    },
    {
      icon: '🤝',
      title: 'Collaborate',
      description: 'Have an interesting project?',
      action: 'Let\'s build something amazing',
      color: 'var(--gradient-warm)'
    },
    {
      icon: '☕',
      title: 'Coffee Chat',
      description: 'Want to discuss tech?',
      action: 'Let\'s grab a virtual coffee',
      color: 'var(--gradient-cool)'
    }
  ];

  return (
    <section ref={containerRef} className="section" style={{
      background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--gradient-accent)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.1,
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '200px',
        height: '200px',
        background: 'var(--gradient-warm)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        opacity: 0.1,
      }} />

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
            Get In Touch
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
            Let's Build Something Amazing
          </h2>

          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Ready to discuss your next project, explore collaboration opportunities,
            or just have a chat about technology? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-4xl)',
          }}
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass interactive"
              style={{
                padding: 'var(--space-xl)',
                borderRadius: 'var(--radius-2xl)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-normal)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: action.color,
              }} />

              <div style={{
                fontSize: 'var(--text-4xl)',
                marginBottom: 'var(--space-md)',
              }}>
                {action.icon}
              </div>

              <h3 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-sm)',
              }}>
                {action.title}
              </h3>

              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-md)',
              }}>
                {action.description}
              </p>

              <span style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--accent-primary)',
                fontWeight: 500,
              }}>
                {action.action} →
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-4xl)',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="glass" style={{
              padding: 'var(--space-3xl)',
              borderRadius: 'var(--radius-2xl)',
            }}>
              <h3 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-xl)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
              }}>
                <span>📞</span>
                Contact Information
              </h3>

              <div style={{
                display: 'grid',
                gap: 'var(--space-lg)',
              }}>
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-md)',
                      padding: 'var(--space-lg)',
                      background: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--glass-border)',
                      textDecoration: 'none',
                      transition: 'var(--transition-normal)',
                    }}
                    className="interactive"
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'var(--gradient-accent)',
                      borderRadius: 'var(--radius-lg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'var(--text-xl)',
                      flexShrink: 0,
                    }}>
                      {method.icon}
                    </div>

                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--space-xs)',
                      }}>
                        {method.title}
                      </h4>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        marginBottom: 'var(--space-xs)',
                      }}>
                        {method.description}
                      </p>
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--accent-primary)',
                        fontFamily: 'var(--font-mono)',
                      }}>
                        {method.value}
                      </span>
                    </div>

                    <div style={{
                      color: 'var(--text-muted)',
                      fontSize: 'var(--text-lg)',
                    }}>
                      →
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                style={{
                  marginTop: 'var(--space-xl)',
                  padding: 'var(--space-lg)',
                  background: 'var(--glass-bg)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--glass-border)',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-sm)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      width: '10px',
                      height: '10px',
                      background: 'var(--accent-success)',
                      borderRadius: '50%',
                    }}
                  />
                  <span style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}>
                    Available for New Opportunities
                  </span>
                </div>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  Currently open to full-time positions and consulting projects
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="glass" style={{
              padding: 'var(--space-3xl)',
              borderRadius: 'var(--radius-2xl)',
            }}>
              <h3 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-xl)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
              }}>
                <span>✉️</span>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} style={{
                display: 'grid',
                gap: 'var(--space-lg)',
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-md)',
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--space-sm)',
                    }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 'var(--radius-lg)',
                        color: 'var(--text-primary)',
                        fontSize: 'var(--text-base)',
                        transition: 'var(--transition-normal)',
                      }}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--space-sm)',
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 'var(--radius-lg)',
                        color: 'var(--text-primary)',
                        fontSize: 'var(--text-base)',
                        transition: 'var(--transition-normal)',
                      }}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-sm)',
                  }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-lg)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-base)',
                      transition: 'var(--transition-normal)',
                    }}
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-sm)',
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-lg)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-base)',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'var(--transition-normal)',
                    }}
                    className="form-input"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary interactive"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        ⏳
                      </motion.span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>🚀</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .form-input:focus {
          border-color: var(--accent-primary) !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1) !important;
        }
        
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;