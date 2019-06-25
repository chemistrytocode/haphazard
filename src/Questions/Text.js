import React from 'react'
import { Form } from 'semantic-ui-react'

const Text = (props) => {
    return (
        <Form.Input
            label={props.label}
            placeholder={props.placeholder}
            fluid
       />
    )
}

export default Text