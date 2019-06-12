import React from 'react'
import { Dropdown } from 'semantic-ui-react';

    const MultipleDropdown = (props) => {

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
                multiple
                selection
                options={collection} />
        </div>)
}

export default MultipleDropdown