import React from 'react'
import PersonWithNumber from './PersonWithNumber'

const Persons = ({ persons, filter }) => {
  const ignoreCase = (person) => (
    person.name.toLowerCase().includes(
      filter.toLowerCase()
    )
  )
  return (
    <ul>
      {persons.filter(ignoreCase).map(person => <PersonWithNumber key={person.name} person={person} />)}
    </ul>
  )
}

export default Persons