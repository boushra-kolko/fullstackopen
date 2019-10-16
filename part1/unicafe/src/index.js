import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props)=>{
return (<div>{props.text+': '} {props.value} </div>)

}

const StatisticsShow = (props) => {

    const showAvarage = () => {

        if (props.avarage === 0) return <div>Avarage :0</div>
        else return <div>Avarage :{props.avarage / props.total}</div>
    }

    const showPositive = () => {

        if (props.total === 0) return <div>Positive :0</div>
        else return <div>Positive :{(props.good / props.total) * 100} %</div>

    }

    const showStat = () => {
        if (props.total === 0) return <div>No feedback given!</div>
        else
            return <div>
              <Statistic text='Good' value={props.good}/>
              <Statistic text='Neutral' value={props.neutral}/>
              <Statistic text='Bad' value={props.bad}/>
                {showAvarage()}
                All : {props.total}<br />
                {showPositive()}</div>
    }

    return <div>

        <br />
        {showStat()}
    </div>
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

            <StatisticsShow good={good} bad={bad} neutral={neutral} total={total} avarage={avarage} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)