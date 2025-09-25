import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  fallback = null,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--glass-bg)',
          backdropFilter: 'var(--glass-blur)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            style={{
              width: '20px',
              height: '20px',
              border: '2px solid transparent',
              borderTop: '2px solid var(--accent-primary)',
              borderRadius: '50%',
            }}
          />
        </div>
      )}

      {/* Error fallback */}
      {hasError && fallback ? (
        fallback
      ) : (
        /* Actual image */
        isInView && (
          <motion.img
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0,
              scale: isLoaded ? 1 : 1.1
            }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: hasError ? 'none' : 'block',
            }}
          />
        )
      )}

      {/* Error state */}
      {hasError && !fallback && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--glass-bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-muted)',
          fontSize: 'var(--text-sm)',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-sm)' }}>
              🖼️
            </div>
            <div>Image not available</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;