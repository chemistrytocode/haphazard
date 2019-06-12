import React from 'react'

import NumberQuestion from '../Questions/Number'

import ThreeFields from '../Layout/ThreeFields';

import ChemicalSearch from './ChemicalSearch'
import HazardSearch from './HazardSearch'

const InputChemical = (props) => {
    return (
    <ThreeFields>
        <ChemicalSearch
            label={props.chemical} 
        />
        <NumberQuestion
            label={props.quantity} 
        />
        <HazardSearch
            label={props.hazard} 
        />
    </ThreeFields>
    )
}

export default InputChemical