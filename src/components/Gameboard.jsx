import React,{useEffect} from "react";

const Gameboard = ({cards,handleCardClick})=> {

    useEffect(()=> {
        shuffleCards();
    });

    let cardsList = [...cards];

    const handleClick = (event) => {
        handleCardClick(event.target.id);
    };

    const shuffleCards = () => {
        for(let i=cardsList.length-1;i>0;i--) {
            let j = Math.floor(Math.random()*(i+1));
            [cardsList[i],cardsList[j]] = [cardsList[j],cardsList[i]];
        }
    };

    const renderedCards = cardsList.map((item,index)=> (
        <div key={index} onClick={handleClick} id={item.title}>{item.title}</div>
    ));

    return(
        <div>
            {renderedCards}
        </div>
    );
};

export default Gameboard