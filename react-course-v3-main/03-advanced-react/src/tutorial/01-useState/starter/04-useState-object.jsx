import { useState } from 'react';
import {data} from '../../../data';
const UseStateObject = () => {

  const [person,setPerson] = useState({
    name:'peter',
    age:24,
    hobby:'read books'
  });
  const {name,age,hobby} = person;
    
  const displayPerson=()=>{
    setPerson({
      name:'john',
      age:28,
      hobby:'Scream at the computer'
    })
  }


  return(
    <>
    
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h4>Enjoys : {hobby}</h4>
    <button type="button" className='btn' onClick={displayPerson}>show john</button>
    </>
 
  );
};

export default UseStateObject;
