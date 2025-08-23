import { useState, useEffect } from "react";
import { cards } from "../game/cards";
import { CardComponent } from "../components/Card";

export function Game() {
  const [playerHealth, setPlayerHealth] = useState(10);
  const [enemyHealth, setEnemyHealth] = useState(10);
  const [visibleCards, setVisibleCards] = useState<typeof cards>([]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

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

  useEffect(() => {
    if (enemyHealth === 0) {
      setGameOver(true);
      setWinner("You Win!");
    } else if (playerHealth === 0) {
      setGameOver(true);
      setWinner("You Lose!");
    }
  }, [playerHealth, enemyHealth]);

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
    <div className="relative">
      {gameOver && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">{winner}</h2>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => window.location.reload()}
            >
              Play Again
            </button>
          </div>
        </div>
      )}

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
    </div>
  );
}