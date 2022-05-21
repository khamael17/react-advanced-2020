import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const[people,setPeople]= React.useState(data)
  function deleto(id){
    let newp= people.filter((people)=> people.id!==id);
    setPeople(newp)
  }
  return <React.Fragment>
    {
      people.map((person) =>{
        const {id,name}= person;
        return <div key={id} className='item'>
          <h5>{name}</h5>
          <button className='item' onClick={()=> deleto(id)}>Delete item</button>
        </div>
      })}
    
  </React.Fragment>
};

export default UseStateArray;
