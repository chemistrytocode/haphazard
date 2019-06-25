import React from 'react';
import { Form } from 'semantic-ui-react';

const FormWidth = (props) => {
    return (
        <Form.Group widths='equal'>
            {props.children}
        </Form.Group>
        )
}

export default FormWidth
 