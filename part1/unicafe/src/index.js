import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avarage, setAvarage] = useState(0)
  const goodClick =()=>{
    
    setTotal(total+1)
    setAvarage(avarage+1)
    console.log(total)
    return setGood(good+1)
  }

  
  const neutrallClick =()=>{
    
    setTotal(total+1)
    setAvarage(avarage+0)
    return setNeutral(neutral+1)
  }

  
  const badClick =()=>{
    
    setTotal(total+1)
    setAvarage(avarage-1)
    return setBad(bad+1)
  }

  const showAvarage =()=>{

    if (avarage===0) return <div>Avarage :0</div>
    else return <div>Avarage :{avarage/total}</div>
  }

  const showPositive=()=>{

    if (total===0) return <div>Positive :0</div>
    else return <div>Positive :{(good/total)*100} %</div>

  }

  return (
    <div>
     <h1>Give feedback</h1>
     <br/>
     <button onClick={goodClick}>
       Good
       </button> 
       
     <button onClick={neutrallClick}>
       Neutral
       </button>
       
     <button onClick={badClick}>
       Bad
       </button>
       <h1>Statistics</h1>
       <br/>
       Good : {good}<br/>
       Neutral : {neutral}<br/>
       Bad :  {bad}<br/>
        {showAvarage()}
       All : {total}<br/>
       {showPositive()}

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)