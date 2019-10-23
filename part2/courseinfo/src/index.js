import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  console.log(props)
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


const showContent=(c)=>
{
  return(<>
  <Header courseName={c.name} key={c.id} /> 
  <Content parts={c.parts} key={c.id}/>
  <Total num={c.parts} key={c.id}/>
  </>)}
 
  return (
    <div>
      <h1>Web development curriculum</h1>
      {
        courses.map(c => showContent(c)) }
      

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))