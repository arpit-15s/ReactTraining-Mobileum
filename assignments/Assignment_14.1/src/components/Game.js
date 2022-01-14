import React from 'react';
import Status from './Status';
import Board from './Board';
import Moves from './Moves'

let count = 1;

class Game extends React.Component {

    constructor(props){
        super(props);

        this.state=this.getInitialState();
    }

    handleCellClick=(id)=>{
        //console.log('cell',id,'clicked');
        //never change original value directly
        //always work on a duplicate
        const cells= [...this.state.cells];
        if(cells[id]!=='_')
            return ; //this value had  earlier.
        
        cells[id]=this.state.next;

       
        const next=this.state.next==='O'?'X':'O';
        const curr=this.state.next==='O'?'O':'X';

        const moves=[...this.state.moves];
        moves[count - 1]={count, curr, id};

        //update the state
        this.setState({cells, moves, next});
        console.log('cell clicked', id);
        // console.log(this.state.moves);
        count++;
    }

    getInitialState=(id)=>{
        return {

            cells:[  '_','_','_',
                    '_','_','_',
                    '_','_','_'
                ],

            moves: [],
            next: []

        }
    }

    handleReset=(id)=>{
        this.setState(this.getInitialState());
    }


    render=()=>{


        return (
                <div className='game'>
                    <Status next={this.state.next} />
                    <Board cells={this.state.cells} 
                            onCellClick={this.handleCellClick}/>
                    <button
                        className="reset-button"
                        onClick={this.handleReset}
                    >Reset</button>
                    <Moves move={this.state.moves} />
                </div>
                );
                
    }

}





export default Game;