import React from 'react'
import {Person} from './Person'

export const List = ({people}) => {
   { console.log(people)}
  return (
    <section style={{ display:"flex",alignItems:"flex-start",justifyContent:"center",flexDirection:'column',gap:'1rem',padding:"0 20px" }}>

        {/* {people.map((person)=>{

            return <Person key={person.id} {...person} />
          
        })} */}
    </section>
   
  )
}
