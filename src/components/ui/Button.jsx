import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../../utils/constants.js';

/**
 * Reusable Button Component
 * @param {Object} props - Button properties
 * @param {string} props.variant - Button style variant (primary, secondary, ghost)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.href - Link URL (makes it an anchor)
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  disabled = false,
  className = '',
  style = {},
  target,
  rel,
  ...props
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-sm)',
    fontWeight: 500,
    textDecoration: 'none',
    border: 'none',
    borderRadius: 'var(--radius-lg)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-normal)',
    fontFamily: 'inherit',
    opacity: disabled ? 0.6 : 1,
    ...style,
  };

  // Size variants
  const sizeStyles = {
    sm: {
      padding: 'var(--space-sm) var(--space-md)',
      fontSize: 'var(--text-sm)',
    },
    md: {
      padding: 'var(--space-md) var(--space-lg)',
      fontSize: 'var(--text-base)',
    },
    lg: {
      padding: 'var(--space-lg) var(--space-xl)',
      fontSize: 'var(--text-lg)',
    },
  };

  // Variant styles
  const variantStyles = {
    primary: {
      background: 'var(--gradient-accent)',
      color: 'white',
      boxShadow: 'var(--shadow-lg)',
    },
    secondary: {
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--glass-blur)',
      border: '1px solid var(--glass-border)',
      color: 'var(--text-primary)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      disabled={disabled}
      target={target}
      rel={rel}
      className={`interactive ${className}`}
      style={combinedStyles}
      whileHover={disabled ? {} : ANIMATION_VARIANTS.hover}
      whileTap={disabled ? {} : ANIMATION_VARIANTS.tap}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Button;