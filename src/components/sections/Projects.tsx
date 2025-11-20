import { Link } from 'react-router-dom';
import Description from "../Description";
import ShinyText from "../ShinyText";
import { allProjects } from '../../data/projeectsData';

export default function Projects() {
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

                {allProjects.map((project) => (
                    <div key={project.id} className="mb-12 border-b border-gray-800 last:border-b-0 pb-10">
                        <div className="p-6">
                            <div>
                                <h3 className="text-xl text-green-400 mb-2 text-center font-semibold">{project.title}</h3>
                                <p className="text-gray-300 text-center mb-6">{project.date}</p>

                                {/* Display a brief description or the first few sections for the summary view */}
                                <div className="grid gap-6 w-4xl mx-auto md:grid-cols-1">
                                    <Description
                                        title={project.sections[0].title}
                                        items={project.sections[0].items}
                                    />
                                </div>

                                <div className="mt-6 text-center">
                                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-[#161921] border border-gray-700 text-blue-100 px-3 py-1 rounded-lg text-sm transition-all duration-300 ease-in-out hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 cursor-pointer"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link to the dedicated project page */}
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="inline-block bg-[#161921] border border-gray-700 text-blue-100 px-4 py-2 rounded-lg text-sm transition-all duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 font-bold tracking-wider mr-4"
                                    >
                                        View Full Details
                                    </Link>

                                    {/* External Link (if present) */}
                                    {project.externalLink && (
                                        <a
                                            href={project.externalLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-[#161921] border border-gray-700 text-blue-100 px-4 py-2 rounded-lg text-sm transition-all duration-300 ease-in-out hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105"
                                        >
                                            View External Link
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}