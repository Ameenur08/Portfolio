// Performance monitoring utilities

class PerformanceMonitor {
  constructor() {
    this.marks = new Map();
    this.measures = new Map();
  }

  // Mark a performance point
  mark(name) {
    const timestamp = performance.now();
    this.marks.set(name, timestamp);
    
    if (performance.mark) {
      performance.mark(name);
    }
    
    console.log(`⚡ Performance Mark: ${name} at ${timestamp.toFixed(2)}ms`);
  }

  // Measure time between two marks
  measure(name, startMark, endMark = null) {
    const startTime = this.marks.get(startMark);
    const endTime = endMark ? this.marks.get(endMark) : performance.now();
    
    if (!startTime) {
      console.warn(`Start mark "${startMark}" not found`);
      return null;
    }
    
    const duration = endTime - startTime;
    this.measures.set(name, duration);
    
    if (performance.measure && endMark) {
      performance.measure(name, startMark, endMark);
    }
    
    console.log(`⚡ Performance Measure: ${name} took ${duration.toFixed(2)}ms`);
    return duration;
  }

  // Get all performance data
  getMetrics() {
    const navigation = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    
    return {
      // Navigation timing
      domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
      loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart,
      
      // Paint timing
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
      
      // Custom marks and measures
      customMarks: Object.fromEntries(this.marks),
      customMeasures: Object.fromEntries(this.measures),
      
      // Memory usage (if available)
      memory: performance.memory ? {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
      } : null
    };
  }

  // Log performance summary
  logSummary() {
    const metrics = this.getMetrics();
    console.group('📊 Performance Summary');
    
    if (metrics.firstContentfulPaint) {
      console.log(`First Contentful Paint: ${metrics.firstContentfulPaint.toFixed(2)}ms`);
    }
    
    if (metrics.domContentLoaded) {
      console.log(`DOM Content Loaded: ${metrics.domContentLoaded.toFixed(2)}ms`);
    }
    
    if (metrics.loadComplete) {
      console.log(`Load Complete: ${metrics.loadComplete.toFixed(2)}ms`);
    }
    
    if (metrics.memory) {
      const usedMB = (metrics.memory.used / 1024 / 1024).toFixed(2);
      const totalMB = (metrics.memory.total / 1024 / 1024).toFixed(2);
      console.log(`Memory Usage: ${usedMB}MB / ${totalMB}MB`);
    }
    
    console.groupEnd();
  }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

// Auto-log performance summary after page load
window.addEventListener('load', () => {
  setTimeout(() => {
    performanceMonitor.logSummary();
  }, 1000);
});

export default performanceMonitor;