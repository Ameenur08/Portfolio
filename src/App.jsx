import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import analytics from './utils/analytics';
import performanceMonitor from './utils/performance';

// Components
import Navigation from './components/Navigation';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import ErrorBoundary from './components/ui/ErrorBoundary';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollToTop from './components/ui/ScrollToTop';
import SEO from './components/SEO';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');

  // Mark app start
  useEffect(() => {
    performanceMonitor.mark('app-start');
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      performanceMonitor.mark('app-loaded');
      performanceMonitor.measure('app-load-time', 'app-start', 'app-loaded');
      setIsLoading(false);
      analytics.trackPageView('portfolio');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          if (currentSection !== sections[i]) {
            setCurrentSection(sections[i]);
            analytics.trackEvent('navigation', 'section_view', sections[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SEO />
            <Cursor />
            <Navigation currentSection={currentSection} />
            
            <main>
              <ErrorBoundary>
                <section id="hero">
                  <Suspense fallback={<LoadingSpinner size="lg" />}>
                    <Hero />
                  </Suspense>
                </section>
              </ErrorBoundary>
              
              <ErrorBoundary>
                <section id="about">
                  <Suspense fallback={<LoadingSpinner size="lg" />}>
                    <About />
                  </Suspense>
                </section>
              </ErrorBoundary>
              
              <ErrorBoundary>
                <section id="experience">
                  <Suspense fallback={<LoadingSpinner size="lg" />}>
                    <Experience />
                  </Suspense>
                </section>
              </ErrorBoundary>
              
              <ErrorBoundary>
                <section id="projects">
                  <Suspense fallback={<LoadingSpinner size="lg" />}>
                    <Projects />
                  </Suspense>
                </section>
              </ErrorBoundary>
              
              <ErrorBoundary>
                <section id="contact">
                  <Suspense fallback={<LoadingSpinner size="lg" />}>
                    <Contact />
                  </Suspense>
                </section>
              </ErrorBoundary>
            </main>
            
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;