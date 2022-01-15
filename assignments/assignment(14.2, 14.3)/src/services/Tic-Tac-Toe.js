export const checkGame = (cells) => {
    const result = {
        over: false,
        winner: null,
        winningSequence: null,
        movesLeft: cells.filter(cell => cell === '_').length
    };

    const winningSequences=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let winningSequence of winningSequences){
        const [x, y, z]= winningSequence;
        if(cells[x] === '_')
            continue;

        if(cells[x] === cells[y] && cells[y] === cells[z]){
            result.over = true;
            result.winner = cells[x];
            result.winningSequence = winningSequence;
            return result;
        }
    }

    // const movesLeft = cells.filter(cell => cell === '_').length;
    result.over = !cells.includes("_");
}
