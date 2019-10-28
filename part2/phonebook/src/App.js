import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')


  const stopSbumit = (event) => {
    event.preventDefault()
    let names = [...persons]
    let newItem = { name: newName }

    if (persons.map((person) => person.name).indexOf(newItem.name) > -1) { window.alert(`${newName} is already added to the phonebook!`) }
    else {
      setNewName('')
      names.push(newItem)
      setPersons(names)
    }
  }

  const showNumbers = () => {
    return <div>
      {persons.map(person => <li key={person.name} > {person.name}</li>)}
    </div>
  }
  const changeName = (event) => setNewName(event.target.value)


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={stopSbumit}>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
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