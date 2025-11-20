// src/data/projectsData.ts

// Define the structure for a section item
interface ProjectSectionItem {
  title: string;
  items: string[];
}

// Define the structure for a single project
interface ProjectData {
  id: string; // Unique slug for routing
  title: string;
  date: string;
  description: string;
  techStack: string[];
  sections: ProjectSectionItem[];
  externalLink?: string;
}

// --- Individual Project Data Definitions ---

const trafficSignProjectSections: ProjectSectionItem[] = [
  {
    title: "Project Overview & Goal",
    items: [
      "Developed an intelligent, graph-based educational tool to detect and classify South African traffic signs",
      "Aimed to enhance road safety awareness through interactive visual learning methods",
      "Demonstrated advanced algorithmic design and core language implementation without external ML frameworks",
    ],
  },
  {
    title: "Algorithmic Implementation",
    items: [
      "Designed and implemented a custom **Graph Neural Network (GNN)** classification model **entirely in pure Java**",
      "Engineered a **k-Nearest Neighbors (k-NN) graph structure** for relating visually similar signs",
      "Utilized **Euclidean Distance** and **Cosine Similarity** metrics for node similarity calculations",
      "Implemented feature normalization and feature propagation logic for context-enriched classification",
    ],
  },
  {
    title: "Core Logic & Image Processing",
    items: [
      "Engineered the system's core logic using image processing techniques to detect signs in images",
      "Feature extraction based on **Color** (red, blue, yellow), **Shape** (triangle, circle, octagon), **Edge Density**, and **Aspect Ratio**",
      "Achieved robust classification into South African categories (Regulatory, Warning, Informational)",
      "Designed the system to be scalable and expandable for new signs without full re-training",
    ],
  },
  {
    title: "Technical Stack & Outcome",
    items: [
      "Primary implementation language: **Java**",
      "Focus on core data structures and custom algorithm design",
      "Outcome: A functional tool demonstrating the power of graph structures for visual pattern recognition",
    ],
  },
];

const benchmarkTraderProjectSections: ProjectSectionItem[] = [
  {
    title: "Project Overview",
    items: [
      "Designed & developed a comprehensive full-stack trading platform from concept to deployment",
      "Guided demo trading platform facilitating user-broker interactions and trade lifecycle management",
      "Ranked #14 in UJ ACSSE Top 20 Projects, demonstrating technical excellence and innovation",
    ],
  },
  {
    title: "System Design & Architecture",
    items: [
      "Created UML use case and sequence diagrams to model complete trade lifecycle and user-broker interactions",
      "Engineered normalized database schema for user profiles, risk assessments, and trade histories",
      "Built backend with Node.js & Prisma, and responsive frontend with React, TypeScript & Tailwind CSS",
      "Extended platform accessibility with companion Flutter mobile app for on-the-go access",
    ],
  },
  {
    title: "Core Functionality",
    items: [
      "Smart matching algorithm pairing users with brokers based on dynamic risk-assessment questionnaire",
      "Real-time broker dashboard with integrated financial news and analytics",
      "Secure direct messaging system for client-broker communication",
      "Automated trade process from proposal to profit withdrawal",
    ],
  },
  {
    title: "Key Features",
    items: [
      "Dynamic risk-assessment system for personalized broker matching",
      "Real-time financial analytics and market data integration",
      "Secure communication channels between clients and brokers",
      "Cross-platform accessibility via web and mobile applications",
      "Automated profit withdrawal and trade settlement processes",
    ],
  },
];

const eThriftingProjectSections: ProjectSectionItem[] = [
  {
    title: "Project Overview",
    items: [
      "A full-stack e-commerce web application designed for buying and selling second-hand clothing",
      "Built from the ground up using multi-tier client/server architecture",
      "Focus on core e-commerce functionalities and secure, user-friendly experience",
    ],
  },
  {
    title: "Core Functionality",
    items: [
      "User registration and secure authentication system",
      "Product catalog with advanced search and filter capabilities",
      "Shopping cart management with persistent storage",
      "Secure checkout process for transaction completion",
      "Dynamic product browsing and management interface",
    ],
  },
  {
    title: "Technical Architecture",
    items: [
      "Multi-tier Client/Server architecture for scalability and maintainability",
      "Front-end: HTML, CSS, JavaScript for dynamic user interface",
      "Back-end: Visual Basic .NET for business logic and authentication",
      "Database: SQL with normalized schema design",
      "Complex SQL queries for user data, product listings, and transactions",
    ],
  },
  {
    title: "Key Features",
    items: [
      "User-centric design with intuitive UI/UX for easy navigation",
      "Robust product management system with comprehensive listing capabilities",
      "Secure user accounts with reliable authentication and session management",
      "Efficient transaction processing system for sales handling",
      "Advanced search and filtering for enhanced product discovery",
    ],
  },
  {
    title: "Development & Collaboration",
    items: [
      "Utilized Git for version control and team collaboration",
      "Followed Agile principles with weekly sprints and progress tracking",
      "Team-based development with coordinated feature implementation",
      "Regular code reviews and integration testing",
    ],
  },
];

// --- Main Export Array ---

export const allProjects: ProjectData[] = [
  {
    id: "traffic-sign-detection",
    title: "Graph-Based Traffic Sign Detection & Classification",
    date: "Mar 2025 - May 2025 | DSA Group Project",
    description:
      "An intelligent, graph-based educational tool to detect and classify South African traffic signs, implemented entirely in pure Java.",
    techStack: ["Java", "GNN", "k-NN", "Image Processing", "Algorithms"],
    sections: trafficSignProjectSections,
  },
  {
    id: "benchmark-trader",
    title: "Benchmark Trader",
    date: "Feb 2025 - Oct 2025 | Ranked #14 in UJ ACSSE Top 20 Projects",
    description:
      "A comprehensive full-stack trading platform (web + mobile) featuring smart matching algorithms and real-time analytics.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
      "Supabase",
      "Flutter",
      "Git",
      "UML",
    ],
    sections: benchmarkTraderProjectSections,
    externalLink: "https://adam.uj.ac.za/projectsday/teamweb/Team32/index.html",
  },
  {
    id: "e-thrifting",
    title: "E-Thrifting Website",
    date: "Jul 2024 - Oct 2024 | E-Commerce Group Project",
    description:
      "A full-stack e-commerce web application designed for buying and selling second-hand clothing.",
    techStack: [
      "Visual Basic .NET",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Agile",
    ],
    sections: eThriftingProjectSections,
  },
];
