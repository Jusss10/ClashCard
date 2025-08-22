import { useState, useEffect } from "react";
import { cards } from "../game/cards";
import { CardComponent } from "../components/Card";

export function Game() {
  const [playerHealth, setPlayerHealth] = useState(10);
  const [enemyHealth, setEnemyHealth] = useState(10);
  const [visibleCards, setVisibleCards] = useState<typeof cards>([]);

  function getRandomCard(deck: typeof cards, exclude: typeof cards){
    const available = deck.filter(card => !exclude.some(c => c.id === card.id));
    if(available.length === 0) return 0;
    return available[Math.floor(Math.random() * available.length)]
  }

  useEffect(() =>{
    const initialCard: typeof cards = [];
    let excludedCard: typeof cards = []

    for(let i = 0; i < 3; i++){
        const card = getRandomCard(cards, excludedCard);
        if(card){
            initialCard.push(card);
            excludedCard.push(card);
        }
    }
    setVisibleCards(initialCard);
  },[])

  function playCard(card: typeof cards[number]) {
    if (card.type === "attack") {
      setEnemyHealth(h => Math.max(0, h - card.power));
    } else if (card.type === "heal") {
      setPlayerHealth(h => Math.min(10, h + card.power));
    }
    setVisibleCards(current => {
      const filtered = current.filter(c => c.id !== card.id);
      const newCard = getRandomCard(cards, filtered.concat(card));
      return newCard ? [...filtered, newCard] : filtered;
    });
  }

  return (
    <div className="border-2 border-blue-200 rounded-lg p-4 text-black bg-white">
      <p>Player Health: {playerHealth}</p>
      <p>Enemy Health: {enemyHealth}</p>

      <div className="flex gap-4 flex-wrap">
        {visibleCards.map((card) => (
          <div key={card.id} onClick={() => playCard(card)} className="cursor-pointer">
            <CardComponent card={card} />
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">Click a card to play it!</p>
    </div>
  );
}