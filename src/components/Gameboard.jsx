import React,{useEffect} from "react";

const Gameboard = ({cards,shuffleCards,handleCardClick})=> {

    const handleClick = (event) => {
        handleCardClick(event.target.id);
    };

    useEffect(()=> {
        shuffleCards();
    },[]);

    const renderedCards = cards.map((item,index)=> (
        <div key={index} onClick={handleClick} id={item.title}>{item.title}</div>
    ));

    return(
        <div>
            {renderedCards}
        </div>
    );
};

export default Gameboard