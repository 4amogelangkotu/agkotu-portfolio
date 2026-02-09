// src/pages/ProjectBenchmarkTrader.tsx
import { useState } from 'react';
import Description from '../../components/Description';
import { allProjects } from '../../data/projectsData';
import ShinyText from '../../components/ShinyText';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import btLogo from '../../assets/bt/bt-logo.svg';

export default function ProjectBenchmarkTrader() {

    // 1. Find the specific project data
    const project = allProjects.find((p) => p.id === "benchmark-trader");

    // 2. Setup Gallery Logic
    const galleryImages = project?.galleryImages || [];
    const [currentIdx, setCurrentIdx] = useState(0);

    const nextImage = () => {
        if (galleryImages.length > 0) {
            setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
        }
    };

    const prevImage = () => {
        if (galleryImages.length > 0) {
            setCurrentIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    // Safety check
    if (!project) {
        return <div className="text-white text-center p-20">Project data not found.</div>;
    }

    return (
        <div className="min-h-screen text-white font-mono w-full p-10 bg-black">
            <div className="max-w-6xl mx-auto py-10">

                {/* --- HEADER ROW (Back Button + Logo) --- */}
                <div className="relative flex items-center justify-center mb-6">

                    {/* Back Button: Absolute Left, Vertically Centered */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                        <a
                            href="/"
                            className="text-white  text-sm md:text-base flex items-center gap-2"
                        >
                            <span>&larr;</span>
                            <span className="hidden md:inline">Back</span>
                            <span className="md:hidden">Back</span>
                        </a>
                    </div>

                    {/* Logo: Centered */}
                    <img
                        src={btLogo}
                        alt="Benchmark Trader Logo"
                        className="w-12 h-12 md:w-16 md:h-16 relative z-0"
                    />
                </div>

                {/* --- HEADER TITLE --- */}
                <div className="flex items-center justify-center gap-4 mb-2">
                    <ShinyText
                        text={project.title}
                        disabled={false}
                        speed={3}
                        className="text-3xl font-bold text-center md:text-4xl"
                    />
                </div>

                {/* --- DATE / SUBTITLE --- */}
                <p className="text-gray-400 text-center mb-12">
                    {project.date}
                </p>

                {/* --- DYNAMIC SECTIONS (Grid Layout) --- */}
                <div className="flex flex-col gap-6 mb-12">

                    {/* Row 1: First two sections side-by-side */}
                    {project.sections.length >= 2 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Description
                                title={project.sections[0].title}
                                items={project.sections[0].items}
                            />
                            <Description
                                title={project.sections[1].title}
                                items={project.sections[1].items}
                            />
                        </div>
                    )}

                    {/* Row 2: Third section full width */}
                    {project.sections.length >= 3 && (
                        <div className="w-full">
                            <Description
                                title={project.sections[2].title}
                                items={project.sections[2].items}
                            />
                        </div>
                    )}

                    {/* Row 3: Fourth section (left) & Tech Stack (right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className="lg:col-span-1">
                            {project.sections.length >= 4 && (
                                <Description
                                    title={project.sections[3].title}
                                    items={project.sections[3].items}
                                />
                            )}
                        </div>

                        {/* Tech Stack Column */}
                        <div className="lg:col-span-1">
                            <h2 className="text-lg text-blue-500 mb-4 font-semibold text-center">
                                Tech Stack
                            </h2>

                            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-[#0e1620] border border-blue-800 
                                    text-blue-100 px-3 py-1 rounded-md text-xs flex 
                                    items-center gap-2 transition-all duration-300 
                                    ease-in-out hover:border-blue-500 hover:shadow-lg 
                                    hover:shadow-blue-500/25 hover:scale-105 
                                    hover:bg-[#0e1620] cursor-pointer"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* External Link Button */}
                            {project.externalLink && (
                                <div className="mt-auto">
                                    <a
                                        href={project.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center
                                    bg-[#161921] border border-gray-700
                                    text-gray-100 px-4 py-2 rounded-md
                                    text-sm transition-all duration-300
                                    ease-in-out hover:border hover:border-blue-500
                                    hover:shadow-lg hover:shadow-blue-500/25
                                    hover:scale-105 hover:bg-blue-900"
                                    >
                                        View Marketing Website
                                        <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4 ml-2 group-hover:text-blue-400" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* --- GALLERY SECTION --- */}
                {galleryImages.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl text-green-300 mb-6 text-center">Project Gallery</h3>

                        <div className="relative w-full bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
                            <div className="relative aspect-video w-full flex items-center justify-center bg-black">
                                <img
                                    src={galleryImages[currentIdx].src}
                                    alt={galleryImages[currentIdx].caption}
                                    className="object-contain w-full h-full"
                                />
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-green-500/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-green-400 z-10"
                            >
                                &#10094;
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-green-500/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-green-400 z-10"
                            >
                                &#10095;
                            </button>

                            {/* Caption Bar */}
                            <div className="bg-black p-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-2">
                                <p className="text-gray-400 text-sm italic text-center md:text-left">
                                    {galleryImages[currentIdx].caption}
                                </p>
                                <span className="text-xs text-gray-600 font-bold whitespace-nowrap">
                                    {currentIdx + 1} / {galleryImages.length}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}