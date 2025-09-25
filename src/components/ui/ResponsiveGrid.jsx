import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../../utils/constants.js';

/**
 * Responsive Grid Component
 * @param {Object} props - Grid properties
 * @param {React.ReactNode} props.children - Grid items
 * @param {number} props.minItemWidth - Minimum width for grid items (in px)
 * @param {string} props.gap - Gap between items
 * @param {boolean} props.stagger - Enable staggered animations
 * @param {boolean} props.isInView - Animation trigger
 */
const ResponsiveGrid = ({
  children,
  minItemWidth = 300,
  gap = 'var(--space-lg)',
  stagger = true,
  isInView = true,
  className = '',
  style = {},
}) => {
  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}px, 1fr))`,
    gap,
    width: '100%',
    ...style,
  };

  // Convert children to array for mapping
  const childrenArray = React.Children.toArray(children);

  return (
    <motion.div
      className={className}
      style={gridStyles}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger ? ANIMATION_VARIANTS.container : {}}
    >
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={stagger ? ANIMATION_VARIANTS.item : {}}
          style={{ width: '100%' }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ResponsiveGrid;