import React,{useEffect} from "react";

const Gameboard = ({cards,shuffleCards})=> {

    const handleClick = () => {
        shuffleCards();
    };

    useEffect(()=> {
        shuffleCards();
    },[]);

    const renderedCards = cards.map((item,index)=> (
        <div key={index} onClick={handleClick}>{item}</div>
    ));

    return(
        <div>
            {renderedCards}
        </div>
    );
};

export default Gameboard