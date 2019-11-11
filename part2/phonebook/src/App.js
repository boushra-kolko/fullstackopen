import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons';
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => { 
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
    },[])
  const stopSbumit = (event) => {
    event.preventDefault()
    let names = [...persons]
    let newItem = { name: newName, number: newNumber }

    if(newName.length===0|| newNumber.length===0) window.alert('You can\'t add an empty name or empty number')
    else if (persons.map((person) => person.name).indexOf(newItem.name) > -1) 
    { window.alert(`${newName} is already added to the phonebook!`) }
    else {
      setNewName('')
      setNewNumber('')
      names.push(newItem)
      setPersons(names)
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
        <Filter nFilter={newFilter} onchange={changefilter} />
      </div><br />
      <h2>Add New Number</h2>
      <PersonForm onsubmit={stopSbumit} newName={newName} changeName={changeName} newNumber={newNumber} changeNumber={changeNumber} />
      <div>
        <h2>Numbers</h2>
        <Persons list={persons} filter={newFilter}/>
      </div>
    </div>
  )
}

export default App