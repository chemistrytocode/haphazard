import React from 'react'

const Number = (props) => {
    return (<div class="field">
        <label>{props.label}</label>
        <input type="number" name={props.label} placeholder={props.label} />
    </div>)
}

export default Number