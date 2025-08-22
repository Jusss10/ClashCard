import type { Card } from "./types";

export const cards: Card[] = [
    { id: 1, name: "Tailwind Utility", type: "attack", power: 3, description: "Deal 3 damage with a perfectly styled strike." },
    { id: 2, name: "404 Not Found", type: "attack", power: 2, description: "Deal 2 damage and confuse your opponent" },
    { id: 3, name: "Broken Build", type: "attack", power: 4, description: "Causes chaos and 4 damage" },

    { id: 4, name: "Coffee Break", type: "heal", power: 1, description: "Take a break and restore 1 health" },
    { id: 5, name: "NPM Install", type: "heal", power: 5, description: "Restore 5 health by adding a package you didn`t know you needed." },
    { id: 6, name: "Git Revert", type: "heal", power: 6, description: "Restore 6 health by undoing your last mistake" },
]