import { useState } from 'react'
import './App.css'
import Gameboard from './components/Gameboard';
import Scorecard from './components/Scorecard';

function App() {
  const [score,setScore] = useState(0);
  const [highScore,setHighScore] = useState(0);
  const [cards,setCards] = useState(
    [
      {title:'card 1',clicked:false},
      {title:'card 2',clicked:false},
      {title:'card 3',clicked:false},
      {title:'card 4',clicked:false},
      {title:'card 5',clicked:false},
      {title:'card 6',clicked:false},
      {title:'card 7',clicked:false},
      {title:'card 8',clicked:false},
      {title:'card 9',clicked:false},
      {title:'card 10',clicked:false},
    ]
  );
  
  const shuffleCards = () => {
    let cardsList = [...cards];

    for(let i=cardsList.length-1;i>0;i--) {
        let j = Math.floor(Math.random()*(i+1));
        [cardsList[i],cardsList[j]] = [cardsList[j],cardsList[i]];
    }

    setCards(cardsList);
  }

  const handleClick = (clickedTitle) => {
    let clickedCard = cards.find(card => card.title === clickedTitle);
    if(clickedCard.clicked) {
      if(score>highScore) {
        setHighScore(score);
      }
      setScore(0);
      setCards(cards.map((card) => { return { ...card, clicked: false } }));
    }
    else {
      setScore(score+1);
      setCards(cards.map(card => {
        if(card.title === clickedCard.title) {
          return {...card,clicked: true};
        }
        return card;
      }));
    }
    shuffleCards();
  }

  return (
    <div className="App">
      <div>
        <div>Memory Game</div>
        <div>Get points by clicking on an image but don't click on any more than once!</div>
      </div>
      <Scorecard
        score={score}
        highScore={highScore}
      />
      <Gameboard 
        cards={cards}
        shuffleCards={shuffleCards}
        handleCardClick={handleClick}
      />
    </div>
  )
}

export default App
