export const portfolioData = {
  name: "Asaad F. Rasul",
  contact: {
    location: "Vienna, Austria",
    phone: "+43 688 64374461",
    email: "asadfalah2@gmail.com",
    portfolio: "sn0wqt.github.io",
    github: "github.com/sn0wqt",
    linkedin: "linkedin.com/in/asaad-f-rasul",
  },
  education: [
    {
      degree: "M.Sc. in Software Engineering",
      institution: "Technische Universität Wien, Austria",
      period: "Oct 2025 – Present",
      details:
        "Focusing on advanced software architecture, distributed systems, and rigorous engineering methodologies within a research-driven environment.",
    },
    {
      degree: "B.Sc. in Software Engineering",
      institution: "American University of Iraq, Sulaimani",
      period: "Sep 2019 – Jun 2024",
      details:
        "Cumulative GPA: 3.16/4.00; President's Honor Award for final-semester GPA of 3.82. Led capstone project ArchiEstate, developing end-to-end backend services for a property-management portal with live data synchronization across clients and optimized caching for performance under concurrent load.",
    },
  ],
  languages: [
    { name: "Kurdish", proficiency: "Native" },
    { name: "English", proficiency: "IELTS 8.0" },
    { name: "Arabic", proficiency: "Intermediate" },
    { name: "German", proficiency: "Basic" },
  ],
  coreSkills: {
    languages: [
      "Java",
      "JavaScript/TypeScript",
      "Python",
      "C/C++",
      "Objective-C",
      "HTML/CSS",
      "Assembly",
    ],
    frameworks: [
      "Spring Boot",
      "Node.js/Express",
      "React",
      "MySQL/Sequelize",
      "MongoDB",
      "WebSocket APIs",
    ],
    infrastructure: [
      "Linux/Unix",
      "Git/GitHub",
      "Docker",
      "AWS",
      "Google Cloud APIs",
    ],
    specialties: [
      "Scalable backend architecture",
      "API design",
      "Automation scripting",
      "Reverse engineering",
      "Real-time feature implementation",
    ],
  },
  professionalExperience: [
    {
      role: "Backend Engineer",
      company: "Architech Iraq",
      period: "Feb 2024 – Sep 2024",
      responsibilities: [
        "Designed and built microservices in Spring Boot and TypeScript to support new mobile and web features.",
        "Integrated a publish/subscribe mechanism for live notifications and order updates, reducing client-perceived latency and server load.",
        "Optimized database schemas and complex queries in MySQL/Sequelize, improving throughput by over 50%.",
      ],
    },
    {
      role: "HR & Development Intern",
      company: "IQ Group",
      period: "Jul 2023 – Sep 2023",
      responsibilities: [
        "Automated HR document workflows with Python, cutting manual processing time by 30%.",
        "Employed Google Cloud Vision and Sheets APIs to extract, validate, and report on incoming data at scale.",
      ],
    },
    {
      role: "Cheats Developer",
      company: "iOSGods (Remote)",
      period: "2014 – 2020",
      responsibilities: [
        "Developed runtime patches and modmenus for iOS games in C++, Assembly, Objective-C, and Logos.",
        "Reverse-engineered application binaries to locate injection points and implement undetectable hooks.",
      ],
    },
  ],
  selectedProjects: [
    {
      title: "ArchiMenus App",
      description:
        "Backend for a restaurant menu management system with real-time updates and scalable APIs supporting thousands of users. Built with Node.js, TypeScript, Express, MySQL, Sequelize, and Redis.",
      tags: ["Backend", "TypeScript", "Node.js", "Express", "MySQL", "Redis"],
      githubUrl: "",
      liveUrl: "",
      appStoreUrl: "https://apps.apple.com/app/archimenus/id6742847707",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.architech.menus",
      imageUrl: "/project-images/archimenus.png",
    },
    {
      title: "Fruj Fresh App",
      description:
        "Backend for a mobile app connecting users to fresh produce markets. Implemented real-time order processing and optimized MySQL queries under heavy load using Node.js, Express, and Redis.",
      tags: ["Backend", "TypeScript", "Node.js", "Express", "MySQL", "Redis"],
      githubUrl: "",
      liveUrl: "",
      appStoreUrl: "https://apps.apple.com/app/fruj-fresh/id6511192964",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.architech.frujfresh",
      imageUrl: "/project-images/fruj2.png",
    },
    {
      title: "ArchiEstate",
      description:
        "Full-stack real estate management system streamlining property listings, user access control, and UI interaction. Built using MongoDB, Express, React, Node.js, and Tailwind CSS.",
      tags: [
        "Full-Stack",
        "Backend",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Tailwind",
      ],
      githubUrl: "",
      liveUrl: "",
      appStoreUrl: "",
      playStoreUrl: "",
      imageUrl: "/project-images/archiestate2.png",
    },
    {
      title: "PrivacyFreak (Telegram Bot)",
      description:
        "Telegram bot that removes EXIF and metadata from images and media files. Built using Java, Maven, Telegram Bot API, and Apache Commons Imaging.",
      tags: ["Bots", "Backend", "Java", "Maven", "Telegram", "Apache Commons"],
      githubUrl: "https://github.com/sn0wqt/PrivacyFreak",
      liveUrl: "",
      appStoreUrl: "",
      playStoreUrl: "",
      imageUrl: "/project-images/privacy2.png",
    },
    {
      title: "Uncle Movies v2 (Discord Bot)",
      description:
        "Discord bot to manage and categorize user watchlists using IMDb data via the cinemagoer library. Built in Python.",
      tags: ["Bots", "Backend", "Python", "Discord", "Cinemagoer"],
      githubUrl: "https://github.com/sn0wqt/Uncle-Movies-v2",
      liveUrl: "",
      appStoreUrl: "",
      playStoreUrl: "",
      imageUrl: "/project-images/uncle2.png",
    },
  ],
  certifications: [
    {
      name: "CS50's Introduction to Programming with Python",
      institution: "Harvard University",
      date: "Feb 2025",
    },
    {
      name: "CS50's Introduction to Computer Science",
      institution: "Harvard University",
      date: "Apr 2025",
    },
  ],
};
