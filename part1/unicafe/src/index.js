import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props)=>{
return (<tr><td>{props.text+': '}</td><td>{props.value}</td></tr>)

}

const StatisticsShow = (props) => {

    const showAvarage = () => {

        if (props.avarage === 0) return <tr><td>Avarage :</td><td>0</td></tr>
        else return <tr><td>Avarage :</td><td>{props.avarage / props.total}</td></tr>
    }

    const showPositive = () => {

        if (props.total === 0) return <tr><td>Positive :0</td></tr>
        else return <tr><td>Positive :</td><td>{(props.good / props.total) * 100} %</td></tr>

    }

    const showStat = () => {
        if (props.total === 0) return <tr><td>No feedback given!</td></tr>
        else
            return <>
              <Statistic text='Good' value={props.good}/>
              <Statistic text='Neutral' value={props.neutral}/>
              <Statistic text='Bad' value={props.bad}/>
                {showAvarage()}
                <tr><td> All :</td><td>{props.total}</td></tr>
                {showPositive()}</>
    }

    return <tbody>
        {showStat()}
    </tbody>
}

const Button = (props) =>
{
return (<div>
    <button onClick={props.onClick}>
        {props.text}
    </button>
</div>)
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [avarage, setAvarage] = useState(0)

    const goodClick = () => {

        setTotal(total + 1)
        setAvarage(avarage + 1)
        return setGood(good + 1)
    }


    const neutrallClick = () => {

        setTotal(total + 1)
        setAvarage(avarage + 0)
        return setNeutral(neutral + 1)
    }


    const badClick = () => {

        setTotal(total + 1)
        setAvarage(avarage - 1)
        return setBad(bad + 1)
    }


    return (
        <div>
            <h1>Give feedback</h1>
            <br />
            <Button onClick={goodClick} text='Good'/>
            <Button onClick={neutrallClick} text='Neutral'/>
            <Button onClick={badClick} text='Bad'/>

            <h1>Statistics</h1>
<table>
            <StatisticsShow good={good} bad={bad} neutral={neutral} total={total} avarage={avarage} />
            </table>
             </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')