import  React from 'react';


const MovesBoard=({moves})=>{

    return <div className='moves-board'>
        <table border="1px solid rgb(39, 39, 39)">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Player</th>
                    <th>Position</th>                    
                </tr>
            </thead>
            <tbody>
                {moves.map((move,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{move.player}</td>
                        <td>{move.position}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>;
};

export default MovesBoard;

