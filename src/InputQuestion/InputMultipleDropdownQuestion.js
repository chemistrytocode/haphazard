import React from 'react'

    const InputMultipleDropdownQuestion = (props) => {
        const roomList = props.rooms.map((x) => {return(<option value={x}>{x}</option>)});
        
        return (
        <div class="field">
            <label>{props.label}</label>
            <select multiple="" name={props.label} class="ui fluid dropdown">
                    {roomList}  
            </select>
        </div>)
}

export default InputMultipleDropdownQuestion