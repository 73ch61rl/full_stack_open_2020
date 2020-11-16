import React, { useState } from 'react'
import Person from './components/Person'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const changeName = (event) => setNewName(event.target.value)
  const changePhoneNumber = (event) => setNewNumber(event.target.value)

  const addPerson = (event) => {
    //event.preventDefault()
    if (persons.indexOf((newName) !== -1)) {
      window.alert(`${newName} is already added to the phonebook`)
      setNewName('')
      setNewNumber('')
    }
    else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))

    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Add a new person</h2>
      <Person
        AddPerson={addPerson}
        changeName={changeName}
        changePhoneNumber={changePhoneNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App