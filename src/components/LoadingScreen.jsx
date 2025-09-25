import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = [
    'Initializing experience...',
    'Loading creative elements...',
    'Preparing portfolio...',
    'Almost ready...',
    'Welcome! 🚀'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length);
        setCurrentText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);
        return Math.min(newProgress, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: '80px',
          height: '80px',
          background: 'var(--gradient-accent)',
          borderRadius: 'var(--radius-2xl)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 'var(--space-xl)',
          boxShadow: 'var(--shadow-glow)',
        }}
      >
        <span style={{
          fontSize: 'var(--text-2xl)',
          fontWeight: 700,
          color: 'white',
          fontFamily: 'var(--font-mono)'
        }}>
          AK
        </span>
      </motion.div>

      {/* Progress Bar */}
      <div style={{
        width: '300px',
        height: '4px',
        background: 'var(--bg-tertiary)',
        borderRadius: 'var(--radius-full)',
        overflow: 'hidden',
        marginBottom: 'var(--space-lg)',
      }}>
        <motion.div
          style={{
            height: '100%',
            background: 'var(--gradient-accent)',
            borderRadius: 'var(--radius-full)',
            width: `${progress}%`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Loading Text */}
      <motion.p
        key={currentText}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontSize: 'var(--text-base)',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {currentText}
      </motion.p>

      {/* Percentage */}
      <motion.span
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--text-muted)',
          marginTop: 'var(--space-sm)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {progress}%
      </motion.span>
    </motion.div>
  );
};

export default LoadingScreen;