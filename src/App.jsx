import { useState } from 'react'
import './App.css'
import Gameboard from './components/Gameboard';
import Scorecard from './components/Scorecard';
import poster1 from './assets/poster1.jpg';
import poster2 from './assets/poster2.jpg';
import poster3 from './assets/poster3.jpg';
import poster4 from './assets/poster4.png';
import poster5 from './assets/poster5.jpg';
import poster6 from './assets/poster6.jpg';
import poster7 from './assets/poster7.jpg';
import poster8 from './assets/poster8.jpg';
import poster9 from './assets/poster9.jpg';
import poster10 from './assets/poster10.png';

function App() {
  const [score,setScore] = useState(0);
  const [highScore,setHighScore] = useState(0);
  const [cards,setCards] = useState(
    [
      {title:'card 1',clicked:false,url:poster1},
      {title:'card 2',clicked:false,url:poster2},
      {title:'card 3',clicked:false,url:poster3},
      {title:'card 4',clicked:false,url:poster4},
      {title:'card 5',clicked:false,url:poster5},
      {title:'card 6',clicked:false,url:poster6},
      {title:'card 7',clicked:false,url:poster7},
      {title:'card 8',clicked:false,url:poster8},
      {title:'card 9',clicked:false,url:poster9},
      {title:'card 10',clicked:false,url:poster10},
    ]
  );

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
  }

  return (
    <div className="App">
      <div className='text-center font-limelight px-4'>
        <div className='my-8 text-2xl'>Memory Game</div>
        <div>Get points by clicking on an image but don't click on any more than once!</div>
      </div>
      <Scorecard
        score={score}
        highScore={highScore}
      />
      <Gameboard
        cards={cards}
        handleCardClick={handleClick}
      />
    </div>
  )
}

export default App
