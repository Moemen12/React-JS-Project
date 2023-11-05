import React from 'react'

export const Person = ({image,name,age}) => {
  return (
   <article className='person'>
      <img src={image} alt={name} className='img' />
     <div>
      <h4>{name}</h4>
      <p>{age} years</p>
     </div>
   </article>
  )
}
