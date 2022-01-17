import React from 'react';


const Cell = ({value, result, onCellClick, id, started}) => {

    let handleCellClick=() => onCellClick(id);

    let style={};

    if(value!=='_' || result.over || !started){
        style.cursor='not-allowed';
        handleCellClick=null; //no event will be triggered.
    };

    let win = "", draw = "";

    if(result.over && result.winner != null){
        win = (result.winningSequence.includes(id))? "winner": "";

    }

    else if(result.over && result.winner === null){
        draw = "draw";
    }

    let top = "", bottom = "", left = "", right = ""
    if(id <= 2){
        top = "top";
    }

    if(id >= 6){
        bottom = "bottom";
    }

    if(id % 3 === 0){
        left = "left";
    }

    if(id % 3 === 2){
        right = "right";
    }
    

    //console.log('style: ',id, style);
    return (
        <button className={`${win} ${draw} ${top + " " + bottom + " " + right + " " + left} cell`} style={style}
            onClick={handleCellClick}>
            {value === '_'? " ": value}
        </button>
    );

}


export default Cell;