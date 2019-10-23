import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )

}

const Part = (props) => {
  return (<div>
    <p>{props.part} {props.exercises}</p>
  </div>)

}

const Content = (props) =>
  props.parts.map(content =>
    <Part key={content.id} part={content.name} exercises={content.exercises} />

  )


const Total = (props) => {

  const reducer = (total, current) => total + current
  return (
    <div>
      <h1>Number of exercises {props.num.map(parts => parts.exercises).reduce(reducer)}</h1>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total num={course.parts} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))