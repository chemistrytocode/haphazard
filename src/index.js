import React from 'react';
import ReactDOM from 'react-dom';

import TextQuestion from './Questions/Text'
import TextAreaQuestion from './Questions/TextArea'
// import NumberQuestion from './Questions/Number'
import SingleDropdown from './Questions/SingleDropdown'
import MultipleDropdown from './Questions/MultipleDropdown'
import UploadFile from './Questions/FileUpload';

import FormWidth from './Layout/FormWidth'
import FormContainer from './FormContainer/FormContainer'
import ChemicalContainer from './InputChemical/ChemicalContainer';

import periods from './Collections/periods';
import rooms from './Collections/rooms';


const App = () => {
    return (
    <FormContainer>
        <h1 align="center">Practical Order</h1>
        <FormWidth>
            <TextQuestion
                label="Teacher" 
                placeholder="Enter Teacher Initials"
            />
            <TextQuestion
                label="Form" 
                placeholder="Enter Form Group"
            />
            <SingleDropdown 
                label="Room"
                placeholder="Select a Room"
                collection={rooms}
            />
        </FormWidth>
        <FormWidth>
            <MultipleDropdown 
                    label="Period"
                    placeholder="Select Period(s)"
                    collection={periods}
            />
            <TextQuestion
                label="Practical Description" 
                placeholder="Enter Description"

            />
            <UploadFile
                label="UploadFile" 
            />
        </FormWidth>
        <TextAreaQuestion
                label="Apparatus"
                placeholder="Enter any Apparatus you require"
            />
        <ChemicalContainer />

     


     </FormContainer>
    )
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);
