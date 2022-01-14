import React from 'react';

const Moves =(props) => {
 
    console.log(props.move);
    
    return (
<div className="in-game">
    <table className="progress-table">
        <thead>
            <tr>
                <th>Moves</th>
                <th>Player</th>
                <th>Position</th>
            </tr>
        </thead>
        <tbody className="progress-body">
            {props.move.map((moves) => 
                <tr key={moves.count}>
                    <td>{moves.count}</td>
                    <td>{moves.curr}</td>
                    <td>{moves.id}</td>
                </tr>
            )}
        </tbody>
    </table>
</div>
    );
}

export default Moves;
