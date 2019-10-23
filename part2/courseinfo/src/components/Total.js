import React from 'react';

const Total = (props) => {

    const reducer = (total, current) => total + current
    return (
        <div>
            <h1>Number of exercises {props.num.map(parts => parts.exercises).reduce(reducer)}</h1>
        </div>
    )
}

export default Total