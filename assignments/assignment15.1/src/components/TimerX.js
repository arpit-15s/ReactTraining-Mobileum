import React from 'react';

class TimerX extends React.Component {

   
    state={
        seconds: 0,
        minutes: 0,
    }
    
    componentDidMount(){
        
        this.timer= setInterval(() =>{
            const next = this.props.next;
            const result = this.props.result;
            // console.log(next);
            if(result.over === false && next === 'X'){
                let seconds = this.state.seconds;
                let minutes = this.state.minutes;
                if((seconds + 1) < 60)
                    this.setState({seconds: seconds + 1});
                else
                    this.setState({minutes: minutes + 1, seconds: 0});
            }
        },1000);
    }

    componentWillUnmount(){
        if(this.props.result.over === true){
            clearInterval(this.state.seconds);
            clearInterval(this.state.minutes);
        }
    }


    render(){
        const twoDigit=(value)=>{
            if(value<10)
                return "0"+value; 
            else
                return value;

        }
        
        const seconds=twoDigit(this.state.seconds);
        const min=twoDigit(this.state.minutes);

        // if(this.props.result.movesLeft === 9){
        //     this.setState({seconds: 0});
        //     this.setState({minutes: 0});
        // }

        // if(this.props.result.movesLeft === 9){
        //     clearInterval(this.state.seconds);
        //     clearInterval(this.state.minutes);
        // }

        return <div className="clock">
            <span className='min'>:{min}</span>
            <span className='second'>:{seconds}</span>
        </div>
    }
}

export default TimerX;

