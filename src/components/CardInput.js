

import React, { useRef } from 'react';
import "../App.css"


const CardInput = () => {
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const fourthInputRef = useRef(null);
  function handlechange1(e){
    console.log(e.target.value.length)
    if(e.target.value.length===4){
      secondInputRef.current.focus();
      // console.log(secondInputRef.current)
    }
  }
  function handlechange2(e){
    console.log(e.target.value.length)
    if(e.target.value.length===4){
      thirdInputRef.current.focus();
      // console.log(secondInputRef.current)
    }
  }
  function handlechange3(e){
    console.log(e.target.value.length)
    if(e.target.value.length===4){
      fourthInputRef.current.focus();
      // console.log(secondInputRef.current)
    }
  }
  
  
  return (
    <div className='card-flex'>
      <p>Card Number : </p>
      <input id="input1" type='number' maxLength={4}  onChange={(e)=>handlechange1(e)}/>
      <input id="input2" maxLength={4} ref={secondInputRef}  onChange={(e)=>handlechange2(e)}/>
      <input id="input3" maxLength={4} ref={thirdInputRef} onChange={(e)=>handlechange3(e)}/>
      <input id="input4" maxLength={4} ref={fourthInputRef}/>  
    </div>
  );
};

export default CardInput;

