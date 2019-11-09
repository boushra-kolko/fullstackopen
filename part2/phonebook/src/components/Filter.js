import React from 'react'


const Filter = (props) =>{
    
return( <h3>Filter with: <input value={props.nFilter} onChange={props.onchange} />
</h3>)

}

export default Filter