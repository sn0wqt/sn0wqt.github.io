import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Asaad F. Rasul",
  initials: "AF",
  location: "Sulaymaniyah, Iraq",
  locationLink: "https://www.google.com/maps/place/Sulaymaniyah",
  about:
    "Backend Developer proficient in web development, Node.js, databases, and reverse engineering",
  summary:
    "With 12+ years of technology experience, I possess extensive expertise in iOS, macOS, and Android platforms, and web development (CSS, HTML, JavaScript). I have intermediate skills in Node.js, MongoDB, MySQL, and proficiency in Java, Python, and Assembly, including reverse engineering through personal projects involving game cheats. I'm experienced in project management and collaboration via GitHub.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://shiro-koi.github.io",
  contact: {
    email: "asadfalah2@gmail.com",
    tel: "+9647700124848",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Shiro-Koi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/asaad-f-rasul-7a7039153/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/_asaadfalah",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "The American University of Iraq, Sulaimani",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2019",
      end: "2024",
    },
  ],
  work: [
    {
      company: "IQ Group",
      link: "https://iq.group",
      badges: ["On-Site"],
      title: "Human Resources & Development Intern",
      start: "July 2023",
      end: "Sept 2023",
      description:
        "Automated data entry with Python scripts, boosting efficiency. Leveraged Google Cloud APIs for data scraping and processing. Conducted product testing, documenting defects for quick resolution. Managed interns, ensuring timely project milestones. Technologies: Python, Google Cloud APIs",
    },
    {
      company: "iOSGods",
      link: "https://iOSGods.com",
      badges: ["Remote"],
      title: "Staff Member & Cheats Developer/Provider",
      start: "2014",
      end: "2020",
      description:
        "Served as a staff member for a high-traffic iOS Cheats Forum. Developed cheat codes for iOS games by decrypting binaries, injecting custom runtime code, and reverse engineering, honing skills in C++ and assembly language.",
    },
    {
      company: "Denis Home",
      link: "https://www.instagram.com/denis.hom3/",
      badges: ["Remote"],
      title: "Social Media Manager",
      start: "2021",
      end: "2023",
      description:
        "Managed Denis Home's social media, creating engaging content, boosting brand awareness, and running paid ads to attract customers across multiple platforms.",
    },
    {
      company: "AUIS",
      link: "https://www.auis.edu.krd",
      badges: ["On-Site"],
      title: 'President & Supervisor of The "The Club" Club',
      start: "2021",
      end: "2023",
      description: 'Led and managed "The Club" at AUIS, growing it to over 400 members. Developed leadership and organizational skills through weekly event planning and execution, and strengthened communication by collaborating with team members and engaging with attendees.',
    },
  ],
  skills: [
    "Java",
    "JavaScript",
    "C++",
    "Python",
    "Dart/Flutter",
    "HTML/CSS",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Assembly",
    "Git/GitHub",
    "Linux/Unix",
    ],
  projects: [
    {
      title: "ArchiEstate",
      techStack: [
        "Side Project",
        "JavaScript",
        "React",
        "Vite",
        "Tailwind",
        "Node.js",
        "MongoDB",
      ],
      description: "A real estate management system designed to streamline the entire property management process",
    },
    {
      title: "ScheduleKB (iOS)",
      techStack: ["Side Project", "Objective-C", "Logos", "iOS Tweak", "Theos"],
      description:
        "An iOS tweak that dynamically changes keyboard color based on time or user preferences.",
    },
    {
      title: "Uncle Movies (Discord)",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "A Discord bot using the OpenAI API to help users manage, search, add, and delete movies from a watchlist.",
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Python", "OpenAI API"],
      description:
        "Discord bot that uses OpenAI API to manage and track movies.",
    },
    {
      title: "MT5 Auto (Windows)",
      techStack: ["Side Project", "Python", "MetaTrader5", "IMAPClient"],
      description:
        "Automation tool for executing trades and sending email alerts with MetaTrader5 and IMAPClient.",
    },
    {
      title: "Web Scraper (Windows)",
      techStack: ["Side Project", "Python", "BeautifulSoup", "PyQt5"],
      description: "GUI tool that uses Google Cloud APIs to aggregate and verify business information, including social media, locations, hours, and phone numbers.",
    },
  ],
} as const;
