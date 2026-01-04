// src/pages/projects/TrafficSignDetector.tsx
import { useState } from 'react';
import Description from '../../components/Description';
import { allProjects } from '../../data/projectsData';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShinyText from '../../components/ShinyText';
import tsdLogo from '../../assets/tsd/tsd-logo.svg';

export default function ProjectTrafficSign() {

    const project = allProjects.find((p) => p.id === "traffic-sign-detector");

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

    // Safety check in case the ID doesn't exist (optional but good practice)
    if (!project) {
        return <div className="text-white text-center p-20">Project data not found.</div>;
    }

    return (
        <div className="min-h-screen text-white font-mono w-full p-10 bg-black">
            <div className="max-w-6xl mx-auto py-10">
                {/* Added 'flex' to align items side-by-side and 'justify-center' to keep them in the middle */}
                <div className="flex items-center justify-center gap-4 mb-2">
                    <img
                        src={tsdLogo}
                        alt="Traffic Sign Detector Logo"
                        className="w-12 h-12 md:w-16 md:h-16" /* Adjust size as needed */
                    />
                    <ShinyText
                        text={project.title}
                        disabled={false}
                        speed={3}
                        className="text-3xl font-bold text-center md:text-4xl"
                    />
                </div>

                {/* 3. Dynamic Date/Subtitle */}
                <p className="text-gray-400 text-center mb-10">
                    {project.date}
                </p>

                {/* Dynamic Sections (Overview, Algorithms, etc.) - Now full width */}
                <div className="grid gap-6 mb-12">
                    {project.sections.map((section, index) => (
                        <Description
                            key={index}
                            title={section.title}
                            items={section.items}
                        />
                    ))}
                </div>

                {galleryImages.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl text-green-300 mb-6 text-center">Project Gallery</h3>

                        {/* UPDATED: Added max-w-4xl and mx-auto to center and shrink the gallery container */}
                        <div className="relative w-full max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
                            <div className="relative aspect-video w-full flex items-center justify-center bg-black">
                                <img
                                    src={galleryImages[currentIdx].src}
                                    alt={galleryImages[currentIdx].caption}
                                    className="object-contain w-full h-full"
                                />
                            </div>

                            {/* Navigation Buttons (Overlay) */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-green-500/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-green-400 z-10"
                            >
                                &#10094; {/* Left Arrow Entity */}
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-green-500/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-green-400 z-10"
                            >
                                &#10095; {/* Right Arrow Entity */}
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

                {/* 5. Dynamic Tech Stack */}
                <div className="mt-12 text-center">
                    <h2 className="text-2xl text-green-300 mb-4">Core Technologies</h2>
                    <div className="flex flex-wrap justify-center gap-2">
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
                                {tech}
                            </span>
                        ))}
                    </div>

                    {project.githubLink && (
                        <div className="mt-8">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center
                                    bg-[#161921] border border-gray-700
                                    text-gray-100 px-4 py-2 rounded-md
                                    text-sm transition-all duration-300
                                    ease-in-out hover:border hover:border-green-400
                                    hover:shadow-lg hover:shadow-green-500/25
                                    hover:scale-105 hover:bg-green-900"
                            >
                                View GitHub Repository
                                <FontAwesomeIcon icon={faGithub} className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    )}
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