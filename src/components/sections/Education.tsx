// components/Education.tsx

import ShinyText from "../ShinyText";
export default function Education() {
    const technologies = ['VB', 'C++', 'Java', 'SQL', 'HTML', 'CSS', 'JavaScript', 'ASP.Net', 'C#', '80x86 Assembly'];

    return (
        <section className="py-12 px-6 bg-linear-to-b from-black to-[#161921]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <ShinyText
                        text="Education"
                        disabled={false}
                        speed={3}
                        className="text-3xl font-bold"
                    />
                </div>

                <div className="bg-[#161921] p-8 rounded-lg border border-gray-700">
                    <h3 className="text-2xl font-bold mb-4">University of Johannesburg</h3>
                    <p className="text-gray-300 mb-4">
                        BSc in Information Technology in Computer Sciences & Informatics
                    </p>

                    <h4 className="font-semibold mb-2">Courses:</h4>

                    <ul className="space-y-2 mb-6 list-disc list-inside">
                        <li>Introduction to Algorithm Development <span className="text-blue-400">VB, C++</span></li>
                        <li>Introduction to Data Structures <span className="text-blue-400">VB, C++</span></li>
                        <li>Object-Oriented Programming <span className="text-blue-400">Java</span></li>
                        <li>Data Communications <span className="text-blue-400">Java</span></li>
                        <li>Database Design <span className="text-blue-400">SQL</span></li>
                        <li>Internet Electronic Commerce <span className="text-blue-400">HTML, CSS, JavaScript, ASP.Net, C#, SQL</span></li>
                        <li>Advanced Data Structures and Algorithms <span className="text-blue-400">Java</span></li>
                        <li>Operating System Concepts <span className="text-blue-400">80x86 Assembly</span></li>
                        <li>Introduction to Software Engineering <span className="text-blue-400">Software Design</span></li>
                        <li>Advanced Software Engineering <span className="text-blue-400">Development, Testing, Deployment</span></li>
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="bg-[#161921] border border-gray-600 text-blue-100 px-3 py-1 rounded-lg text-sm transition-all duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 hover:bg-[#1a2238] cursor-pointer"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
