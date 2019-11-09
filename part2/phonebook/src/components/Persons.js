import React from 'react'
import Person from './Person'

const Persons=(props)=>{
    let persons=[...props.list]
    let filter=props.filter
    
    const showNumbers = () => {
        if (filter.length < 1) {
          return <div>
            {persons.map(person => <Person person={person} key={person.number}></Person>)}
          </div>
        }
    
        else {
          return <div>
            {persons.map(person => {
              if (person.name.toLowerCase().includes(filter.toLowerCase()))
                return <Person person={person} key={person.number}/>
            })
            }
          </div>
    
        }
      }
    
return showNumbers()
}

export default Persons