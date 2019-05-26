import React from 'react'

    const InputSingleDropdownQuestion = (props) => {
        const roomList = props.rooms.map((x) => {return(<option value={x}>{x}</option>)});
        
        return (
        <div class="field">
            <label>{props.label}</label>
            <select class="ui fluid dropdown">
                    {roomList}  
            </select>

        </div>)
}

export default InputSingleDropdownQuestion