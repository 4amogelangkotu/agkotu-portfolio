import { Link } from 'react-router-dom';
// import Description from "../Description"; // Keeping this import in case you use it elsewhere
import ShinyText from "../ShinyText";
import TerminalWindowBar from "../TerminalWindowBar";
import { allProjects } from '../../data/projectsData';
import { faArrowRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { skillIcons, FontAwesomeIcon, faCode } from '../../components/skillIcons';

export default function Projects() {
    return (
        <section className="py-12 px-6 bg-linear-to-b 
        from-[#161921] to-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <ShinyText
                        text="Projects"
                        disabled={false}
                        speed={3}
                        className="text-3xl font-bold"
                    />
                </div>

                {allProjects.map((project) => (
                    // Apply terminal-style card layout
                    <div
                        key={project.id}
                        className="mb-12 bg-[#0d0e0e] 
                        p-8 rounded-lg border 
                        border-gray-700 last:mb-0"
                    >
                        <TerminalWindowBar />
                        <div className="mb-4 mt-4">
                            <span className="text-green-400">$ project --id={project.id}</span>
                        </div>

                        <h3 className="text-3xl text-white font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.date}</p>

                        <div className="mb-4">
                            <span className="text-green-400">$ overview</span>
                        </div>

                        {/* Project Description/Overview Paragraph */}
                        <div className="mb-6 text-gray-300">
                            {/* The simple paragraph replacing the Description component */}
                            <p>{project.description}</p>
                        </div>

                        <div className="mb-4">
                            <span className="text-green-400">$ tech-stack</span>
                        </div>

                        {/* Tech Stack Display with Icons */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-[#0e2016] border border-green-800 
                                    text-green-100 px-3 py-1 rounded-md text-sm flex 
                                    items-center gap-2 transition-all duration-300 
                                    ease-in-out hover:border-green-400 hover:shadow-lg 
                                    hover:shadow-green-500/25 hover:scale-105 
                                    hover:bg-[#0f2a1d] cursor-pointer"
                                >
                                    {/* <FontAwesomeIcon
                                        icon={skillIcons[tech] || faCode}
                                        className="w-4 h-4"
                                    /> */}
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            {/* Link to the dedicated project page */}
                            <Link
                                to={`/project/${project.id}`}
                                className="inline-flex items-center 
                                bg-green-900 text-green-100
                                px-4 py-2 rounded-md text-sm
                                transition-all duration-300
                                ease-in-out hover:border
                                hover:border-green-400
                                hover:shadow-lg hover:shadow-green-500/25
                                hover:scale-105 hover:bg-green-800
                                font-bold tracking-wider mr-4"                            >
                                View Full Details
                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
                            </Link>

                            {/* External Link (if present) */}
                            {project.externalLink && (
                                <a
                                    href={project.externalLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-[#161921] border border-gray-700 text-gray-100 px-4 py-2 rounded-md text-sm transition-all duration-300 ease-in-out hover:border hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 hover:bg-green-900"                                >
                                    View External Link
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4 ml-2" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}