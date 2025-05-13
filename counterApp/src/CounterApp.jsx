import React, { useEffect, useRef, useState } from 'react'

function CounterApp() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        if(isRunning){
            intervalRef.current = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
        }

        //cleanup on pause or unmount
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const handleStop = () => setIsRunning(false);

    const handleStart = () => {
        if(!isRunning) setIsRunning(true);
    };

    const handleReset = () => {
        setCount(0);
        setIsRunning(false);
        clearInterval(intervalRef.current);
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1> Counter : {count}</h1>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default CounterApp

