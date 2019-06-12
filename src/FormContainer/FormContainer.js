import React from 'react';

import './FormContainer.css';

const FormContainer = (props) => {
    return (
        <form class="ui form ui segment">
                {props.children}
        </form>
    )
}

export default FormContainer
 