import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../../utils/constants.js';

/**
 * Reusable Card Component with glassmorphism effect
 * @param {Object} props - Card properties
 * @param {React.ReactNode} props.children - Card content
 * @param {boolean} props.hover - Enable hover animations
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @param {Function} props.onClick - Click handler
 */
const Card = ({
  children,
  hover = true,
  className = '',
  style = {},
  onClick,
  ...props
}) => {
  const cardStyles = {
    background: 'var(--glass-bg)',
    backdropFilter: 'var(--glass-blur)',
    border: '1px solid var(--glass-border)',
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-xl)',
    transition: 'var(--transition-normal)',
    cursor: onClick ? 'pointer' : 'default',
    ...style,
  };

  return (
    <motion.div
      className={`glass ${className}`}
      style={cardStyles}
      onClick={onClick}
      whileHover={hover ? ANIMATION_VARIANTS.hover : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;