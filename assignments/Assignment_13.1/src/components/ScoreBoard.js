import React from 'react';

const ScoreBoard = (props) => {
    // 
    // const [totalGames, win, draw] = [...props]
    console.log(props.scoreCard);
    
    // console.log(prrops.)

    return (
        <div className="container-card">
            <div className="title">
                <h1 id="score-title">Score Card</h1>
            </div>
            <div className="textbox">Total: {props.scoreCard[0]}</div>
            <div className="score-card">
                <div className="textbox scores">
                    X: {props.scoreCard[1]}
                </div>
                <div className="textbox scores">
                    O: {props.scoreCard[0] - props.scoreCard[1] - props.scoreCard[2]}
                </div>
            </div>
        </div>
    );
}

export default ScoreBoard;