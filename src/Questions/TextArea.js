import React from 'react'
import { Form, TextArea } from 'semantic-ui-react';

const TextAreaQuestion = (props) => {
    return (
        <Form.Field 
            control={TextArea} 
            label='Apparatus' 
            placeholder='Enter apparatus you need...'
            style={{ minHeight: 120 }} />
    )
}

export default TextAreaQuestion