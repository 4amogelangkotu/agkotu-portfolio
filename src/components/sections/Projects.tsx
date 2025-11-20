// components/Projects.tsx

import Description from "../Description";
import ShinyText from "../ShinyText";

export default function Projects() {
    const eThriftingProject = [
        {
            title: "Project Overview",
            items: [
                "A full-stack e-commerce web application designed for buying and selling second-hand clothing",
                "Built from the ground up using multi-tier client/server architecture",
                "Focus on core e-commerce functionalities and secure, user-friendly experience"
            ]
        },
        {
            title: "Core Functionality",
            items: [
                "User registration and secure authentication system",
                "Product catalog with advanced search and filter capabilities",
                "Shopping cart management with persistent storage",
                "Secure checkout process for transaction completion",
                "Dynamic product browsing and management interface"
            ]
        },
        {
            title: "Technical Architecture",
            items: [
                "Multi-tier Client/Server architecture for scalability and maintainability",
                "Front-end: HTML, CSS, JavaScript for dynamic user interface",
                "Back-end: Visual Basic .NET for business logic and authentication",
                "Database: SQL with normalized schema design",
                "Complex SQL queries for user data, product listings, and transactions"
            ]
        },
        {
            title: "Key Features",
            items: [
                "User-centric design with intuitive UI/UX for easy navigation",
                "Robust product management system with comprehensive listing capabilities",
                "Secure user accounts with reliable authentication and session management",
                "Efficient transaction processing system for sales handling",
                "Advanced search and filtering for enhanced product discovery"
            ]
        },
        {
            title: "Development & Collaboration",
            items: [
                "Utilized Git for version control and team collaboration",
                "Followed Agile principles with weekly sprints and progress tracking",
                "Team-based development with coordinated feature implementation",
                "Regular code reviews and integration testing"
            ]
        }
    ];

    const benchmarkTraderProject = [
        {
            title: "Project Overview",
            items: [
                "Designed & developed a comprehensive full-stack trading platform from concept to deployment",
                "Guided demo trading platform facilitating user-broker interactions and trade lifecycle management",
                "Ranked #14 in UJ ACSSE Top 20 Projects, demonstrating technical excellence and innovation"
            ]
        },
        {
            title: "System Design & Architecture",
            items: [
                "Created UML use case and sequence diagrams to model complete trade lifecycle and user-broker interactions",
                "Engineered normalized database schema for user profiles, risk assessments, and trade histories",
                "Built backend with Node.js & Prisma, and responsive frontend with React, TypeScript & Tailwind CSS",
                "Extended platform accessibility with companion Flutter mobile app for on-the-go access"
            ]
        },
        {
            title: "Core Functionality",
            items: [
                "Smart matching algorithm pairing users with brokers based on dynamic risk-assessment questionnaire",
                "Real-time broker dashboard with integrated financial news and analytics",
                "Secure direct messaging system for client-broker communication",
                "Automated trade process from proposal to profit withdrawal"
            ]
        },
        {
            title: "Technical Implementation",
            items: [
                "Transformed wireframes into functional UI/UX with responsive design",
                "Implemented comprehensive business logic for trade automation",
                "Developed mobile app providing portfolio management, messaging, and market updates",
                "Deployed full-stack application with Supabase integration"
            ]
        },
        {
            title: "Key Features",
            items: [
                "Dynamic risk-assessment system for personalized broker matching",
                "Real-time financial analytics and market data integration",
                "Secure communication channels between clients and brokers",
                "Cross-platform accessibility via web and mobile applications",
                "Automated profit withdrawal and trade settlement processes"
            ]
        }
    ];

    // NEW PROJECT ADDED HERE
    const trafficSignProject = [
        {
            title: "Project Overview & Goal",
            items: [
                "Developed an intelligent, graph-based educational tool to detect and classify South African traffic signs",
                "Aimed to enhance road safety awareness through interactive visual learning methods",
                "Demonstrated advanced algorithmic design and core language implementation without external ML frameworks"
            ]
        },
        {
            title: "Algorithmic Implementation",
            items: [
                "Designed and implemented a custom **Graph Neural Network (GNN)** classification model **entirely in pure Java**",
                "Engineered a **k-Nearest Neighbors (k-NN) graph structure** for relating visually similar signs",
                "Utilized **Euclidean Distance** and **Cosine Similarity** metrics for node similarity calculations",
                "Implemented feature normalization and feature propagation logic for context-enriched classification"
            ]
        },
        {
            title: "Core Logic & Image Processing",
            items: [
                "Engineered the system's core logic using image processing techniques to detect signs in images",
                "Feature extraction based on **Color** (red, blue, yellow), **Shape** (triangle, circle, octagon), **Edge Density**, and **Aspect Ratio**",
                "Achieved robust classification into South African categories (Regulatory, Warning, Informational)",
                "Designed the system to be scalable and expandable for new signs without full re-training"
            ]
        },
        {
            title: "Technical Stack & Outcome",
            items: [
                "Primary implementation language: **Java**",
                "Focus on core data structures and custom algorithm design",
                "Outcome: A functional tool demonstrating the power of graph structures for visual pattern recognition"
            ]
        }
    ];
    // END NEW PROJECT

    const eThriftingTech = ['Visual Basic .NET', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Git', 'Agile'];
    const benchmarkTraderTech = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma', 'Supabase', 'Flutter', 'Git', 'UML'];
    const trafficSignTech = ['Java (Core)', 'GNN (Custom)', 'k-NN', 'Image Processing', 'Algorithms'];

    return (
        <section className="py-12 px-6 bg-linear-to-b from-[#161921] to-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <ShinyText
                        text="Projects"
                        disabled={false}
                        speed={3}
                        className="text-3xl font-bold"
                    />
                </div>

                {/* --- Traffic Sign Detection Project Card --- */}
                <div className="mb-12">
                    <div className="p-6">
                        <div>
                            <h3 className="text-xl text-green-400 mb-4 text-center">Graph-Based Traffic Sign Detection & Classification</h3>
                            <p className="text-gray-300 text-center mb-6">Academic Project | Java & Algorithms Focus</p>
                            <div className="grid gap-6 w-1.500 mx-50 md:grid-cols-1">
                                {trafficSignProject.map((item) => (
                                    <Description key={item.title} title={item.title} items={item.items} />
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {trafficSignTech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-[#161921] border border-gray-700 text-blue-100 px-3 py-1 rounded-lg text-sm transition-all duration-300 ease-in-out hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 cursor-pointer"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Benchmark Trader Project Card with Glare Effect --- */}
                <div className="mb-12">
                    <div
                        className="p-6"
                    >
                        <div>
                            <h3 className="text-xl text-green-400 mb-4 text-center">Benchmark Trader</h3>
                            <p className="text-gray-300 text-center mb-6">Feb 2025 - Oct 2025 | Ranked #14 in UJ ACSSE Top 20 Projects</p>
                            <div className="grid gap-6 w-1.500 mx-50 md:grid-cols-1">
                                {benchmarkTraderProject.map((item) => (
                                    <Description key={item.title} title={item.title} items={item.items} />
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {benchmarkTraderTech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-[#161921] border border-gray-700 text-blue-100 px-3 py-1 rounded-lg text-sm transition-all duration-300 ease-in-out hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 cursor-pointer"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-4">
                                    <a href="https://adam.uj.ac.za/projectsday/teamweb/Team32/index.html"
                                        className="text-green-400 hover:text-green-300 underline transition-colors duration-300">
                                        View Marketing Website
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- E-Thrifting Project Card with Glare Effect --- */}
                <div className="mb-12">
                    <div
                        className="p-6"
                    >
                        <div>
                            <h3 className="text-xl text-green-400 mb-4 text-center">E-Thrifting Website</h3>
                            <p className="text-gray-300 text-center mb-6">Jul 2024 - Oct 2024 | Academic Group Project</p>
                            <div className="grid gap-6 w-1.500 mx-50 md:grid-cols-1">
                                {eThriftingProject.map((item) => (
                                    <Description key={item.title} title={item.title} items={item.items} />
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {eThriftingTech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-[#161921] border border-gray-700 text-blue-100 px-3 py-1 rounded-lg text-sm transition-all duration-300 ease-in-out hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 cursor-pointer"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}