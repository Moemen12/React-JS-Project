import React from 'react'

export const Person = ({persons}) => {
  console.log(persons);
  return (
   <article className='person'>
      <img style={{ width:"100px",height:"100px",borderRadius:"50%" }} src={image} alt={name} className='img' />
     <div>
      <h4>{name}</h4>
      <p>{age} years</p>
     </div>
   </article>
  )
}
