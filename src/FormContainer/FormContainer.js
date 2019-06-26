import React from 'react';
import { Form, Button } from 'semantic-ui-react'

import './FormContainer.css';

const FormContainer = (props) => {
    return (
        <Form>
            {props.children}
            <Button 
                type='submit' 
                color='green' 
                size='massive'
            >
                Submit
            </Button>
        </Form>
    )
}

export default FormContainer
 