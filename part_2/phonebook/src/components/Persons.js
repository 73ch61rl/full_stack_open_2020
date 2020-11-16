import React from 'react'

const PersonWithNumber = ({person}) => (
    <li>{person.name} {person.number}</li>
  )

const Persons = ({persons, filter}) => {
  const ignoreCase = (person) => (
    person.name.toLowerCase().includes(
      filter.toLowerCase()
    )
  )  
    return (
      <ul>
        {persons.filter(ignoreCase).map(person => <PersonWithNumber key={person.name} person={person}/>)}
      </ul>
    )
  }

export default Persons