// components/Projects.tsx

import Description from "../Description";
import ShinyText from "../ShinyText";
import GlareHover from "../GlareHover";

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

    const eThriftingTech = ['Visual Basic .NET', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Git'];
    const benchmarkTraderTech = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma', 'Supabase', 'Flutter', 'Git'];

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

                {/* E-Thrifting Project Card with Glare Effect */}
                <div className="mb-12">
                    <GlareHover
                        width="100%"
                        height="auto"
                        background="#1a1f2e"
                        borderRadius="12px"
                        borderColor="#2d3748"
                        glareColor="#ffffff"
                        glareOpacity={0.15}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={600}
                        playOnce={false}
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
                    </GlareHover>
                </div>

                {/* Benchmark Trader Project Card with Glare Effect */}
                <div>
                    <GlareHover
                        width="100%"
                        height="auto"
                        background="#1a1f2e"
                        borderRadius="12px"
                        borderColor="#2d3748"
                        glareColor="#ffffff"
                        glareOpacity={0.15}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={600}
                        playOnce={false}
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
                    </GlareHover>
                </div>
            </div>
        </section>
    );
}