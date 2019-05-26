import React from 'react';
import ReactDOM from 'react-dom';

import InputTextQuestion from './InputQuestion/InputTextQuestion'
import InputNumberQuestion from './InputQuestion/InputNumberQuestion'
import InputSingleDropdownQuestion from './InputQuestion/InputSingleDropdownQuestion'
import InputMultipleDropdownQuestion from './InputQuestion/InputMultipleDropdownQuestion'
import InputFileQuestion from './InputQuestion/InputFileQuestion';

import InputChemical from './InputChemical/InputChemical'
import ChemicalSearch from './InputChemical/ChemicalSearch'

import ThreeFields from './Layout/ThreeFields'

import FormContainer from './FormContainer/FormContainer'
import ChemicalContainer from './InputChemical/ChemicalContainer';


const App = () => {
    return (
    <FormContainer>
        <ThreeFields>
            <InputTextQuestion
                label="Teacher" 
            />
            <InputSingleDropdownQuestion 
                label="Room"
                rooms={["OC1", "OC2", "OC3", "OC4", "OC5", "OC6", "OC7", "OC8", "Project"]}
            />
            <InputMultipleDropdownQuestion 
                label="Period"
                rooms={["1", "2", "3", "4", "5", "6", "7", "8", "After School"]}
            />
        </ThreeFields>
        <ThreeFields>
            <InputTextQuestion
                label="Form" 
            />
            <InputTextQuestion
                label="Description" 
            />
            <InputFileQuestion 
                label="File Upload"
            />
        </ThreeFields>
        {/* <ThreeFields> */}
        <ChemicalContainer />
        <ChemicalSearch />




    
     </FormContainer>
    )
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);