import React from 'react'

const PersonWithNumber = ({ person, onDestroy }) => (
  <li>{person.name} {person.number} <button onClick={() => onDestroy(person)}>Delete</button></li>
)

export default PersonWithNumber