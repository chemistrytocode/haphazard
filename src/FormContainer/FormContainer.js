import React from 'react';

const FormContainer = (props) => {
    return (
        <form class="ui form">
                {props.children}
        </form>
    )
}

export default FormContainer
 