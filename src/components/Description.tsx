// components/Description.tsx
// import React from 'react';

interface DescriptionCardProps {
    title: string;
    items: string[];
}

export default function Description({ title, items }: DescriptionCardProps) {
    return (
        <div className="mb-2">
            <h4 className="text-xl text-green-400 font-semibold mb-3">{title}</h4>
            <ul className="space-y-2 text-gray-300 leading-relaxed">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">

                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}