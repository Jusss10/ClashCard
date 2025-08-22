import { useState } from "react";
import { cards } from "../game/cards";
import { CardComponent } from "../components/Card";

export function Game() {
  const [playerHealth, setPlayerHealth] = useState(10);
  const [enemyHealth, setEnemyHealth] = useState(10);

  function playCard(card: typeof cards[number]){
    if(card.type == "attack"){
        setEnemyHealth(h => Math.max(0, h - card.power))
    }else if(card.type == "heal"){
        setPlayerHealth(h => Math.max(10, h + card.power))
    }
  }

  return (
    <div className="border-2 border-blue-200 rounded-lg p-4 text-black bg-white">
      <p>Player Health: {playerHealth}</p>
      <p>Enemy Health: {enemyHealth}</p>

      <div className="flex gap-4 flex-wrap">
        {cards.map((card) => (
          <div key={card.id} onClick={() => playCard(card)} className="cursor-pointer">
            <CardComponent card={card} />
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">Click a card to play it!</p>
    </div>
  );
}
