import React from 'react'

import InputTextQuestion from '../InputQuestion/InputTextQuestion'
import InputNumberQuestion from '../InputQuestion/InputNumberQuestion'

import ThreeFields from '../Layout/ThreeFields';

import ChemicalSearch from './ChemicalSearch'

const InputChemical = (props) => {
    return (
    <ThreeFields>
        <ChemicalSearch
            label={props.chemical} 
        />
        <InputNumberQuestion
            label={props.quantity} 
        />
        <InputTextQuestion
            label={props.hazard} 
        />
    </ThreeFields>
    )
}

export default InputChemical