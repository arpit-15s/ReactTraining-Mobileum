import React from 'react';
import Status from './Status';
import Board from './Board';

const Game=(props)=>{

    // const boardInstance =[['1', '1', '1'], ['1', '0', '0'], ['0', '0', '0']];
    const getResult = (boardInstance) => {

        let winner = '-';

        for(let i = 0; i < 3; i++){
            if(boardInstance[0][i] === boardInstance[1][i] && boardInstance[2][i] === boardInstance[1][i]){
                winner = boardInstance[0][i];
                break;
            }
            else if(boardInstance[i][0] === boardInstance[i][1] && boardInstance[i][1] === boardInstance[i][2]){
                winner = boardInstance[i][0];
                break;
            }
        }

        if((boardInstance[0][0] === boardInstance[1][1] && boardInstance[1][1] === boardInstance[2][2]) || 
        (boardInstance[0][2] === boardInstance[1][1] && boardInstance[1][1] === boardInstance[2][0])){
            winner = boardInstance[1][1];
        }
        return (winner !== '-')? {winner: winner, verdict: true}: {winner: winner, verdict: false}
    }

    return (
            <div className='game'>
                <Status/>
                <Board/>
                <button className='Reset'>Reset</button>
            </div>
            );
            
}


export default Game;