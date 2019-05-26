import React from 'react'

const InputFileQuestion = (props) => {
    return (<div class="field">
        <label>{props.label}</label>
        <input type="file" name={props.label} placeholder={props.label} />
    </div>)
}

export default InputFileQuestion