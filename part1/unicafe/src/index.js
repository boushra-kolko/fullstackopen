import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticsShow=(props)=>{

  const showAvarage =()=>{

    if (props.avarage===0) return <div>Avarage :0</div>
    else return <div>Avarage :{props.avarage/props.total}</div>
  }

  const showPositive=()=>{

    if (props.total===0) return <div>Positive :0</div>
    else return <div>Positive :{(props.good/props.total)*100} %</div>

  }

  const showStat=()=>{
if(props.total===0) return <div>No feedback given!</div>
else
    return <div>
    Good : {props.good}<br/>
    Neutral : {props.neutral}<br/>
    Bad :  {props.bad}<br/>
     {showAvarage()}
    All : {props.total}<br/>
    {showPositive()}</div>
  }

  return <div>
  
  <br/>
  {showStat()}
  </div>


}
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
       
      <StatisticsShow good={good} bad={bad} neutral={neutral} total={total} avarage={avarage} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)