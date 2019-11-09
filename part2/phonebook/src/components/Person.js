import React from 'react'

const Person=({person})=>{ 
return <li key={person.name} > Name: {person.name}<br />Number: {person.number}</li>}

export default Person