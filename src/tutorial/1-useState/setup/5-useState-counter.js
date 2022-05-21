import React, { useState } from 'react';

const UseStateCounter = () => {

const [value,setValue]= useState(0);
const c=value
const Decrease=()=>{
  
setValue(c-1)}
 function Increase(){
  
setValue(c+1)}

 function DIncrease(){
 setTimeout(()=> 
setValue((prevState)=>{
  return prevState+1;
}),2000)}



  return <section style={{margin: '4rem 0'}}>
    
     <h2>regular counter</h2>
     <h1>{value}</h1>
     <button className='btn' onClick={()=>Decrease()}>Decrease</button>
     <button className='btn' onClick={()=>setValue(0)}> Reset</button>
     <button className='btn' onClick={()=>Increase()}>Increase</button>
      <button className='btn' onClick={()=>DIncrease()}>DelsyIncrease</button>
    </section>
};

export default UseStateCounter;
