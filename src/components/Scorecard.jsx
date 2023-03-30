import React from "react";

const Scorecard = ({score,highScore}) => {

    return(
        <div>
            <div>Score: {score}</div>
            <div>Highscore: {highScore}</div>
        </div>
    );
};

export default Scorecard;