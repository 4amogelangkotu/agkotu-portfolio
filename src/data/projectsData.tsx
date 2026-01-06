// src/data/projectsData.ts
import React from 'react';

import tsdMain from '../assets/tsd/tsd-main.png';
import tsdGnn1 from '../assets/tsd/tsd-gnn-1.png';
import tsdGnn2 from '../assets/tsd/tsd-gnn-2.png';
import tsdGnn3 from '../assets/tsd/tsd-gnn-3.png';
import tsdGnn4 from '../assets/tsd/tsd-gnn-4.png';
import tsdKnn1 from '../assets/tsd/tsd-knn-1.png';
import tsdKnn2 from '../assets/tsd/tsd-knn-2.png';
import tsdKnn3 from '../assets/tsd/tsd-knn-3.png';


// Define the structure for a section item
interface ProjectSectionItem {
  title: string;
  items: string[];
}

export interface GalleryImage {
  src: string;
  caption: string;
}

// Define the structure for a single project
interface ProjectData {
  id: string;
  title: string;
  date: string;
  description: React.ReactNode;
  techStack: string[];
  sections: ProjectSectionItem[];
  galleryImages?: GalleryImage[];
  externalLink?: string;
  githubLink?: string;
}

// --- Individual Project Data Definitions ---

const trafficSignProjectSections: ProjectSectionItem[] = [
  {
    title: "Project Goal",
    items: [
      "Built an intelligent educational tool that detects and explains South African traffic signs in real-time.",
      "Designed to improve road safety awareness through interactive visual learning.",
      "Created entirely from scratch in Java without using pre-made AI libraries (like TensorFlow or OpenCV), demonstrating deep understanding of core algorithms.",
    ],
  },
  {
    title: "Application Modules",
    items: [
      "Main Dashboard (The Hub): The entry point where users import images. It runs a quick 'Edge Detection' scan to verify a sign is present, drawing a bounding box around it as a sanity check before deep analysis.",
      "GNN Analysis (The Classifier): Acts as the system's brain. It builds a dynamic graph connecting the input image to known signs, using a weighted voting system to predict the sign type and recommend driver actions (e.g., 'Stop').",
      "KNN Analysis (Visual Search): Acts as the system's eyes. It performs a content-based search to find the top 4 visual matches in the database, explaining why they match by breaking down the score into Color vs. Shape similarity.",
    ],
  },
  {
    title: "How It Works (The Algorithms)",
    items: [
      "Custom-built a Graph Neural Network (GNN) to classify signs based on their relationships to known examples.",
      "Implemented a 'Visual Search' engine (k-NN) that finds similar-looking signs by comparing their math-based features.",
      "Uses custom similarity formulas to accurately match signs even if they are slightly different in size or lighting.",
      "Smart logic allows the system to 'learn' from context, improving accuracy over time.",
    ],
  },
  {
    title: "Seeing the Signs (Image Processing)",
    items: [
      "Developed a custom vision pipeline that 'sees' images by detecting edges and filtering specific colors (Red, Blue, Yellow).",
      "Extracts key features like Color, Shape (Triangle vs Circle), and Complexity to understand what a sign is.",
      "Successfully categorizes signs into Regulatory, Warning, and Informational groups using a robust fallback system.",
      "Designed to be easily expandable—new signs can be added to the database instantly without retraining the whole system.",
    ],
  },
  {
    title: "Tech Stack & Results",
    items: [
      "Language: Pure Java (JDK 17+).",
      "Visualization: JavaFX (for the interactive graph display).",
      "Result: A fast, functional tool that proves complex visual recognition can be built with fundamental data structures.",
    ],
  },
];

const benchmarkTraderProjectSections: ProjectSectionItem[] = [
  {
    title: "Project Overview",
    items: [
      "Built a comprehensive online trading simulation that takes users from absolute beginners to confident traders. The platform offers a realistic, risk-free environment where users can practice buying and selling assets without the fear of losing real money.",
      "Designed a complete 'dual-role' ecosystem that connects standard Users with professional Brokers. This simulates real-world market dynamics, allowing users to propose trades and brokers to review, approve, or reject them based on current market conditions.",
      "Recognized for technical excellence by ranking #14 out of the Top 20 final-year projects at the University of Johannesburg. This achievement highlights the system's stability, innovative features, and professional-grade user experience.",
    ],
  },
  {
    title: "How It Was Built",
    items: [
      "Started with extensive planning and blueprints (diagrams) to map out exactly how users would interact with the app. This ensured every feature—from logging in to withdrawing profits—felt intuitive and logical before a single line of code was written.",
      "Developed a modern, responsive website using popular technologies like React and Tailwind CSS. This ensures the platform looks professional and works smoothly on any device, whether it's a large desktop monitor or a small laptop screen.",
      "Created a fully functional companion mobile app using Flutter. This allows users to track their portfolios, check market prices, and chat with brokers while on the go, ensuring they never miss a trading opportunity.",
      "Connected everything to a powerful, secure database (backend) that acts as the 'brain' of the operation. It instantly updates user balances, trade history, and messages across both the website and the mobile app simultaneously.",
    ],
  },
  {
    title: "Smart Features",
    items: [
      "Designed a unique 'Smart Match' algorithm that acts like a matchmaking service for finance. It asks users a series of simple questions to understand their risk tolerance and financial goals, then automatically pairs them with the broker best suited to their personality.",
      "Automated the entire lifecycle of a trade to reduce manual work. When a user makes a profit, the system automatically handles the calculation and updates their 'wallet' balance, simulating a real-world withdrawal process without any friction.",
      "Integrated a secure, WhatsApp-style messaging tool directly into the dashboard. This allows clients and brokers to discuss strategies, negotiate deals, and build trust without ever having to leave the platform.",
    ],
  },
  {
    title: "Key Highlights",
    items: [
      "Features a live 'Market Dashboard' that displays real-time financial news and interactive price charts. This helps users learn how to analyze market trends and make informed decisions rather than just guessing.",
      "Ensures perfect synchronization between devices. If a user starts a trade on their computer, they can immediately see it and continue managing it on their phone without any delay or data loss.",
      "Prioritized a clean, user-friendly design (UI/UX) that hides the complex math and logic behind simple buttons. This makes the intimidating world of stock trading feel accessible and easy to navigate for everyone.",
    ],
  },
];

const eThriftingProjectSections: ProjectSectionItem[] = [
  {
    title: "Project Scope & Architecture",
    items: [
      "Developed a robust Multi-Tier E-Commerce Platform facilitating the buying and selling of second-hand clothing.",
      "Architected a strict separation of concerns using a Client/Server model, ensuring scalability, security, and maintainability.",
      "Delivered a seamless user experience by integrating a responsive frontend with a logic-heavy backend.",
    ],
  },
  {
    title: "Core Functionalities",
    items: [
      "Implemented a secure User Authentication System handling registration, login, and persistent session management.",
      "Built a dynamic Product Catalog featuring category filtering, keyword search, and real-time availability updates.",
      "Engineered a persistent Shopping Cart and Checkout System capable of processing complex transaction flows.",
      "Created a vendor dashboard allowing users to manage their own product listings and view sales history.",
    ],
  },
  {
    title: "Backend & Data Management",
    items: [
      "Backend logic developed in Visual Basic .NET, handling data validation, business rules, and server-side processing.",
      "Designed a highly normalized SQL Database Schema to ensure data integrity across users, products, and orders.",
      "Optimized database performance with complex SQL Queries for efficient data retrieval and reporting.",
    ],
  },
  {
    title: "Development Methodology",
    items: [
      "Executed the project using Agile Methodologies, utilizing sprints for iterative feature delivery and progress tracking.",
      "Managed version control and team collaboration using Git, ensuring code stability across multiple contributors.",
      "Conducted rigorous Integration Testing to ensure seamless communication between the frontend, backend, and database layers.",
    ],
  },
];

// --- Main Export Array ---

export const allProjects: ProjectData[] = [
  {
    id: "traffic-sign-detector",
    title: "Traffic Sign Detection & Classification System",
    date: "Mar 2025 - May 2025 | DSA Group Project",
    description: (
      <p>
        This project focused on the development of an intelligent, graph-based educational tool designed to detect and classify South African traffic signs, aiming to <span className="text-green-400">enhance road safety awareness</span>. The core innovation lies in the design of a custom Graph Neural Network (GNN) and a k-Nearest Neighbors (k-NN) visual search engine, built entirely in pure Java. The system utilizes sophisticated, custom-written image processing algorithms—including Sobel edge detection and color histogram analysis—to achieve robust classification without relying on external machine learning libraries like TensorFlow or OpenCV.
      </p>
    ),
    techStack: ["Java", "JavaFX", "Computer Vision", "Graph Theory", "Algorithms"],
    sections: trafficSignProjectSections,
    githubLink: "https://github.com/4amogelangkotu/traffic-sign-detector",
    galleryImages: [
      {
        src: tsdMain,
        caption: "Main Dashboard: The central hub displaying the imported traffic scene alongside the processed version, featuring edge detection and bounding box analysis to verify sign presence."
      },
      {
        src: tsdGnn1,
        caption: "GNN Dashboard: A comprehensive view of the Graph Neural Network interface, displaying the input image, the generated graph structure, and real-time classification metrics."
      },
      {
        src: tsdGnn2,
        caption: "Graph Visualization: A detailed close-up of the dynamic graph structure where the input node connects to known sign classes, illustrating the neural network's decision path."
      },
      {
        src: tsdGnn3,
        caption: "Detection Results: The analytical output panel showing extracted feature metrics—such as color, shape, and corner count—along with the final class prediction."
      },
      {
        src: tsdGnn4,
        caption: "Prediction & Action: The system's final output, translating the classification (e.g., 'Warning') into specific, actionable instructions for the driver."
      },
      {
        src: tsdKnn1,
        caption: "k-NN Dashboard: The complete k-Nearest Neighbors interface, facilitating visual search by comparing the input sign against the known database."
      },
      {
        src: tsdKnn2,
        caption: "k-NN Graph: A visual representation of the feature space, plotting the input sign relative to database entries to demonstrate algorithmic distance and similarity."
      },
      {
        src: tsdKnn3,
        caption: "Similar Sign Results: The visual search results displaying the top matches found in the database, with a detailed breakdown of shape and color similarity scores."
      },
    ]
  },
  {
    id: "benchmark-trader",
    title: "Benchmark Trader",
    date: "Feb 2025 - Oct 2025 | Ranked #14 in UJ ACSSE Top 20 Projects",
    description: (
      <p>
        Benchmark Trader is a comprehensive full-stack demo trading platform, designed and developed from concept to deployment. The platform utilizes a robust system architecture, including a backend built with Node.js and Prisma and a responsive frontend using React, TypeScript, and Tailwind CSS. A key feature is the smart matching algorithm that pairs users with brokers based on a dynamic <span className="text-green-400">risk-assessment questionnaire</span>.The system handles the complete trade lifecycle and features <span className="text-green-400">real-time financial analytics, secure direct messaging, and cross-platform accessibility</span> via a companion Flutter mobile application.
      </p >
    ),
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
      "Supabase",
      "Flutter",
      "Git",
      // "UML",
    ],
    sections: benchmarkTraderProjectSections,
    externalLink: "https://adam.uj.ac.za/projectsday/teamweb/Team32/index.html",
  },
  {
    id: "e-thrifting",
    title: "E-Thrifting Website",
    date: "Jul 2024 - Oct 2024 | E-Commerce Group Project",
    description: (
      <p>
        E-Thrifting is a full-stack e-commerce web application dedicated to <span className="text-green-400">buying and selling second-hand clothing</span>, built upon a resilient multi-tier Client/Server architecture. The core business logic and secure user authentication were implemented using Visual Basic .NET, backed by a SQL database with a meticulously normalized schema for managing user profiles, product listings, and transactions. The application features a dynamic <span className="text-green-400">product catalog</span> with advanced search capabilities, secure <span className="text-green-400">shopping cart</span> management, and a robust transaction processing system, developed using HTML, CSS, and JavaScript while adhering to Agile development principles.
      </p>
    ),
    techStack: [
      "Visual Basic .NET",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
    ],
    sections: eThriftingProjectSections,
  },
];
