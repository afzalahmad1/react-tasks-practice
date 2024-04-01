import React, { useEffect, useState } from 'react'

const Timer3 = () => {
    const [counter,setCounter] = useState(0);
    let timer;
   useEffect(()=>{
     timer = setInterval(()=>{
      setCounter(counter=>counter + 1)
    },1000)
    return ()=>{
      console.log("timerrrr");
      clearInterval(timer)
    }
   
   },[])
 
   useEffect(()=>{
    console.log("counter",counter);
    if(counter >= 5){
      console.log("counter1",counter);
      clearInterval(timer)
      
    }
   },[counter])
   
  return (
    <div>
      Timer: {counter}
    
    </div>
  )
}

export default Timer3
