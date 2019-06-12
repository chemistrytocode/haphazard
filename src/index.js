import React from 'react';
import ReactDOM from 'react-dom';

import TextQuestion from './Questions/Text'
// import NumberQuestion from './Questions/Number'
import SingleDropdown from './Questions/SingleDropdown'
import MultipleDropdown from './Questions/MultipleDropdown'
import UploadFile from './Questions/FileUpload';

// import InputChemical from './InputChemical/InputChemical'
// import ChemicalSearch from './InputChemical/ChemicalSearch'

import ThreeFields from './Layout/ThreeFields'

import FormContainer from './FormContainer/FormContainer'
import ChemicalContainer from './InputChemical/ChemicalContainer';



// Collection Imports
import periods from './Collections/periods';
import rooms from './Collections/rooms';


const App = () => {
    return (
    <FormContainer>
        <ThreeFields>
            <TextQuestion
                label="Teacher" 
            />
            <TextQuestion
                label="Form" 
            />
            <MultipleDropdown 
                label="Period"
                collection={periods}
            />
        </ThreeFields>
        <ThreeFields>
            <SingleDropdown 
                label="Room"
                collection={rooms}
            />
            <TextQuestion
                label="Description" 
            />
            <UploadFile
                label="File Upload"
            />
        </ThreeFields>
        <ChemicalContainer />




    
     </FormContainer>
    )
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);