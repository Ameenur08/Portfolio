import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', color = 'var(--accent-primary)' }) => {
  const sizes = {
    sm: '20px',
    md: '40px',
    lg: '60px'
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-lg)',
    }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: sizes[size],
          height: sizes[size],
          border: `3px solid transparent`,
          borderTop: `3px solid ${color}`,
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

export default LoadingSpinner;