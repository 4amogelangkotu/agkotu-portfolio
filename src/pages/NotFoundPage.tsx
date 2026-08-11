import { Link } from 'react-router-dom';
import TerminalWindowBar from '../components/TerminalWindowBar';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen text-white font-mono w-full flex items-center justify-center px-6 bg-black">
            <div className="max-w-lg w-full bg-[#0d0e0e] p-8 rounded-lg border border-gray-700">
                <TerminalWindowBar />
                <div className="mb-4">
                    <span className="text-green-400">$ cd /requested-page</span>
                </div>
                <p className="text-red-400 mb-1">bash: cd: /requested-page: No such file or directory</p>
                <h1 className="text-3xl text-white font-bold mt-6 mb-2">404 — Page Not Found</h1>
                <p className="text-gray-400 mb-6">
                    The page you're looking for doesn't exist or has moved.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center bg-green-900 text-green-100 px-4 py-2 rounded-md text-sm font-bold tracking-wider transition-all duration-300 ease-in-out hover:border hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 hover:bg-green-800"
                >
                    $ cd ~
                </Link>
            </div>
        </div>
    );
}
