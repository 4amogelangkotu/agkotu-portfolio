// components/Contacts.tsx
import cvFile from '/src/assets/agkotu-cv.pdf';
import TerminalWindowBar from "../TerminalWindowBar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faDownload } from '@fortawesome/free-solid-svg-icons';

interface SocialLinkProps {
    platform: string;
    handle: string;
    icon: React.ReactNode;
    url: string;
}

function SocialLink({ platform, handle, icon, url }: SocialLinkProps) {
    const handleClick = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="bg-[#161b21] p-4 rounded-lg flex items-center transition-all duration-300 ease-in-out hover:border hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 hover:bg-[#1d242c] cursor-pointer"
            onClick={handleClick}>
            {icon}
            <div>
                <div className="font-semibold">{platform}</div>
                <div className="text-sm text-gray-400">{handle}</div>
            </div>
        </div>
    );
}

export default function Contacts() {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'agkotu-cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:amogelangkotu@icloud.com';
    };

    const socialLinks = [
        {
            platform: "GitHub",
            handle: "@4amogelangkotu",
            icon: (
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-3 text-green-400" />
            ),
            url: "https://github.com/4amogelangkotu"
        },
        {
            platform: "LinkedIn",
            handle: "in/amogelangkotu",
            icon: (
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mr-3 text-green-400" />
            ),
            url: "https://www.linkedin.com/in/amogelangkotu"
        },
        {
            platform: "X",
            handle: "@giftamogelangg",
            icon: (
                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 mr-3 text-green-400" />
            ),
            url: "https://twitter.com/giftamogelangg"
        }
    ];

    return (
        <section className="py-12 px-6 ">
            <div className="max-w-4xl mx-auto">
                <div className="bg-linear-to-b from-[#101419] to-[#0f1712] p-8 rounded-lg border border-gray-700">
                    <TerminalWindowBar />
                    <div className="mb-4">
                        <span className="text-green-400">$ contact --info</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>

                    <div className="mb-6">
                        <div className="mb-2">
                            <span className="text-green-400">$ location --current</span>
                        </div>
                        <div className="flex items-center text-gray-300 transition-all duration-300 ease-in-out hover:text-white">
                            <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 mr-2 text-white" />
                            Pretoria, South Africa
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="mb-2">
                            <span className="text-green-400">$ contact --email</span>
                        </div>
                        <div className="bg-green-900 text-green-100 px-4 py-2 rounded-md inline-block transition-all duration-300 ease-in-out hover:border hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 hover:bg-green-800 cursor-pointer"
                            onClick={handleEmailClick}>
                            amogelangkotu@icloud.com
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="mb-2">
                            <span className="text-green-400">$ ag-kotu-cv.pdf</span>
                        </div>
                        <button className="bg-green-900 text-green-100 px-4 py-2 rounded-md flex items-center transition-all duration-300 ease-in-out hover:border hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 hover:bg-green-800 cursor-pointer"
                            onClick={handleDownloadCV}>
                            <FontAwesomeIcon icon={faDownload} className="w-5 h-5 mr-2" />
                            Download CV
                        </button>
                    </div>

                    <div className="mb-4">
                        <span className="text-green-400">$ ls ./social-links</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 ">
                        {socialLinks.map((link) => (
                            <SocialLink
                                key={link.platform}
                                platform={link.platform}
                                handle={link.handle}
                                icon={link.icon}
                                url={link.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}