import React from 'react'

import TextQuestion from '../Questions/Text'

// import ThreeFields from '../Layout/TwoFields';

import ChemicalSearch from './ChemicalSearch'
import HazardSearch from './HazardSearch'
import FormWidth from '../Layout/FormWidth';

const InputChemical = (props) => {
    return (
    <FormWidth>
        <ChemicalSearch
            label={props.chemicalLabel}
            placeholder={props.chemical}
        />
        <TextQuestion
            label={props.quantityLabel}
            placeholder={props.quantity} 
        />
        <FormWidth>
            <HazardSearch
                label={props.hazardLabelOne} 
                placeholder="#1"
            />
            <HazardSearch
                label={props.hazardLabelTwo} 
                placeholder="#2"
            />
            <HazardSearch
                label={props.hazardLabelThree}
                placeholder="#3"
            />
        </FormWidth>
    </FormWidth>
    )
}

export default InputChemical
