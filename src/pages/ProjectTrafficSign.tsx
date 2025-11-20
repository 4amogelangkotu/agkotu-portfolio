// src/pages/ProjectTrafficSign.tsx
// import React from 'react';
// Adjust the path to Description component based on your project structure
import Description from '../components/Description';

// NOTE: Ideally, move the project data to a central file (e.g., src/data/projects.ts)
// For now, it's defined here for completeness (assuming you move it from Projects.tsx)
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

const trafficSignTech = ['Java', 'GNN', 'k-NN', 'Image Processing', 'Algorithms'];

export default function ProjectTrafficSign() {
    return (
        <div className="min-h-screen text-white font-mono w-full p-10 bg-black">
            <div className="max-w-6xl mx-auto py-10">
                <h1 className="text-4xl text-green-400 mb-2 text-center font-bold">Graph-Based Traffic Sign Detection & Classification</h1>
                <p className="text-gray-400 text-center mb-10">Mar 2025 - May 2025 | DSA Group Project</p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Project Image Placeholder */}
                    <div className="lg:col-span-1 border border-gray-700 p-4 rounded-lg flex items-center justify-center h-full">
                        <div className="text-gray-500 italic">


                            [Image of Graph-based traffic sign detection system]

                        </div>
                    </div>

                    {/* Project Descriptions */}
                    <div className="lg:col-span-2 grid gap-6">
                        {trafficSignProject.map((item, index) => (
                            <Description key={index} title={item.title} items={item.items} />
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl text-green-300 mb-4">Core Technologies</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {trafficSignTech.map((tech) => (
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
                    {/* Using a regular link here, as React Router <Link> should be wrapped by the router context */}
                    <a href="/" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300">
                        &larr; Back to Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
}