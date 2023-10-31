import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState('no')); ['no',function]
  //  const value = useState('hello')[0];
  //  const fun = useState('hello')[1];
  //  console.log(fun);

  const [count,setCount] = useState(0);

  const handleClick = () =>{
    setCount(count+1);
  }
    
  return <div>
    <h4>You clicked {count} times</h4>
    <button type="button" className="btn" onClick={handleClick}>Click me</button>
  </div>;
};

export default UseStateBasics;
