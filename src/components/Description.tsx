// components/Description.tsx
interface DescriptionCardProps {
    title: string;
    items: string[];
}

export default function Description({ title, items }: DescriptionCardProps) {
    return (
        <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <ul className="space-y-1">
                {items.map((item, index) => (
                    <li key={index}>• {item}</li>
                ))}
            </ul>
        </div>
    );
}