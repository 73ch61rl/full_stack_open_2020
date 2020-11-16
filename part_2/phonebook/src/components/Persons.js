import React from 'react'

const PersonWithNumber = ({person}) => (
    <li>{person.name} {person.number}</li>
  )

const Persons = ({persons}) => {  
    return (
      <ul>
        {persons.map(person => <PersonWithNumber key={person.name} person={person}/>)}
      </ul>
    )
  }

export default Persons