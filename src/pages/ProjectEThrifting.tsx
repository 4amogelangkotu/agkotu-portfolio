// src/pages/ProjectEThrifting.tsx
// import React from 'react';
import Description from '../components/Description';

// NOTE: Ideally, move the project data to a central file (e.g., src/data/projects.ts)
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

const eThriftingTech = ['Visual Basic .NET', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Git', 'Agile'];

export default function ProjectEThrifting() {
    return (
        <div className="min-h-screen text-white font-mono w-full p-10 bg-black">
            <div className="max-w-6xl mx-auto py-10">
                <h1 className="text-4xl text-green-400 mb-2 text-center font-bold">E-Thrifting Website</h1>
                <p className="text-gray-400 text-center mb-10">Jul 2024 - Oct 2024 | E-Commerce Group Project</p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Project Image Placeholder */}
                    <div className="lg:col-span-1 border border-gray-700 p-4 rounded-lg flex items-center justify-center h-full">
                        <div className="text-gray-500 italic">


                            [Image of E-commerce website interface]

                        </div>
                    </div>

                    {/* Project Descriptions */}
                    <div className="lg:col-span-2 grid gap-6">
                        {eThriftingProject.map((item, index) => (
                            <Description key={index} title={item.title} items={item.items} />
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl text-green-300 mb-4">Core Technologies</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {eThriftingTech.map((tech) => (
                            <span
                                key={tech}
                                className="bg-[#161921] border border-gray-700 text-blue-100 px-3 py-1 rounded-lg text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href="/" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300">
                        &larr; Back to Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
}