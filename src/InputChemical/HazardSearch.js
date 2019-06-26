import React from 'react'
import { Form } from 'semantic-ui-react'

const hazardSearch = 
[
    { key: '0', value: 'None', text: 'None', icon: 'check square outline' },
    { key: '1', value: 'Harmful', text: 'Harmful', icon: 'close' },
    { key: '2', value: 'Irritant', text: 'Irritant', icon: 'times circle outline' },
    { key: '3', value: 'Corrosive', text: 'Corrosive', icon: 'flask' },
    { key: '4', value: 'Environmental Hazard', text: 'Environmental Hazard', icon: 'envira' },
    { key: '5', value: 'Toxic', text: 'Toxic', icon: 'dont' },
    { key: '6', value: 'Flammable', text: 'Flammable', icon: 'fire' },
    { key: '7', value: 'Explosive', text: 'Explosive', icon: 'bomb' },
    { key: '8', value: 'Oxidising', text: 'Oxidising', icon: 'fire' },
    { key: '9', value: 'HealthHazard', text: 'Health Hazard', icon: 'heart' }
]

const HazardSearch = (props) => (
    <Form.Select
        placeholder={props.placeholder}
        label={props.label}
        clearable
        search
        selection
        options={hazardSearch}
    />
)

export default HazardSearch
