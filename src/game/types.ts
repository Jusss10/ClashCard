export type CardType = "attack" | "heal";

export interface Card {
    id: number;
    name: string;
    type: CardType;
    power: number;
    description: string;
}

export interface Player {
    name: string;
    health: number;
}