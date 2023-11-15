import './Footer.css'
import { useEffect, useRef } from 'react';
function Timer({ time, userAnswer, dispatch }) {
  const min = Math.floor(time / 60) 
  const sec = time % 60 
  const count = useRef(null)
  
  useEffect(() => {
      count.current = setInterval(() => {
        if(time === 0) return 0;
        if(userAnswer) return 0;
        dispatch({type: "timer", payload: time - 1})
      }, 1000);
  
    return () => {
      clearInterval(count.current)
    }
  }, [userAnswer, count, dispatch, time])
  
  let mins;
  if(min < 10) mins = "0"+ min
  let secs;
  if(sec < 10) secs = "0" + sec
  return (
    <div>
      <button ref={count} value={time} className="timer" disabled>
        {!userAnswer && <strong>{min < 10 ? mins : min}:{sec < 10 ? secs : sec}</strong>}
      </button>
    </div>
  );
}

export default Timer
