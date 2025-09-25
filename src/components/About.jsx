import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ASSETS } from '../assets.js';
import { SKILLS_DATA, VALUES_DATA, ANIMATION_VARIANTS } from '../utils/constants.js';
import SectionHeader from './ui/SectionHeader.jsx';
import Card from './ui/Card.jsx';
import Button from './ui/Button.jsx';
import ResponsiveGrid from './ui/ResponsiveGrid.jsx';

/**
 * About Section Component
 * Showcases personal information, skills, and values
 */
const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="About Me"
          title="Crafting Digital Solutions"
          subtitle="Software engineer with a Master's in Information Systems from UMBC. I have hands-on experience building CI/CD pipelines, automating system workflows, and maintaining production services. Passionate about creating reliable, fault-tolerant infrastructure through code."
          isInView={isInView}
        />

        {/* Main Content */}
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 'var(--space-3xl)',
          alignItems: 'start',
        }}>
          {/* Profile Section */}
          <ProfileSection isInView={isInView} y={y} />

          {/* Skills & Values Section */}
          <SkillsAndValues isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

/**
 * Profile Section Component
 */
const ProfileSection = ({ isInView, y }) => (
  <motion.div
    style={{ y }}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={ANIMATION_VARIANTS.slideLeft}
  >
    {/* Modern Profile Card */}
    <Card style={{ marginBottom: 'var(--space-2xl)' }}>
      <ProfileImage isInView={isInView} />
      <ProfileInfo />
      <ProfileStats />
    </Card>

    {/* Story Card */}
    <Card>
      <PersonalStory />
    </Card>
  </motion.div>
);

/**
 * Profile Image Component
 */
const ProfileImage = ({ isInView }) => (
  <div style={{
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 'var(--space-xl)',
  }}>
    {/* Background Pattern */}
    <div style={{
      position: 'absolute',
      top: '-20px',
      right: '-20px',
      width: '100px',
      height: '100px',
      background: 'var(--gradient-accent)',
      borderRadius: '50%',
      filter: 'blur(40px)',
      opacity: 0.2,
      zIndex: 0,
    }} />
    
    {/* Profile Image with Modern Frame */}
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      style={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{
        width: 'clamp(150px, 20vw, 200px)',
        height: 'clamp(150px, 20vw, 200px)',
        borderRadius: '50%',
        background: 'var(--gradient-accent)',
        padding: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'var(--bg-primary)',
          border: '2px solid var(--bg-primary)',
        }}>
          <img
            src={ASSETS.profile.main}
            alt="Ameenur Rahman Khan"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <FloatingElements />
    </motion.div>
  </div>
);

/**
 * Floating Elements around Profile Image
 */
const FloatingElements = () => {
  const elements = [
    { icon: '⚡', position: { top: '-10px', right: '-10px' }, delay: 0 },
    { icon: '🚀', position: { bottom: '10px', left: '-15px' }, delay: 1 },
  ];

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          animate={index === 0 
            ? { rotate: 360 } 
            : { y: [0, -10, 0] }
          }
          transition={index === 0 
            ? { duration: 20, repeat: Infinity, ease: "linear" }
            : { duration: 3, repeat: Infinity }
          }
          style={{
            position: 'absolute',
            ...element.position,
            width: 'clamp(30px, 4vw, 40px)',
            height: 'clamp(30px, 4vw, 40px)',
            background: index === 0 ? 'var(--gradient-warm)' : 'var(--gradient-cool)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </>
  );
};

/**
 * Profile Information Component
 */
const ProfileInfo = () => (
  <div style={{ 
    textAlign: 'center',
    marginBottom: 'var(--space-lg)',
  }}>
    <h3 style={{
      fontSize: 'clamp(var(--text-xl), 3vw, var(--text-2xl))',
      fontWeight: 700,
      color: 'var(--text-primary)',
      marginBottom: 'var(--space-sm)',
    }}>
      Ameenur Rahman Khan
    </h3>
    
    <p style={{
      fontSize: 'var(--text-base)',
      color: 'var(--accent-primary)',
      fontWeight: 500,
      marginBottom: 'var(--space-sm)',
    }}>
      Azure DevOps Engineer & Software Engineer
    </p>
    
    <p style={{
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-mono)',
    }}>
      Columbus, OH • Available for opportunities
    </p>
  </div>
);

/**
 * Profile Stats Component
 */
const ProfileStats = () => {
  const stats = [
    { number: '4+', label: 'Years' },
    { number: '15+', label: 'Projects' },
    { number: '99%', label: 'Uptime' },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-sm)',
      marginBottom: 'var(--space-lg)',
    }}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          style={{
            textAlign: 'center',
            padding: 'var(--space-md)',
            background: 'var(--bg-tertiary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--glass-border)',
          }}
        >
          <div style={{
            fontSize: 'clamp(var(--text-lg), 3vw, var(--text-xl))',
            fontWeight: 700,
            color: 'var(--accent-primary)',
            fontFamily: 'var(--font-mono)',
            marginBottom: 'var(--space-xs)',
          }}>
            {stat.number}
          </div>
          <div style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/**
 * Personal Story Component
 */
const PersonalStory = () => (
  <>
    <h3 style={{
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      marginBottom: 'var(--space-lg)',
      color: 'var(--text-primary)',
    }}>
      My Journey
    </h3>
    
    <div style={{
      fontSize: 'var(--text-base)',
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      marginBottom: 'var(--space-lg)',
    }}>
      <p style={{ marginBottom: 'var(--space-md)' }}>
        My tech journey started with a Bachelor's in Information Technology from Osmania University, 
        then I leveled up with a Master's in Information Systems from UMBC. What really gets me excited 
        is turning messy manual processes into smooth, automated workflows.
      </p>
      
      <p style={{ marginBottom: 'var(--space-md)' }}>
        At TCS, I spent almost 2 years working with a UK client (Hays), debugging everything from 
        front-end Angular issues to backend Java problems. That's where I learned that good monitoring 
        and solid incident response can save you a lot of headaches.
      </p>
      
      <p>
        Now I'm building CI/CD pipelines at Western Alliance Bank, making sure deployments are reliable 
        and teams can ship code without breaking things. I love the challenge of making complex systems 
        just work seamlessly.
      </p>
    </div>

    <Button
      href={ASSETS.profile.resume}
      variant="primary"
      size="md"
      style={{ width: '100%' }}
    >
      <span>Download Resume</span>
      <span>📄</span>
    </Button>
  </>
);

/**
 * Skills and Values Section Component
 */
const SkillsAndValues = ({ isInView }) => (
  <motion.div
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={ANIMATION_VARIANTS.slideRight}
  >
    {/* Skills Card */}
    <Card style={{ marginBottom: 'var(--space-2xl)' }}>
      <SkillsSection isInView={isInView} />
    </Card>

    {/* Values Card */}
    <Card>
      <ValuesSection isInView={isInView} />
    </Card>
  </motion.div>
);

/**
 * Skills Section Component
 */
const SkillsSection = ({ isInView }) => (
  <>
    <h3 style={{
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      marginBottom: 'var(--space-xl)',
      color: 'var(--text-primary)',
    }}>
      Core Expertise
    </h3>

    <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
      {SKILLS_DATA.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
      ))}
    </div>
  </>
);

/**
 * Individual Skill Bar Component
 */
const SkillBar = ({ skill, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
  >
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-sm)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
      }}>
        <span style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>{skill.icon}</span>
        <span style={{
          fontSize: 'var(--text-base)',
          fontWeight: 500,
          color: 'var(--text-primary)',
        }}>
          {skill.name}
        </span>
      </div>
      <span style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
      }}>
        {skill.level}%
      </span>
    </div>
    
    <div style={{
      height: '6px',
      background: 'var(--bg-tertiary)',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${skill.level}%` } : {}}
        transition={{ duration: 1, delay: 1 + index * 0.1 }}
        style={{
          height: '100%',
          background: 'var(--gradient-accent)',
          borderRadius: 'var(--radius-full)',
        }}
      />
    </div>
  </motion.div>
);

/**
 * Values Section Component
 */
const ValuesSection = ({ isInView }) => (
  <>
    <h3 style={{
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      marginBottom: 'var(--space-xl)',
      color: 'var(--text-primary)',
    }}>
      What Drives Me
    </h3>

    <ResponsiveGrid minItemWidth={200} gap="var(--space-md)" isInView={isInView}>
      {VALUES_DATA.map((value, index) => (
        <ValueCard key={value.title} value={value} index={index} />
      ))}
    </ResponsiveGrid>
  </>
);

/**
 * Individual Value Card Component
 */
const ValueCard = ({ value, index }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    style={{
      padding: 'var(--space-lg)',
      background: 'var(--bg-tertiary)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--glass-border)',
      transition: 'var(--transition-normal)',
      textAlign: 'center',
    }}
    className="interactive"
  >
    <div style={{
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      marginBottom: 'var(--space-sm)',
    }}>
      {value.icon}
    </div>
    <h4 style={{
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-primary)',
      marginBottom: 'var(--space-sm)',
    }}>
      {value.title}
    </h4>
    <p style={{
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 1.6,
    }}>
      {value.description}
    </p>
  </motion.div>
);

export default About;

// Mobile-specific styles
const mobileStyles = `
  @media (max-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr !important;
      gap: var(--space-2xl) !important;
    }
  }
`;

// Inject mobile styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = mobileStyles;
  document.head.appendChild(styleSheet);
}