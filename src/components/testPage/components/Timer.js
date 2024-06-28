import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Timer = ({ initialSeconds, submitTestResult, timerCountdown, setTimerCountdown }) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const navigate = useNavigate();

    useEffect(() => {
        if (window.localStorage.getItem('timer')) {
            setSeconds(window.localStorage.getItem('timer'))
        }
        else{
            window.localStorage.setItem('timer', initialSeconds)
        }
    }, [])

    useEffect(() => {
        if (seconds > 0) {
            const timerId = setInterval(() => {
                window.localStorage.setItem('timer', seconds-1)
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
            return () => {
                clearInterval(timerId)
            };
        }
        else{
            submitTestResult();
        }
    }, [seconds]);


    return (
        <div className='timer'>
            <h2>Залишилось часу: {seconds}</h2>
            {/* {
            seconds == 0 ? 
                () => navigate('/') 
                : <></>
            } */}
        </div>
    )
}

export default Timer
