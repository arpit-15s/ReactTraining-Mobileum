import {checkGame} from '../Tic-Tac-Toe';

describe('TicTacToe check tests', () => {
    let cells;
    beforeEach(() => {
        cells = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
    })

    describe('Test for Winner', () => {
        it('should identify the row winner', () => {
            cells[0] = 'x';
            cells[1] = 'o';
            cells[2] = 'x';

           
            const result= checkGame(cells);
            console.log(result);
            expect(result.over).toBe(false);
            expect(result.winner).toBe(null);
            expect(result.winningSequence).toEqual(null);
            expect(result.movesLeft).toBe(6);
        })
    });

    describe('Test for Winner', () => {
        it('should identify the row winner', () => {
            cells[0] = 'x';
            cells[1] = 'x';
            cells[2] = 'x';
            console.log(cells);

            const result= checkGame(cells);

            expect(result.over).toBe(true);
            expect(result.winner).toBe("x");
            expect(result.winningSequence).toEqual([0, 1, 2]);
            expect(result.movesLeft).toBe(6);
        })
    })
})