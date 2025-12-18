// components/Description.tsx
// import React from 'react';

interface DescriptionCardProps {
    title: string;
    items: string[];
}

export default function Description({ title, items }: DescriptionCardProps) {
    return (
        // Removed 'bg-gray-700', 'border', and 'p-6' to remove the grey box look
        <div className="mb-2">
            <h4 className="text-xl text-green-300 font-semibold mb-3">{title}</h4>
            <ul className="space-y-2 text-gray-300 leading-relaxed">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-green-400">▹</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}