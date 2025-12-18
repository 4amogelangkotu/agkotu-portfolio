// src/pages/ProjectBenchmarkTrader.tsx
// import React from 'react';
import Description from '../../components/Description';

// NOTE: Ideally, move the project data to a central file (e.g., src/data/projects.ts)
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

const benchmarkTraderTech = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma', 'Supabase', 'Flutter', 'Git', 'UML'];

export default function ProjectBenchmarkTrader() {
    return (
        <div className="min-h-screen text-white font-mono w-full p-10 bg-black">
            <div className="max-w-6xl mx-auto py-10">
                <h1 className="text-4xl text-green-400 mb-2 text-center font-bold">Benchmark Trader</h1>
                <p className="text-gray-400 text-center mb-10">Feb 2025 - Oct 2025 | Ranked #14 in UJ ACSSE Top 20 Projects</p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Project Image Placeholder */}
                    <div className="lg:col-span-1 border border-gray-700 p-4 rounded-lg flex items-center justify-center h-full">
                        <div className="text-gray-500 italic">


                            [Image of Trading platform dashboard interface]

                        </div>
                    </div>

                    {/* Project Descriptions */}
                    <div className="lg:col-span-2 grid gap-6">
                        {benchmarkTraderProject.map((item, index) => (
                            <Description key={index} title={item.title} items={item.items} />
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl text-green-300 mb-4">Core Technologies</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {benchmarkTraderTech.map((tech) => (
                            <span
                                key={tech}
                                className="bg-[#161921] border border-gray-700 text-blue-100 px-3 py-1 rounded-lg text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="mt-6">
                        <a href="https://adam.uj.ac.za/projectsday/teamweb/Team32/index.html"
                            className="text-green-400 hover:text-green-300 underline transition-colors duration-300 font-bold">
                            View Marketing Website
                        </a>
                    </p>
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