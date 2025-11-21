// components/Header.tsx (Updated Imports)

import TerminalWindowBar from "../TerminalWindowBar";
// Import from the new utility file instead of directly here
import { skillIcons, FontAwesomeIcon, faCode } from "../skillIcons";

interface HeaderProps {
    name: string;
    title: string;
    skills: string[];
}

export default function Header({ name, title, skills }: HeaderProps) {
    return (
        <section className="py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-[#0d0e0e] p-8 rounded-lg border border-gray-700">
                    <TerminalWindowBar />
                    <div className="mb-4">
                        <span className="text-green-400">$ aboutme</span>
                    </div>
                    <h1 className="text-5xl text-white font-bold mb-2">{name}</h1>
                    <p className="text-gray-400 mb-4">{title}</p>
                    <div className="mb-4">
                        <span className="text-green-400">$ skills</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="bg-[#0e2016] border border-green-800 text-green-100 px-3 py-2 rounded-md text-sm flex items-center gap-2 transition-all duration-300 ease-in-out hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 hover:bg-[#0f2a1d] cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    icon={skillIcons[skill] || faCode}
                                    className="w-4 h-4"
                                />
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}