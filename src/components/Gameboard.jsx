import React from "react";

const Gameboard = ({cards,handleCardClick})=> {

    let cardsList = [...cards];

    const handleClick = (event) => {
        handleCardClick(event.target.alt);
    };

    const shuffleCards = () => {
        for(let i=cardsList.length-1;i>0;i--) {
            let j = Math.floor(Math.random()*(i+1));
            [cardsList[i],cardsList[j]] = [cardsList[j],cardsList[i]];
        }
        return(cardsList);
    };

    const renderedCards = shuffleCards().map((item,index)=> (
        <img key={index} onClick={handleClick} src={item.url} alt={item.title} className="p-2 border-solid border-black border-4 w-[70%] h-64 sm:w-[25%] sm:h-96"></img>
    ));

    return(
        <div className="flex flex-col items-center gap-6 w-full sm:px-14 sm:flex-row sm:flex-wrap sm:flex-initial sm:justify-between sm:gap-14">
            {renderedCards}
        </div>
    );
};

export default Gameboard