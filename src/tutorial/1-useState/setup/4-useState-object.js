import React, { useState } from 'react';
import { data } from '../../../data';
const UseStateObject = () => {

  const [person,setPerson]= useState(data)
   const changeme=()=>{
   setPerson((prevState)=>{
     return person[0].message='kamaeh'
   })
   }
   //function hello(id){setPerson('ju') }
 return <div>
   {
    person.map((person)=> {
      const{id,name,message}=person;
      return <div key={id} className='item'>
        <h3>{name}</h3>
        <h4>{message}</h4>
        <button className='btn' onClick={(id)=>setPerson("kameha")}> touch</button>
        </div>
    })}   
  </div>
};

export default UseStateObject;
