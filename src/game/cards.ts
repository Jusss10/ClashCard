import type { Card } from "./types";

export const cards: Card[] = [
    { id: 1, name: "Tailwind Utility", type: "attack", description: "Deal 3 damage with a perfectly styled strike." },
    { id: 2, name: "404 Not Found", type: "attack", description: "Deal 2 damage and confuse your opponent" },
    { id: 3, name: "Broken Build", type: "attack", description: "Causes chaos and 4 damage" },

    { id: 4, name: "Coffee Break", type: "heal", description: "Take a break and restore 1 health" },
    { id: 5, name: "NPM Install", type: "heal", description: "Restore 5 health by adding a package you didn`t know you needed." },
    { id: 6, name: "Git Revert", type: "heal", description: "Restore 6 health by undoing your last mistake" },
]