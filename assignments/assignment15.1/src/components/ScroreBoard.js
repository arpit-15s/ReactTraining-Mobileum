import React from 'react';



const ScoreBoard=({score})=>{

//    console.log('score',score);
    

    // return (
    //     <div className="score-board">
    //         <h2>Score Board</h2>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th>Games</th>                        
    //                     <th>O Wins</th>                        
    //                     <th>X Wins</th>                        
    //                     <th>Draw</th>                        
    //                 </tr>
                    
    //                 <tr>
    //                     <td>{score?.games||0}</td>                        
    //                     <td>{score?.O||0}</td>                        
    //                     <td>{score?.X||0}</td>                        
    //                     <td>{score?.draw||0}</td>                        
    //                 </tr>
                    
    //             </thead>
    //         </table>

    //     </div>
    // );

    return (
        <div className="score-board">
            <div className="title">
                <h1 id="score-title">Score Card</h1>
            </div>
            <div className="textbox">Total: {score?.games||0}</div>
            <div className="score-card">
                <div className="textbox scores">
                    X: {score?.X||0}
                </div>
                <div className="textbox scores">
                    O: {score?.O||0}
                </div>
                <div className="textbox scores">
                    Draw: {score?.draw||0}
                </div>
            </div>
        </div>
    );

};

export default ScoreBoard;