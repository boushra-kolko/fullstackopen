import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import Connect from './Connect'
import './App.css';

function App() {
  const [country, setCountry] = useState('')
  const DataList = Connect()

  const stopSubmit = (event) => { event.preventDefault() }
  const changeCountry = (event) => { setCountry(event.target.value) }
  const showCountries = () => {
    let x = []
    if (DataList.length > 0 && country.length > 0) {
      let filteredCountry = country.trim().toLowerCase()
      x = DataList.filter(element => element.name.trim().toLowerCase().includes(filteredCountry))
      if (x.length > 10) return <div>
        Too many matches, specify another filter.
   </div>

      else if (x.length == 1) return <div>
        <h3>{x[0].name}</h3><br /><br />
        Capital: {x[0].capital}<br />
        Population: {x[0].population}<br />
        <h4>Langauges: </h4>{x[0].languages.map(language => { return <div key={language.name}> {language.name}<br /></div> })}
        <img src={x[0].flag} height='100' width='100' ></img>
      </div>
      else if (x.length == 0) return <div>
        No matches found.
  </div>

      else return <div>
        {x.map(country => {
          return <div key={country.name}> {country.name}<br /></div>
        })}
      </div>
    }

  }

  return (
    <div>
      <form onSubmit={stopSubmit}>
        Find countries: <input type='text' value={country} onChange={changeCountry}></input>
      </form>
      {showCountries()}
    </div>
  );
}

export default App;
