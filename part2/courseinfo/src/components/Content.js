import React from 'react';
import Part from './Part';

const Content = (props) =>
    props.parts.map(content =>
        <Part key={content.id} part={content.name} exercises={content.exercises} />

    )

export default Content