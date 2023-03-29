import { useState } from 'react'
import './App.css'
import Gameboard from './components/Gameboard';

function App() {
  const [score,setScore] = useState(0);
  const [highScore,setHighScore] = useState(0);
  const [cards,setCards] = useState(
    ['card 1','card 2','card 3','card 4','card 5','card 6','card 7','card 8','card 9','card 10']
  );
  
  const shuffleCards = () => {
    let cardsList = [...cards];

    for(let i=cardsList.length-1;i>0;i--) {
        let j = Math.floor(Math.random()*(i+1));
        [cardsList[i],cardsList[j]] = [cardsList[j],cardsList[i]];
    }

    setCards(cardsList);
  }

  return (
    <div className="App">
      <Gameboard 
        cards={cards}
        shuffleCards={shuffleCards}
      />
    </div>
  )
}

export default App
