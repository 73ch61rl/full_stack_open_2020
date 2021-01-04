import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/PersonsService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const changeName = (event) => setNewName(event.target.value)
  const changePhoneNumber = (event) => setNewNumber(event.target.value)
  const changeFilter = (event) => setFilter(event.target.value)

  useEffect(() => {
    personService
      .getAll('')
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  function nameExists(persons, name) {
    return persons.filter(person => person.name === name).length > 0
  }

  const updatePerson = (name) => {
    const previousPerson = persons.find(p => p.name === name)
    const updatedPerson = {...previousPerson, number: newNumber}

    personService
      .update(updatedPerson.id, updatedPerson)
      .then(returnedPerson => {
        setPersons(
          persons.map(
            person =>
              person.id !== previousPerson.id ? person: returnedPerson
            )
          )
        })
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (nameExists(persons, newName)) {
      const confirmed = window.alert(`${newName} is already added to phonebook!`)
      if (confirmed) {
        updatePerson(newName)
      }
    }
    else {
      createPerson()
    }
  }

  const deletePerson = removedPerson => {
    const accepted = window.confirm(`Delete ${removedPerson.name}?`)
    if (accepted) {
      personService
        .destroy(removedPerson.id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== removedPerson.id))
        })
    }
  }

  const createPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber
    }

    personService
      .create(newPerson)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
      })
    setNewName('')
    setNewNumber('')
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      <h2>Add a new person</h2>
      <PersonForm
        addPerson={addPerson}
        changeName={changeName}
        changePhoneNumber={changePhoneNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Person names with phone numbers</h2>
      <Persons persons={persons} filter={filter} onDestroy={deletePerson} />
    </div>
  )
}

export default App