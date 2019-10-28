import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [NewFilter, setNewFilter] = useState('')

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
    if (NewFilter.length < 1) {
      return <div>
        {persons.map(person => <li key={person.name} > Name: {person.name}<br />Number: {person.number}</li>)}
      </div>
    }

    else {
      return <div>
        {persons.map(person => {
          if (person.name.toLowerCase().includes(NewFilter.toLowerCase()))
            return <li key={person.name} > Name: {person.name}<br />Number: {person.number}</li>
        })
        }
      </div>

    }
  }

  const changeName = (event) => setNewName(event.target.value)
  const changeNumber = (event) => setNewNumber(event.target.value)
  const changefilter = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <h3>Filter with: <input value={NewFilter} onChange={changefilter} />
        </h3>
      </div><br/>
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