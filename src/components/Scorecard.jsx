import React from "react";

const Scorecard = ({score,highScore}) => {

    return(
        <div className="flex justify-between font-limelight my-5 px-5 sm:px-16">
            <div>Score: {score}</div>
            <div>Highscore: {highScore}</div>
        </div>
    );
};

export default Scorecard;