import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../../utils/constants.js';

/**
 * Reusable Section Header Component
 * @param {Object} props - Header properties
 * @param {string} props.badge - Small badge text above title
 * @param {string} props.title - Main title
 * @param {string} props.subtitle - Subtitle/description
 * @param {boolean} props.center - Center align text
 * @param {boolean} props.isInView - Animation trigger
 */
const SectionHeader = ({
  badge,
  title,
  subtitle,
  center = true,
  isInView = true,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={ANIMATION_VARIANTS.container}
      style={{
        textAlign: center ? 'center' : 'left',
        marginBottom: 'var(--space-4xl)',
      }}
    >
      {badge && (
        <motion.span
          variants={ANIMATION_VARIANTS.item}
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
          {badge}
        </motion.span>
      )}

      <motion.h2
        variants={ANIMATION_VARIANTS.item}
        style={{
          fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
          fontWeight: 700,
          marginBottom: title && subtitle ? 'var(--space-lg)' : 0,
          background: 'var(--gradient-accent)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.2,
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={ANIMATION_VARIANTS.item}
          style={{
            fontSize: 'clamp(var(--text-base), 2vw, var(--text-xl))',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: center ? '0 auto' : '0',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;