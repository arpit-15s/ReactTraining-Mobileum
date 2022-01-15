import React from 'react';
import TimerO from './TimerO';
import TimerX from './TimerX';

const Timer = (props) => {

    console.log(props);

    // render(){
        return <div className="Timer">
            <div>X: <TimerX next={props.next} result={props.result}/></div>
            <div>O: <TimerO next={props.next} result={props.result}/></div>
        </div>
    // }
}

export default Timer;