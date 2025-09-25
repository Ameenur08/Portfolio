// Asset paths for easy reference throughout the application

export const ASSETS = {
  // Profile Images
  profile: {
    main: '/images/profile/ameen-profile.png',
    resume: '/images/profile/ameen-resume.pdf',
  },

  // Company Logos
  companies: {
    westernAlliance: '/images/companies/western-alliance-bank.svg',
    coX3Foundation: '/images/companies/co-x3-foundation.png',
    tataConsultancy: '/images/companies/tata-consultancy-services.png',
    inkwallTech: '/images/companies/inkwall-technologies.png',
  },

  // Technology Icons
  technologies: {
    // Cloud & DevOps
    aws: '/images/technologies/aws.png',
    azureDevOps: '/images/technologies/azure-devops.svg',
    docker: '/images/technologies/docker.svg',
    jenkins: '/images/technologies/jenkins.png',
    git: '/images/technologies/git.png',
    gitversion: '/images/technologies/gitversion.svg',
    yaml: '/images/technologies/yaml.svg',
    sonarqube: '/images/technologies/sonarqube.svg',
    
    // Programming Languages
    java: '/images/technologies/java.png',
    javascript: '/images/technologies/javascript.png',
    python: '/images/technologies/python.svg',
    
    // Frameworks & Libraries
    react: '/images/technologies/react.png',
    nextjs: '/images/technologies/nextjs.png',
    nodejs: '/images/technologies/node.png',
    springboot: '/images/technologies/springboot.png',
    angular: '/images/technologies/angular.svg',
    tailwindcss: '/images/technologies/tailwindcss.svg',
    
    // Databases
    mongodb: '/images/technologies/mongodb.png',
    sql: '/images/technologies/sql.png',
    
    // Frontend
    html: '/images/technologies/html.png',
    css: '/images/technologies/css.png',
    
    // Tools & Platforms
    figma: '/images/technologies/figma.png',
    canva: '/images/technologies/canva.png',
    confluence: '/images/technologies/confluence.svg',
    jira: '/images/technologies/jira.svg',
    notion: '/images/technologies/notion.svg',
    freshservice: '/images/technologies/freshservice.svg',
    peoplesoft: '/images/technologies/peoplesoft.svg',
    
    // Other
    graphql: '/images/technologies/graphql.png',
    googleAppScript: '/images/technologies/googleappscript.png',
    googleDrive: '/images/technologies/googledrive.png',
    calendar: '/images/technologies/calendar.png',
  },

  // Project Images
  projects: {
    project1: '/images/projects/project.png',
    project2: '/images/projects/project2.png',
    project3: '/images/projects/project3.png',
    project4: '/images/projects/project4.svg',
  },

  // Social Icons
  icons: {
    email: '/images/icons/emailIcon.png',
    github: '/images/icons/githubIcon.png',
    linkedin: '/images/icons/linkedinIcon.png',
  },
};

// Helper function to get asset path
export const getAsset = (category, name) => {
  return ASSETS[category]?.[name] || '';
};

// Experience data with proper asset references
export const EXPERIENCE_DATA = [
  {
    id: 'western-alliance-2025',
    company: 'AgreeYa Solutions / Western Alliance Bank',
    role: 'Azure DevOps Engineer',
    location: 'Columbus, OH',
    period: 'Jun 2025 - Present',
    type: 'Contract',
    logo: ASSETS.companies.westernAlliance,
    description: 'Building and optimizing CI/CD pipelines for Python applications while ensuring reliable deployment processes.',
    achievements: [
      'Built and optimized CI/CD pipelines for Python applications using Azure DevOps, GitVersion semantic versioning, and YAML templates - basically making deployments way more consistent across UAT and Prod',
      'Automated failure handling by integrating Build Pipelines and Azure Boards to auto-create and assign bug work items when builds fail, cutting incident response time by 40%',
      'Implemented governance controls including pipeline approvals, version validation, and SonarQube code quality checks to keep everything reliable and compliant',
      'Supported distributed systems running on self-hosted Windows/Linux agents, debugging build failures and making deployments more reliable',
      'Documented workflows and onboarded new developers through Confluence playbooks, making it easier for the team to get up to speed'
    ],
    technologies: ['Azure DevOps', 'Python', 'YAML', 'SonarQube', 'Git', 'GitVersion', 'Confluence', 'Windows', 'Linux'],
    featured: true,
  },
  {
    id: 'co-x3-2024',
    company: 'Co-x3 Family Foundation',
    role: 'IT Intern',
    location: 'Remote',
    period: 'May 2024 - Jul 2024',
    type: 'Internship',
    logo: ASSETS.companies.coX3Foundation,
    description: 'Gathered business requirements and supported cross-functional teams in testing and validating system enhancements.',
    achievements: [
      'Gathered and documented business requirements from stakeholders, translating business needs into actionable project tasks that development teams could actually use',
      'Analyzed current business processes and workflows, spotting inefficiencies and recommending improvements to make operations smoother',
      'Supported QA, UX, and development teams in testing system enhancements across 3+ sprints, documenting test results and tracking resolution of 10+ issues per release cycle through JIRA and Confluence',
      'Prepared detailed reports and documentation using Notion, helping business and technical stakeholders make faster decisions',
      'Participated in project meetings to provide status updates and gather requirements, keeping communication clear between technical and business teams'
    ],
    technologies: ['JIRA', 'Confluence', 'Notion', 'Agile/Scrum'],
    featured: false,
  },
  {
    id: 'tcs-2021-2023',
    company: 'Tata Consultancy Services',
    role: 'Assistant System Engineer',
    location: 'Varanasi, India',
    period: 'Feb 2021 - Jan 2023',
    type: 'Full-time',
    logo: ASSETS.companies.tataConsultancy,
    description: 'Worked with UK-based client "Hays" to resolve website issues and implement feature enhancements while maintaining high SLA standards.',
    achievements: [
      'Collaborated with business users via Freshservice ticketing system to gather requirements for website issue resolutions and feature enhancements, achieving a 98% ticket closure rate within SLA timelines',
      'Resolved front-end and back-end issues using Java, JavaScript, and Angular, contributing to new feature deployments and improving website reliability - led to a 20% decrease in repeat tickets',
      'Decoded and modified Java class files on static websites to implement API-related updates, then redeployed them by restarting services on production servers with zero downtime',
      'Participated in Agile sprints tracked via Trello, worked with cross-functional teams to break down tickets into actionable user stories, contributing to a 25% improvement in sprint velocity',
      'Resolved backend data backlogs in the BOIS application integrated with PeopleSoft by identifying inconsistencies and collaborating with DB teams, improving data refresh time by 30%',
      'Monitored feeder websites collecting user data from the main Hays portal, used SQL to troubleshoot and resolve issues independently, reducing incident reporting time by 20%'
    ],
    technologies: ['Java', 'JavaScript', 'Angular', 'SQL', 'Spring Boot', 'PeopleSoft', 'Freshservice'],
    featured: true,
  },
  {
    id: 'inkwall-2019',
    company: 'InkWall Technologies',
    role: 'Junior IT Developer Intern',
    location: 'India',
    period: 'May 2019 - Jul 2019',
    type: 'Internship',
    logo: ASSETS.companies.inkwallTech,
    description: 'Built responsive web applications and optimized database performance for client projects.',
    achievements: [
      'Developed a responsive web application with React.js and TailwindCSS, boosting user engagement by 15%',
      'Optimized MySQL queries to cut response time by 20% and managed project plans with clear tasks and timelines, reducing project delays by 15%'
    ],
    technologies: ['React.js', 'TailwindCSS', 'MySQL', 'HTML/CSS'],
    featured: false,
  },
];

// Projects data
export const PROJECTS_DATA = [
  {
    id: 'hotel-booking',
    title: 'Hotel Booking Application',
    description: 'Developed a MERN-based hotel booking application with user authentication, real-time availability checks, and an admin portal to manage bookings.',
    image: '/images/projects/hotel-booking.svg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Ameenur0/Hotel-Booking-Application',
    featured: true,
  },
  {
    id: 'cricket-dashboard',
    title: 'Cricket Dashboard',
    description: 'Developed an interactive IPL Dashboard using Java Spring Boot and React.',
    image: '/images/projects/cricket-dashboard.svg',
    technologies: ['Java', 'React', 'Spring Boot'],
    github: 'https://github.com/Ameenur0/CricketDashboard',
    featured: true,
  },
  {
    id: 'shopping-database',
    title: 'Online Shopping Database',
    description: 'Implemented an optimized online shopping database system using PL/SQL and SQL.',
    image: '/images/projects/database-system.svg',
    technologies: ['SQL', 'PL/SQL'],
    github: 'https://github.com/Ameenur08/Online-Shopping-DB-System',
    featured: false,
  },
  {
    id: 'calendar-automation',
    title: 'Calendar & Form Handoff Automation',
    description: 'Automates the creation of Drive folders from calendar events and emails PDF forms to participants.',
    image: '/images/projects/automation-script.svg',
    technologies: ['Google Apps Script', 'Calendar API', 'Google Drive', 'JavaScript'],
    github: 'https://github.com/Ameenur0/calendar-form-handoff-automation',
    featured: true,
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description: 'Utilized Figma and Canva to create interactive prototypes.',
    image: '/images/projects/website-redesign.svg',
    technologies: ['UI/UX', 'Figma', 'Canva'],
    github: 'https://github.com/Ameenur0/HCC-629-Website-Redesign',
    featured: false,
  },
  
  // Future Cloud/DevOps Projects (commented out for now)
  // {
  //   id: 'ci-cd-pipeline',
  //   title: 'CI/CD Pipeline Optimization',
  //   description: 'Optimized deployment pipelines reducing build time by 60% and improving reliability.',
  //   image: '/images/projects/project.png',
  //   technologies: ['Azure DevOps', 'Docker', 'Kubernetes', 'YAML'],
  //   github: '#',
  //   featured: true,
  // },
  // {
  //   id: 'infrastructure-automation',
  //   title: 'Infrastructure as Code',
  //   description: 'Automated cloud infrastructure deployment using Infrastructure as Code principles.',
  //   image: '/images/projects/project2.png',
  //   technologies: ['Terraform', 'AWS', 'Python', 'Jenkins'],
  //   github: '#',
  //   featured: true,
  // },
];

export default ASSETS;