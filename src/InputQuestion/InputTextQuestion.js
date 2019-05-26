import React from 'react'

const InputTextQuestion = (props) => {
    return (<div class="field">
        <label>{props.label}</label>
        <input type="text" name={props.label} placeholder={props.label} />
    </div>)
}

export default InputTextQuestion