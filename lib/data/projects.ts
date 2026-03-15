export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  metrics: string;
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  details: {
    problem: string;
    solution: string;
    problemPoints: string[];
    solutionPoints: string[];
    features: { title: string; desc: string }[];
  }
}

export const projects: Project[] = [
  {
    id: "chillapply",
    title: "Chillapply",
    description: "AI-powered job application automation platform. Successfully submitted over 150,000 applications with a 92% success rate, facilitating 100k+ interviews.",
    image: "/assets/images/thumb-chillapply.png",
    tags: ["React", "AI", "Chrome Extension"],
    category: "AI",
    metrics: "150k+ Apps",
    links: { live: "https://chillapply.com", caseStudy: "/projects/chillapply" },
    details: {
      problem: "Job seekers spend hundreds of hours manually filling out forms and tailoring resumes for roles, leading to application fatigue and missed opportunities.",
      solution: "Developed a sophisticated AI engine that parses job descriptions and autocompletes complex application forms using a robust Chrome Extension architecture.",
      problemPoints: [
        "Manual form filling across multiple job boards",
        "Time-consuming resume customization for each application",
        "High application fatigue leading to missed opportunities"
      ],
      solutionPoints: [
        "AI-powered form auto-completion",
        "Intelligent resume tailoring based on job descriptions",
        "Chrome extension for seamless integration"
      ],
      features: [
        { title: "One-Click Apply", desc: "Automated form filling across 50+ major job boards." },
        { title: "AI Resume Tailoring", desc: "Dynamically adjusts key terms based on JD requirements." },
        { title: "Smart Tracking", desc: "Consolidated dashboard to monitor success rates and responses." }
      ]
    }
  },
  {
    id: "quoppo",
    title: "Quoppo",
    description: "Venture studio platform scaling small businesses through capital infusion and operational support. Reported 30% improvement in operational efficiency.",
    image: "/assets/images/thumb-quoppo.png",
    tags: ["Next.js", "Venture Tech", "BI"],
    category: "SaaS",
    metrics: "30% Efficiency",
    links: { live: "https://quoppo.com", caseStudy: "/projects/quoppo" },
    details: {
      problem: "Early-stage businesses lack the operational frameworks and visibility needed to scale effectively after receiving capital.",
      solution: "Built a comprehensive BI and management layer that provides real-time insights into unit economics and operational workflows.",
      problemPoints: [
        "Lack of operational frameworks for scaling",
        "Poor visibility into business metrics and performance",
        "Inefficient resource allocation after funding"
      ],
      solutionPoints: [
        "Real-time BI dashboard for key metrics",
        "Operational templates and playbooks",
        "Automated resource planning and allocation"
      ],
      features: [
        { title: "Performance BI", desc: "Real-time tracking of revenue and growth metrics." },
        { title: "Operational Templates", desc: "Ready-to-use playbooks for various business functions." },
        { title: "Resource Planning", desc: "Optimized allocation of human and financial capital." }
      ]
    }
  },
  {
    id: "quantum-academy",
    title: "Quantum Academy",
    description: "High-tier interactive AI education platform for C-suite leaders and developers. Live Zoom-based cohort education with industry experts.",
    image: "/assets/images/thumb-quantum-academy.png",
    tags: ["MERN", "EdTech", "LMS"],
    category: "MERN",
    metrics: "C-Suite Focus",
    links: { live: "https://www.quantum-academy.ai", caseStudy: "/projects/quantum-academy" },
    details: {
      problem: "Traditional LMS platforms lack the interactivity and context needed for high-level executive education in rapidly evolving fields like AI.",
      solution: "Created a community-first learning experience with live session integration, interactive notebooks, and expert-led forums.",
      problemPoints: [
        "Lack of interactivity in traditional LMS platforms",
        "Insufficient context for executive-level AI education",
        "Difficulty keeping pace with rapidly evolving AI field"
      ],
      solutionPoints: [
        "Live Zoom-based cohort sessions with experts",
        "Interactive cloud-hosted AI experimentation labs",
        "Community forums for peer collaboration"
      ],
      features: [
        { title: "Live Cohorts", desc: "Seamless Zoom integration for real-time interactive lectures." },
        { title: "Interactive Labs", desc: "Cloud-hosted environments for hands-on AI experimentation." },
        { title: "Networking Hub", desc: "Private channel for C-suite peers to collaborate on case studies." }
      ]
    }
  },
  {
    id: "descipr",
    title: "Descipr",
    description: "AI education and research funding platform democratizing access to Data Science and Vector DB workshops with hands-on case studies.",
    image: "/assets/images/thumb-descipr.png",
    tags: ["Python", "Vector DB", "AI Research"],
    category: "AI",
    metrics: "Research Aid",
    links: { live: "https://www.descipr.com", caseStudy: "/projects/descipr" },
    details: {
      problem: "The high cost and complexity of modern data science research often gatekeep innovation from independent researchers and smaller institutions.",
      solution: "A decentralized funding and workshop platform focused on Vector DBs and large-scale data retrieval patterns.",
      problemPoints: [
        "High costs of data science research tools",
        "Complex technical barriers for independent researchers",
        "Limited access for smaller institutions"
      ],
      solutionPoints: [
        "Decentralized funding platform for research",
        "Accessible Vector DB workshops and training",
        "Hands-on case studies for practical learning"
      ],
      features: [
        { title: "Grant Management", desc: "Streamlined process for funding research initiatives." },
        { title: "Vector DB Sandbox", desc: "Optimized playground for RAG and semantic search testing." },
        { title: "Workshop Marketplace", desc: "Curated modules from top-tier research leads." }
      ]
    }
  },
  {
    id: "drone-sports",
    title: "Drone Sports India",
    description: "STEM education through competitive drone athletics. Established in over 300 schools, fostering 21st-century skills in aerospace.",
    image: "/assets/images/thumb-drone-sports.png",
    tags: ["Robotics", "STEM", "Aviation"],
    category: "Real-time",
    metrics: "300+ Schools",
    links: { live: "https://dronesports.in", caseStudy: "/projects/drone-sports" },
    details: {
      problem: "Aviation and aerospace education in India often remain purely theoretical, failing to engage students in hands-on technical skills.",
      solution: "Launched a nationwide platform for drone pilot training, custom drone assembly, and competitive obstacle racing leagues.",
      problemPoints: [
        "Theoretical-only aerospace education",
        "Lack of hands-on technical skills training",
        "Limited student engagement in aviation topics"
      ],
      solutionPoints: [
        "Practical drone pilot training programs",
        "Custom drone assembly workshops",
        "Competitive racing leagues for skill development"
      ],
      features: [
        { title: "Curriculum Portal", desc: "Digital modules covering aerodynamics and drone mechanics." },
        { title: "Tournament Tracker", desc: "Real-time leaderboard and event management for racing leagues." },
        { title: "Pilot Certification", desc: "Verified skill assessment and badging for students." }
      ]
    }
  },
  {
    id: "kikobot",
    title: "Kikobot",
    description: "Affordable collaborative robotics and industrial automation solution. ESP32-based hardware for research and education.",
    image: "/assets/images/thumb-kikobot.png",
    tags: ["Embedded", "ESP32", "Robotics"],
    category: "SaaS",
    metrics: "Smart Hardware",
    links: { live: "https://kikobot.com", caseStudy: "/projects/kikobot" },
    details: {
      problem: "Industrial robotics kits are prohibitively expensive for schools and independent makers looking to learn kinematics.",
      solution: "Developed an open-architecture ESP32-based robotic arm with a custom web interface for real-time control and programming.",
      problemPoints: [
        "Prohibitively expensive robotics kits",
        "Limited access for educational institutions",
        "Complex setup requirements for beginners"
      ],
      solutionPoints: [
        "Affordable ESP32-based robotic arm",
        "User-friendly web interface for control",
        "Open architecture for customization and learning"
      ],
      features: [
        { title: "Web GUI Control", desc: "Low-latency WebSocket interface for manual arm movement." },
        { title: "Blockly Integration", desc: "Visual programming for students to learn logic sequencing." },
        { title: "Kinematics Engine", desc: "Robust inverse kinematics computed locally on the ESP32." }
      ]
    }
  },
  {
    id: "gen-z",
    title: "Gen-Z XNET",
    description: "Decentralized wireless infrastructure (DePIN) on Solana blockchain. Enabling neutral-host LTE/5G offloading.",
    image: "/assets/images/thumb-genznxt.png",
    tags: ["Solana", "Blockchain", "5G"],
    category: "Real-time",
    metrics: "DePIN Tech",
    links: { live: "https://gen-z-xnet.vercel.app", caseStudy: "/projects/gen-z" },
    details: {
      problem: "Telecommunications infrastructure is monopolized, leading to inefficient coverage and high costs for 5G deployment.",
      solution: "Incentivized individuals to host small-cell 5G gateways on a neutral-host network, rewarding them with blockchain tokens.",
      problemPoints: [
        "Monopolized telecommunications infrastructure",
        "Inefficient 5G coverage in rural areas",
        "High costs for network deployment and maintenance"
      ],
      solutionPoints: [
        "Decentralized 5G gateway hosting network",
        "Blockchain-based incentives for participants",
        "Neutral-host infrastructure for better coverage"
      ],
      features: [
        { title: "On-chain Rewards", desc: "Automated token distribution based on bandwidth contributing." },
        { title: "Node Dashboard", desc: "Comprehensive stats for gateway hosts to monitor connectivity." },
        { title: "Secure Handover", desc: "Proprietary protocols for seamless LTE/5G session offloading." }
      ]
    }
  },
  {
    id: "kequel",
    title: "Kequel",
    description: "Modular smart furniture integrating lifestyle with aesthetics. Featured on Adafruit for its customizable electronic table modules.",
    image: "/assets/images/thumb-kequel.png",
    tags: ["Smart Home", "Hardware", "Product Design"],
    category: "Landing",
    metrics: "Adafruit Featured",
    links: { live: "https://kequel.com", caseStudy: "/projects/kequel" },
    details: {
      problem: "Furniture design has remained stagnant, failing to integrate the modern tech ecosystem into the living space.",
      solution: "Modular furniture systems with embedded LEDs, wireless charging, and IoT controls through a unified mobile app.",
      problemPoints: [
        "Stagnant furniture design without modern tech integration",
        "Lack of smart home ecosystem compatibility",
        "Limited customization options for tech features"
      ],
      solutionPoints: [
        "Modular smart furniture with embedded technology",
        "Wireless charging and IoT controls",
        "Unified mobile app for seamless management"
      ],
      features: [
        { title: "Modular I/O", desc: "Interchangeable tech panels for power, audio, and lighting." },
        { title: "App Control", desc: "Custom React Native app for ambiance and hardware management." },
        { title: "Lifestyle Mesh", desc: "Furniture pieces that sync with each other via local RF." }
      ]
    }
  },
];
