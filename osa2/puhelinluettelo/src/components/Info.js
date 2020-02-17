import React from 'react'
import contactService from '../services/persons'
const Info = ({info, setPersons, persons, setNotification, style}) => {

  const handleRemove = () => {
    if (window.confirm(`Delete ${info.name}?`)) {
		console.log('id to remove: ', info._id)
		contactService
          .remove(info._id) 
          .then(() => {
            const copy = persons.filter(person => person !== info)
            console.log('before deleting: ', persons)
            console.log('after deleting: ', copy)
            setPersons(copy)
            style('success')
            setNotification(`${info.name} deleted`)
            setTimeout(() => {
            setNotification(null)
            }, 5000)
          }) 
    }
  }

    return (
      <div>
        {info.name} {info.number} 
        <button onClick={handleRemove}>delete</button>
      </div>
    )
  }

  export default Info