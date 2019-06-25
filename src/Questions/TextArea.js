import React from 'react'
import { Form } from 'semantic-ui-react';

const TextArea = (props) => {
    return (
    <Form.Input
        control={TextArea}
        label={props.label}
        placeholder={props.placeholder}
    />
    )
}

export default TextArea