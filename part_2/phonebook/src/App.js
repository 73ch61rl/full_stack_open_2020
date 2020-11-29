import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const changeName = (event) => setNewName(event.target.value)
  const changePhoneNumber = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])

  function nameExists(persons, name) {
    return persons.filter(person => person.name === name).length > 0
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (nameExists(persons, newName)) {
      window.alert(`${newName} is already added to phonebook!`)
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
      <Filter filter={filter} changeFilter={handleFilterChange} />
      <h2>Add a new person</h2>
      <PersonForm
        addPerson={addPerson}
        changeName={changeName}
        changePhoneNumber={changePhoneNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Person names with phone numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App