import React, { useState } from "react";

function Stopwatch(){
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [myTimer, setMyTimer] = useState(null);


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds/60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
    };
    

    const handleStart = () => {  
        if (!timerOn) {
          const interval =   setInterval(() => {
            setTime((time) => time + 1)
            }, 1000); 
            setTimerOn(true)
            setMyTimer(interval)
        }
    }

    const handleStop = () => {
        clearInterval(myTimer)
        setTimerOn(false)
    }



    const handleReset = () => {
        clearInterval(myTimer)
        setTime(0)
        setTimerOn(false)
    }

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(time)} </p>
            { time === 0 ? <button onClick={handleStart}>Start</button> :
            <button onClick={handleStop}>Stop</button>}
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Stopwatch;