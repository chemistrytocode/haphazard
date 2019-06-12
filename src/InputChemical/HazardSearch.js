import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const hazardSearch = 
[
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Harmful' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Irritant' },
    { key: 'af', value: 'af', flag: 'af', text: 'Corrosive' },
    { key: 'as', value: 'as', flag: 'as', text: 'Environmental Hazard' },
    { key: 'al', value: 'al', flag: 'al', text: 'Toxic' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Flammable' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Explosive' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Oxidising' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Health Hazard' }
]

const HazardSearch = (props) => (
    <div class="field">
    <label>{props.label}</label>
    <Dropdown
        placeholder={`Select ${props.label}`}
        search
        selection
        options={hazardSearch}
    />
    </div>
)

export default HazardSearch
