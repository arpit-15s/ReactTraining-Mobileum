import React from 'react';
import Cell from './Cell';

class Board extends React.Component {


    render=()=>{

        return (
                <div className='board'>
                    <div className='cells'>
                        {this.props.cells.map((cell,index)=>(
                            <Cell value={cell} 
                                onCellClick={this.props.onCellClick} 
                                result={this.props.result}
                                key={index}
                                id={index}
                                started={this.props.started} 
                            />
                        ))}   
                  </div>
                </div>
        );
    }  
    

}

export default Board;