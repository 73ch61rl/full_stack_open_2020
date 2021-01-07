import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonService from './services/PersonsService'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const changeName = (event) => setNewName(event.target.value)
  const changePhoneNumber = (event) => setNewNumber(event.target.value)
  const changeFilter = (event) => setFilter(event.target.value)
  const [message, setMessage] = useState(null)

  function nameExists(persons, name) {
    return persons.filter(person => person.name === name).length > 0
  }

  const emptyNameAndPhoneFields = () => {
    setNewName('');
    setNewNumber('');
  };

  useEffect(() => {
    PersonService
      .getAll('')
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const updatePerson = (name) => {
    const previousPerson = persons.find(person => person.name === name)
    const newPerson = { ...previousPerson, number: newNumber }
    PersonService
      .update(newPerson.id, newPerson)
      .then(recievedPerson => {
        setPersons(
          persons.map(
            person =>
              person.id !== previousPerson.id ? person : recievedPerson
          )
        )
        setMessage({ text: `${newPerson.name} was updated.`, isError: false })
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      })
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (nameExists(persons, newName)) {
      const confirmed = window.confirm(`${newName} is already added to a phonebook, replace the old phone number with a new one?`)
      if (confirmed) {
        updatePerson(newName)
        emptyNameAndPhoneFields()
      }
    }
    else {
      createPerson()
    }
  }

  const removePerson = removedPerson => {
    const accepted = window.confirm(`Delete ${removedPerson.name}?`)
    if (accepted) {
      PersonService
        .destroy(removedPerson.id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== removedPerson.id))
          setMessage({ text: `${removedPerson.name} was deleted.`, isError: false })
          setTimeout(() => {
            setMessage(null)
          }, 4000)
        })
        .catch(error => {
          setMessage({ text: `${removedPerson.name} was already removed from the server!`, isError: true })
          console.log(error)
          setTimeout(() => {
            setMessage(null)
          }, 4000)
          setPersons(persons.filter(person => person.id !== removedPerson.id))
        })
    }
  }

  const createPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber
    }
    PersonService
      .create(newPerson)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setMessage({ text: `${newPerson.name} is added to the list.`, isError: false })
        setTimeout(() => {
          setMessage(null)
        }, 4000)
      })
    emptyNameAndPhoneFields()
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} setMessage={setMessage} />
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
      <Persons persons={persons} filter={filter} onDestroy={removePerson} />
    </div>
  )
}

export default App