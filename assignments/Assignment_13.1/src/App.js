import AppHeader from './components/AppHeader';
import Game from './components/Game';
import ScoreBoard from './components/ScoreBoard';


const App=(props)=>{

    const scoreCard = [0,0,0];

    return (
        <div className='app'>
            <AppHeader title="Tic Tac Toe Extreme"/>
            <ScoreBoard scoreCard={scoreCard} />
            <Game/>
            
        </div>
    )
};


export default App;
