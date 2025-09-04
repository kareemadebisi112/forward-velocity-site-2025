// Project categories for filtering
export const categories = ["All", "Full Stack", "Mobile", "AI & ML", "Blockchain", "Data Visualization", "IoT"];

// Main projects data with consistent structure
export const projectsData = [
  {
    id: 1,
    title: "Grant Discovery App",
    description: "Grants to your mailbox: A comprehensive platform for discovering and applying for grants tailored to your needs.",
    fullDescription: "This platform represents a complete overhaul of traditional grant application processes. Built from the ground up with modern technologies, it delivers exceptional performance, scalability, and user experience. The platform handles everything from grant discovery to application management, ensuring users never miss an opportunity.",
    category: "Full Stack",
    tags: ["Full Stack", "E-commerce", "Mobile"],
    image: "https://velocity.sfo3.cdn.digitaloceanspaces.com/Forward%20Velocity%20Site/Projects/gp_demo.png",
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/youruser/ecommerce-platform",
    featured: true,
    slug: "grant-discovery-app",
    completedDate: "2024-12-15",
    duration: "4 months",
    teamSize: "3 developers",
    status: "Completed",
    technologies: ["React", "Django", "PostgreSQL", "Stripe", "AWS", "Nginx"],
    challenges: [
      "Implementing real-time grant matching algorithms",
      "Building a user-friendly application interface",
      "Ensuring data security and compliance with regulations"
    ],
    solutions: [
      "Developed a microservices architecture with event-driven communication",
      "Integrated multiple payment gateways with fallback mechanisms",
      "Built a custom CMS with drag-and-drop interface for product management"
    ],
    results: [
      "Increased conversion rate by 35%",
      "Reduced page load times by 50%",
      "Achieved 99.9% uptime with auto-scaling infrastructure",
      "Successfully handles 10,000+ concurrent users"
    ]
  },
  // {
  //   id: 2,
  //   title: "Email Marketing Platform",
  //   description: "Marketing with a personal touch: An email marketing platform that personalizes content for individual users.",
  //   fullDescription: "A sophisticated email marketing platform that leverages AI to personalize content for individual users. Built with scalability in mind, it handles massive email campaigns while maintaining high deliverability rates and providing detailed analytics on user engagement.",
  //   category: "Full Stack",
  //   tags: ["AI & ML", "Full Stack", "Email Marketing"],
  //   image: "https://placehold.co/400x250",
  //   liveUrl: "https://demo-email-platform.com",
  //   githubUrl: "https://github.com/youruser/email-platform",
  //   featured: true,
  //   slug: "email-marketing-platform",
  //   completedDate: "2024-11-20",
  //   duration: "6 months",
  //   teamSize: "4 developers",
  //   status: "Completed",
  //   technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS SES", "TensorFlow"],
  //   challenges: [
  //     "Building AI-powered content personalization engine",
  //     "Ensuring high email deliverability rates",
  //     "Creating intuitive campaign management interface"
  //   ],
  //   solutions: [
  //     "Implemented machine learning algorithms for content optimization",
  //     "Built robust email infrastructure with multiple provider fallbacks",
  //     "Developed drag-and-drop email builder with real-time preview"
  //   ],
  //   results: [
  //     "40% increase in email open rates",
  //     "60% improvement in click-through rates",
  //     "99.5% email deliverability achieved",
  //     "Reduced campaign setup time by 70%"
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "Grocery Tracking App",
  //   description: "Break the rules, Not the bank: A smart grocery tracking app that helps you save money and reduce waste.",
  //   fullDescription: "An intelligent mobile application that revolutionizes grocery shopping by tracking purchases, predicting consumption patterns, and suggesting optimal buying decisions. The app helps users reduce food waste while saving money through smart shopping recommendations.",
  //   category: "Mobile",
  //   tags: ["Mobile", "Health & Fitness", "Full Stack", "Open Source"],
  //   image: "/api/placeholder/400/250",
  //   liveUrl: "https://demo-grocery-app.com",
  //   githubUrl: "https://github.com/youruser/grocery-app",
  //   featured: false,
  //   slug: "grocery-tracking-app",
  //   completedDate: "2024-10-10",
  //   duration: "3 months",
  //   teamSize: "2 developers",
  //   status: "Completed",
  //   technologies: ["React Native", "Firebase", "Node.js", "Express", "Machine Learning APIs"],
  //   challenges: [
  //     "Building accurate consumption prediction algorithms",
  //     "Creating seamless barcode scanning functionality",
  //     "Implementing offline-first architecture"
  //   ],
  //   solutions: [
  //     "Developed predictive models using user consumption history",
  //     "Integrated multiple barcode scanning APIs with fallback mechanisms",
  //     "Built robust offline storage with automatic synchronization"
  //   ],
  //   results: [
  //     "30% reduction in food waste for active users",
  //     "25% average savings on grocery bills",
  //     "4.8/5 app store rating",
  //     "50,000+ downloads in first 6 months"
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "Swimming App",
  //   description: "A mobile app for tracking swimming workouts, providing personalized training plans and performance analytics.",
  //   fullDescription: "A comprehensive swimming training application that provides personalized workout plans, real-time performance tracking, and detailed analytics. The app caters to swimmers of all levels, from beginners to competitive athletes, offering tailored training programs and progress monitoring.",
  //   category: "Mobile",
  //   tags: ["Mobile", "Health & Fitness"],
  //   image: "/api/placeholder/400/250",
  //   liveUrl: "https://demo-swimming-app.com",
  //   githubUrl: "https://github.com/youruser/swimming-app",
  //   featured: true,
  //   slug: "swimming-app",
  //   completedDate: "2024-09-15",
  //   duration: "5 months",
  //   teamSize: "3 developers",
  //   status: "Completed",
  //   technologies: ["Flutter", "Firebase", "Python", "FastAPI", "PostgreSQL", "Apple HealthKit"],
  //   challenges: [
  //     "Accurately tracking swimming metrics in water environment",
  //     "Creating adaptive training plans for different skill levels",
  //     "Integrating with various wearable devices"
  //   ],
  //   solutions: [
  //     "Implemented advanced sensor fusion algorithms for accurate tracking",
  //     "Built AI-powered training plan generator based on user performance",
  //     "Created universal API for multiple wearable device integrations"
  //   ],
  //   results: [
  //     "20% improvement in user swimming performance",
  //     "95% user retention rate after 3 months",
  //     "Integration with 15+ popular fitness wearables",
  //     "Featured in App Store fitness category"
  //   ]
  // },
  // {
  //   id: 5,
  //   title: "Real-Time Chat Platform",
  //   description: "Scalable real-time messaging platform with video calls, file sharing, and team collaboration features. Built for enterprise use.",
  //   fullDescription: "An enterprise-grade real-time communication platform that combines messaging, video conferencing, and file sharing in a single, secure application. Built to handle thousands of concurrent users while maintaining low latency and high security standards.",
  //   category: "Full Stack",
  //   tags: ["Full Stack", "Communication"],
  //   image: "/api/placeholder/400/250",
  //   liveUrl: "https://demo-chat-platform.com",
  //   githubUrl: "https://github.com/youruser/chat-platform",
  //   featured: false,
  //   slug: "real-time-chat-platform",
  //   completedDate: "2024-08-30",
  //   duration: "7 months",
  //   teamSize: "5 developers",
  //   status: "Completed",
  //   technologies: ["React", "Socket.io", "WebRTC", "Node.js", "MongoDB", "Redis", "Docker"],
  //   challenges: [
  //     "Building scalable real-time messaging infrastructure",
  //     "Implementing secure end-to-end encryption",
  //     "Creating seamless video call experience"
  //   ],
  //   solutions: [
  //     "Built microservices architecture with horizontal scaling capabilities",
  //     "Implemented advanced encryption protocols for message security",
  //     "Developed custom WebRTC implementation with fallback mechanisms"
  //   ],
  //   results: [
  //     "Supports 10,000+ concurrent users",
  //     "Sub-100ms message delivery latency",
  //     "99.99% uptime reliability",
  //     "SOC2 Type II compliance achieved"
  //   ]
  // },
  // {
  //   id: 6,
  //   title: "IoT Smart Home System",
  //   description: "Comprehensive IoT solution for smart home automation with AI-powered energy optimization and security monitoring.",
  //   fullDescription: "An intelligent home automation system that integrates various IoT devices to provide comprehensive control, monitoring, and optimization. The system uses AI to learn user patterns and automatically optimize energy consumption while maintaining security and comfort.",
  //   category: "IoT",
  //   tags: ["IoT", "Smart Home"],
  //   image: "/api/placeholder/400/250",
  //   liveUrl: "https://demo-smart-home.com",
  //   githubUrl: "https://github.com/youruser/smart-home",
  //   featured: false,
  //   slug: "iot-smart-home-system",
  //   completedDate: "2024-07-20",
  //   duration: "8 months",
  //   teamSize: "4 developers",
  //   status: "Completed",
  //   technologies: ["Python", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana", "TensorFlow", "React"],
  //   challenges: [
  //     "Integrating diverse IoT devices with different protocols",
  //     "Building reliable communication in challenging network conditions",
  //     "Creating predictive energy optimization algorithms"
  //   ],
  //   solutions: [
  //     "Developed universal IoT gateway with protocol translation capabilities",
  //     "Implemented mesh network architecture for improved reliability",
  //     "Built machine learning models for energy consumption prediction"
  //   ],
  //   results: [
  //     "30% reduction in energy consumption",
  //     "Integration with 50+ different device types",
  //     "99.5% system uptime reliability",
  //     "25% improvement in home security response time"
  //   ]
  // }
];

// Related projects for cross-referencing
export const relatedProjects = [
  {
    id: 2,
    title: "Email Marketing Platform",
    tags: ["AI & ML", "Full Stack", "Email Marketing"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    title: "Grocery Tracking App",
    tags: ["Mobile", "Health & Fitness"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 4,
    title: "Swimming App",
    tags: ["Mobile", "Health & Fitness"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 5,
    title: "Real-Time Chat Platform",
    tags: ["Full Stack", "Communication"],
    image: "/api/placeholder/300/200"
  }
];

// Export default for convenience
export default {
  projectsData,
  categories,
  relatedProjects
};
