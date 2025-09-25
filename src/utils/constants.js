// Animation variants for consistent animations across components
export const ANIMATION_VARIANTS = {
  // Container animations
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  },

  // Item animations
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },

  // Slide animations
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },

  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },

  // Scale animations
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },

  // Hover animations
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },

  tap: {
    scale: 0.95,
  },
};

// Responsive breakpoints
export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  large: '1200px',
};

// Common spacing values
export const SPACING = {
  xs: 'var(--space-xs)',
  sm: 'var(--space-sm)',
  md: 'var(--space-md)',
  lg: 'var(--space-lg)',
  xl: 'var(--space-xl)',
  '2xl': 'var(--space-2xl)',
  '3xl': 'var(--space-3xl)',
  '4xl': 'var(--space-4xl)',
};

// Common colors
export const COLORS = {
  primary: 'var(--accent-primary)',
  secondary: 'var(--text-secondary)',
  muted: 'var(--text-muted)',
  success: 'var(--accent-success)',
  warning: 'var(--accent-warning)',
  error: 'var(--accent-error)',
};

// Navigation items
export const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👨‍💻' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'contact', label: 'Contact', icon: '📧' },
];

// Contact methods
export const CONTACT_METHODS = [
  {
    icon: '📧',
    title: 'Email',
    value: 'ameen@example.com',
    link: 'mailto:ameen@example.com',
    description: 'Send me an email anytime',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'linkedin.com/in/ameenur-rahman-khan',
    link: 'https://linkedin.com/in/ameenur-rahman-khan',
    description: "Let's connect professionally",
  },
  {
    icon: '🐙',
    title: 'GitHub',
    value: 'github.com/ameenur-rahman-khan',
    link: 'https://github.com/ameenur-rahman-khan',
    description: 'Check out my code',
  },
  {
    icon: '📱',
    title: 'Phone',
    value: '+1 (XXX) XXX-XXXX',
    link: 'tel:+1XXXXXXXXXX',
    description: 'Call for urgent matters',
  },
];

// Skills data
export const SKILLS_DATA = [
  { name: 'CI/CD Pipelines', level: 90, icon: '🚀' },
  { name: 'Python & Java', level: 85, icon: '💻' },
  { name: 'Azure DevOps', level: 88, icon: '☁️' },
  { name: 'Problem Solving', level: 92, icon: '🧩' },
  { name: 'System Monitoring', level: 80, icon: '📊' },
  { name: 'Automation', level: 87, icon: '⚡' },
];

// Personal values
export const VALUES_DATA = [
  {
    icon: '🎯',
    title: 'Precision',
    description: 'Every line of code, every pipeline, every solution is crafted with attention to detail.',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Always exploring new technologies and methodologies to solve problems efficiently.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Building bridges between teams and creating shared success through good communication.',
  },
  {
    icon: '📈',
    title: 'Growth',
    description: 'Committed to continuous learning and helping others grow in their technical journey.',
  },
];