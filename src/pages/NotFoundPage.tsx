import { Link, useLocation } from 'react-router-dom';
import TerminalWindowBar from '../components/TerminalWindowBar';
import LetterGlitch from '../components/LetterGlitch';
import { allProjects } from '../data/projectsData';

const availablePages = [
    { path: '/', label: 'home' },
    { path: '/education', label: 'education' },
    ...allProjects.map((project) => ({
        path: `/project/${project.id}`,
        label: `project/${project.id}`,
    })),
];

export default function NotFoundPage() {
    const { pathname } = useLocation();

    return (
        <section className="relative min-h-screen text-white font-mono w-full overflow-x-hidden">
            <title>404 — Page Not Found | AG Kotu</title>

            <div className="absolute inset-0 z-0">
                <LetterGlitch
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={true}
                    smooth={true}
                    glitchColors={['#452b2b', '#dc6161', '#61dca3']}
                    characters={'404!NOT@FOUND#$&*()-_+=/[]{};:<>.,0123456789'}
                />
            </div>

            <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
                <div className="max-w-2xl w-full bg-[#0d0e0e] p-8 rounded-lg border border-gray-700 shadow-2xl shadow-black">
                    <TerminalWindowBar />

                    <div className="mb-2">
                        <span className="text-green-400">$ cd {pathname}</span>
                    </div>
                    <p className="text-red-400 mb-6 break-all">
                        bash: cd: {pathname}: No such file or directory
                    </p>

                    <h1 className="text-6xl md:text-7xl font-bold mb-2 text-red-400">404</h1>
                    <h2 className="text-2xl text-white font-bold mb-2">Page Not Found</h2>
                    <p className="text-gray-400 mb-8">
                        The page you're looking for doesn't exist or has moved.
                    </p>

                    <div className="mb-3">
                        <span className="text-green-400">$ ls ./available-pages</span>
                    </div>
                    <ul className="mb-8 space-y-1">
                        {availablePages.map((page) => (
                            <li key={page.path}>
                                <Link
                                    to={page.path}
                                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                                >
                                    <span className="text-green-700 mr-2">&gt;</span>
                                    {page.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        to="/"
                        className="inline-flex items-center bg-green-900 text-green-100 px-4 py-2 rounded-md text-sm font-bold tracking-wider transition-all duration-300 ease-in-out hover:border hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 hover:bg-green-800"
                    >
                        $ cd ~
                    </Link>
                    <span className="inline-block w-2 h-5 ml-3 align-middle bg-green-400 animate-pulse" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}
