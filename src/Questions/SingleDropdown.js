import React from 'react'
import { Form } from 'semantic-ui-react';

import './Questions.css';

const SingleDropdown = (props) => {

    const collection = props.collection.map((option, index) => ({
        key: option[index],
        text: option,
        value: option,
    }))

    return (
        <Form.Select
            label={props.label}
            placeholder={props.placeholder}
            clearable
            fluid
            selection
            options={collection} />
    );
}

export default SingleDropdown