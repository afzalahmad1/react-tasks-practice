import React, { useState } from 'react'


//readiness mock

const Timer = () => {
    const [time,setTime] = useState();
    const [message,setMessage] = useState();

    const handletimer = ()=>{
        console.log(time);
        let count = time;
        let timer = setInterval(()=>{
            setTime(prev => prev-1)
            count--;
            if(count <= 0){
                setMessage("Time's up");
                setTime("")
                clearInterval(timer);
            }
        },1000)
    }
  return (
    <div>
      <input 
      type='number'
      value={time}
      onChange={(e)=>setTime(e.target.value)}
      placeholder='Enter time'/>
      <button onClick={handletimer}>Start</button>
      { time && <p>CountDown: {time}</p>}
      { message && <p>{message}</p>}

    </div>
  )
}

export default Timer
