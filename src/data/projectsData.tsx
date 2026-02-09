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
    title: "Situation",
    items: [
      "Computer vision is often treated as a 'black box' using heavy libraries like TensorFlow. I wanted to build an educational tool for South African road safety that not only detects signs but explains the logic behind the detection. The challenge was to build this intelligent system entirely from scratch in Java, without relying on pre-made AI or vision libraries like OpenCV.",
    ],
  },
  {
    title: "Task",
    items: [
      "My goal was to develop a real-time application that could accept an image, isolate the traffic sign, and accurately classify it into Regulatory, Warning, or Informational categories. The system needed to be robust enough to handle variations in lighting and size, while providing a 'Visual Search' feature to show users similar signs for learning purposes.",
    ],
  },
  {
    title: "Action",
    items: [
      "Vision Processing: Instead of standard filters, I wrote raw pixel manipulation algorithms to detect edges and filter specific color channels (Red, Blue, Yellow) to draw bounding boxes around potential signs.",
      "The 'Brain' (GNN): I implemented a custom Graph Neural Network that builds a dynamic graph connecting input images to known signs, using a weighted voting system to predict the sign type.",
      "The 'Eyes' (k-NN): I built a K-Nearest Neighbors algorithm for content-based retrieval. It calculates mathematical distance based on feature vectors (Color, Shape, Complexity) to find the top 4 visual matches in the database.",
      "Visualization: I used JavaFX to render the interactive graph, allowing users to see the 'decision path' the AI took."
    ],
  },
  {
    title: "Result",
    items: [
      "The final application successfully detects and categorizes South African traffic signs in real-time. It proves that complex visual recognition can be achieved with fundamental data structures and optimized math, rather than heavy dependencies. The system is modular, allowing new signs to be added to the database instantly without the need for expensive model retraining.",
    ],
  },
];

const benchmarkTraderProjectSections: ProjectSectionItem[] = [
  {
    title: "Situation",
    items: [
      "Financial markets are intimidating for beginners, and practicing with real money is high-risk. I identified a need for a realistic, risk-free simulation environment that could bridge the gap between novice traders and professional brokers. I wanted to build a comprehensive 'dual - role' ecosystem that simulated real-world market dynamics, including trade proposals, approvals, and portfolio management.",
    ],
  },
  {
    title: "Task",
    items: [
      "My objective was to build a cross-platform solution consisting of a responsive web dashboard and a companion mobile app. The critical technical challenge was ensuring perfect synchronization between the two platforms, allowing a user to start a trade on the web and manage it on their phone without data loss or latency, while also facilitating real-time communication between Users and Brokers.",
    ],
  },
  {
    title: "Action",
    items: [
      "Frontend Ecosystem: I developed the web platform using React and Tailwind CSS for a responsive, professional interface, and built a companion mobile app using Flutter for on-the-go portfolio tracking.",
      "Algorithmic Logic: I engineered a 'Smart Match' algorithm that analyzes user inputs (risk tolerance, financial goals) to automatically pair them with the most suitable broker.",
      "Real-Time Architecture: I implemented a unified backend that acts as the 'brain', instantly synchronizing balances, trade history, and 'WhatsApp - style' messaging across both the web and mobile instances simultaneously.",
      "Automation: I automated the trade lifecycle, writing logic to handle profit calculations and wallet updates instantly upon trade completion, removing manual friction.",
    ],
  },
  {
    title: "Result",
    items: [
      "The project was recognized for its technical excellence and stability, ranking #14 out of the Top 20 final-year projects at the University of Johannesburg. It successfully delivers a professional-grade user experience where users can practice trading strategies in a risk-free environment, supported by robust, real-time cross-platform synchronization."
    ],
  },
];

const aThriftersProjectSections: ProjectSectionItem[] = [
  {
    title: "Situation",
    items: [
      "The 'fast fashion' industry creates immense waste, and existing second-hand markets often lack the robust features of modern e-commerce platforms. I saw an opportunity to build a circular economy marketplace that could handle complex transactions while simulating a real-world enterprise environment.",
    ],
  },
  {
    title: "Task",
    items: [
      "My goal was to architect a scalable, secure e-commerce solution that strictly separated the frontend from the business logic. I needed to move beyond simple CRUD operations to implement complex transactional workflows, including role-based access control (RBAC), inventory management, and secure checkout processes.",
    ],
  },
  {
    title: "Action",
    items: [
      "Architecture: I decoupled the application layers by building a WCF Service layer in C# to handle all data access. This ensures the frontend (ASP.NET) never interacts directly with the database, significantly improving security.",
      "Data Integrity: I utilized LINQ to SQL for type-safe database interactions and designed a normalized Microsoft SQL Server schema to maintain integrity across users, products, and invoices.",
      "Business Logic: I implemented a transactional checkout engine that automatically calculates VAT, validates stock levels in real-time, and generates invoices instantly.",
      "Security: I built a custom Role-Based Authentication system to provide distinct, secure dashboards for 'Customers' (shopping, tracking) versus 'Managers' (inventory, sales reports)."
    ],
  },
  {
    title: "Result",
    items: [
      "The final application is a robust, full-stack e-commerce platform that demonstrates enterprise-level development practices. It successfully handles the entire lifecycle of a purchase—from product discovery to invoicing—within a secure, scalable architecture that mimics professional software environments.",
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
      "UML",
    ],
    sections: benchmarkTraderProjectSections,
    externalLink: "https://adam.uj.ac.za/projectsday/teamweb/Team32/index.html",
  },
  {
    id: "a-thrifters",
    title: "A-Thrifters",
    date: "Dec 2025 -Jan 2026",
    description: (
      <p>
        A-Thrifters is a robust, full-stack e-commerce platform built to simulate a high-traffic retail environment. The application supports two distinct user ecosystems: a Customer portal featuring a <span className="text-green-400">dynamic product catalog</span> with advanced filtering and persistent shopping carts using Session State, and a secure Manager Dashboard for real-time <span className="text-green-400">inventory control</span> and order management. Architected using a <span className="text-green-400">Service-Oriented Architecture (SOA)</span>, the system strictly separates the ASP.NET frontend from business logic using WCF Services. The backend powers a complex <span className="text-green-400">transactional checkout engine</span> that handles VAT calculations, invoice generation, and atomic stock updates via <span className="text-green-400">LINQ to SQL</span>.
      </p>
    ),
    techStack: [
      "C#",
      "ASP.NET Web Forms",
      "WCF Services",
      "SQL Server",
      "LINQ",
      "Bootstrap",
    ],
    sections: aThriftersProjectSections,
    githubLink: "https://github.com/4amogelangkotu/A-Thrifters",
  },
];