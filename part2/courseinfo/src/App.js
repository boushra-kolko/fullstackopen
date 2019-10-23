import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Total from './components/Total';
import Header from './components/Header';

const App = ({ courses }) => {

  const showContent = (c) => {
    return (<>
      <Header courseName={c.name} key={c.id} />
      <Content parts={c.parts} key={c.id} />
      <Total num={c.parts} key={c.id} />
    </>)
  }

  return (<div>
    <h1>Web development curriculum</h1>
    {
      courses.map(c => showContent(c))}
  </div>
  );
}

export default App;
