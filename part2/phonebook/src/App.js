import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '12345678' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const stopSbumit = (event) => {
    event.preventDefault()
    let names = [...persons]
    let newItem = { name: newName, number: newNumber }

    if (persons.map((person) => person.name).indexOf(newItem.name) > -1) { window.alert(`${newName} is already added to the phonebook!`) }
    else {
      setNewName('')
      setNewNumber('')
      names.push(newItem)
      setPersons(names)
    }
  }

  const showNumbers = () => {
    return <div>
      {persons.map(person => <li key={person.name} > Name: {person.name}<br />Number: {person.number}</li>)}
    </div>
  }
  const changeName = (event) => setNewName(event.target.value)
  const changeNumber = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={stopSbumit}>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
        <div>number: <input value={newNumber} onChange={changeNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>
        <h2>Numbers</h2>
        {showNumbers()}
      </div>
    </div>
  
  )
}

export default App