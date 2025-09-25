// Simple analytics utility for tracking user interactions
// This is a demo implementation - in production, you'd integrate with Google Analytics, etc.

class Analytics {
  constructor() {
    this.events = [];
    this.sessionStart = Date.now();
  }

  // Track page views
  trackPageView(page) {
    const event = {
      type: 'page_view',
      page,
      timestamp: Date.now(),
      sessionTime: Date.now() - this.sessionStart
    };
    
    this.events.push(event);
    console.log('📊 Page View:', page);
  }

  // Track user interactions
  trackEvent(category, action, label = null) {
    const event = {
      type: 'event',
      category,
      action,
      label,
      timestamp: Date.now(),
      sessionTime: Date.now() - this.sessionStart
    };
    
    this.events.push(event);
    console.log('📊 Event:', { category, action, label });
  }

  // Track scroll depth
  trackScrollDepth(depth) {
    const event = {
      type: 'scroll',
      depth,
      timestamp: Date.now()
    };
    
    this.events.push(event);
    
    // Only log major scroll milestones
    if (depth % 25 === 0) {
      console.log('📊 Scroll Depth:', `${depth}%`);
    }
  }

  // Get session summary
  getSessionSummary() {
    const sessionDuration = Date.now() - this.sessionStart;
    const pageViews = this.events.filter(e => e.type === 'page_view').length;
    const interactions = this.events.filter(e => e.type === 'event').length;
    
    return {
      duration: sessionDuration,
      pageViews,
      interactions,
      totalEvents: this.events.length
    };
  }
}

// Create singleton instance
const analytics = new Analytics();

// Auto-track scroll depth
let lastScrollDepth = 0;
const trackScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollDepth = Math.round((scrollTop / docHeight) * 100);
  
  if (scrollDepth > lastScrollDepth && scrollDepth % 10 === 0) {
    analytics.trackScrollDepth(scrollDepth);
    lastScrollDepth = scrollDepth;
  }
};

// Throttled scroll listener
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) return;
  scrollTimeout = setTimeout(() => {
    trackScroll();
    scrollTimeout = null;
  }, 100);
});

export default analytics;