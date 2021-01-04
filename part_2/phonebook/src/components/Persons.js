import React from 'react'
import PersonWithNumber from './PersonWithNumber'

const Persons = ({ persons, filter, onDestroy }) => {
  const ignoreCase = (person) => (
    person.name.toLowerCase().includes(
      filter.toLowerCase()
    )
  )
  return (
    <ul>
      {persons.filter(ignoreCase).map(person => <PersonWithNumber key={person.name} person={person} onDestroy={onDestroy}/>)}
    </ul>
  )
}

export default Persons