import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import InfoForm from './components/InfoForm'
import Notification from './components/Notification'
import contactService from './services/persons'



const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ style, setStyle] = useState('success')

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    // luodaan yhteystietoja vastaava olio
    const names = persons.map(person => person.name)
    console.log(names)
    if (!names.includes(newName)) {
      const contactInfo = {
        name: newName,
        number: newNumber,
      }
      contactService
      .create(contactInfo)
      .then(returnedContact => {
        console.log(returnedContact)
        setPersons(persons.concat(returnedContact))
        setNewName('')
        setNewNumber('')
        setNotification(`${newName} added to phonebook`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
      .catch(error => {
        console.log(error.response.data)
        setStyle('error')
        setNewName('')
        setNewNumber('')
        setNotification(error.response.data.error)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
    }
    else {
      if (window.confirm(`${newName} is already in phonebook,
          replace the old number with a new one?`)) {
        const contact = persons.find(person => person.name === newName)
        const changedContact = {...contact, number: newNumber}
        console.log(changedContact)
        contactService
          .update(contact._id, changedContact)
          .then(returnedContact => {
            setPersons(persons.map(person => person._id !== contact._id ? person : returnedContact))
            console.log(persons)
            setStyle('success')
            setNotification(`${newName}'s number changed to ${changedContact.number}`)
            setTimeout(() => {
            setNotification(null)
            }, 5000)
          })
          .catch(error => {
            setStyle('error')
            setNotification(`${newName} has already been deleted from server ${changedContact.number}`)
            setTimeout(() => {
            setNotification(null)
            }, 5000)
            setPersons(persons.filter(p => p._id !== contact._id))
          })
      }
    } 
  }
  
 
  const handleNameChange = (event) => {
    console.log('value changed to: ', event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('value changed to: ', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log('value changed to: ', event.target.value)
    setNewFilter(event.target.value)
  }

  const filteredContacts = (newFilter === '')
    ? persons 
    : persons.filter(info => 
      info.name.toLowerCase().includes(newFilter.toLowerCase())
      || info.number.includes(newFilter))
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} style={style} />
      <Filter filter={newFilter} handler={handleFilterChange} />
      <h2>Add new</h2>
      <InfoForm 
        addName={addName} 
        newName={newName}
        newNumber={newNumber}
        nameHandler={handleNameChange}
        numberHandler={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Numbers
        contacts={filteredContacts} 
        setPersons={setPersons}
        persons={persons}
        setNotification={setNotification}
        style={setStyle}
      />

    </div>
  )
}


export default App
