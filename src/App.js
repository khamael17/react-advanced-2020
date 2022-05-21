import React, {useState} from 'react'
import UseStateArray from './tutorial/1-useState/setup/3-useState-array';
import UseStateObject from './tutorial/1-useState/setup/4-useState-object';
import Setup from './tutorial/1-useState/setup/5-useState-counter'
function App() {
const [text,setText]= useState('Moi');
const handle=()=>{
  if(text==='Moi'){setText('Toi')}
  else setText('Moi')
}

  return (
    <div className='container'>
     
     <Setup/>
     <UseStateObject/>
    </div>
  )
}

export default App
