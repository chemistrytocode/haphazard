import React from 'react'
import { Dropdown } from 'semantic-ui-react';

    const SingleDropdown = (props) => {

        // const collection = props.collection.map((x) => {return(<option value={x}>{x}</option>)});

        const collection = props.collection.map((option, index) => ({
            key: option[index],
            text: option,
            value: option,
        }))

          
        return (
        <div class="field">
            <label>{props.label}</label>
            <Dropdown
                placeholder='Select Room'
                fluid
                selection
                options={collection} />
        </div>)
}

export default SingleDropdown