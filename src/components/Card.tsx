import type { Card } from "../game/types";

interface CardComponentProps {
    card: Card;
}

export function CardComponent({ card }: CardComponentProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-4 w-64 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-2 text-gray-800">{card.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{card.description}</p>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Type: {card.type}</span>
        </div>
    );
}