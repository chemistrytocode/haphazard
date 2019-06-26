import React from 'react'
import { Form } from 'semantic-ui-react'


const chemicalSearch = [
  { key: '0', value: 'Hydrochloric Acid', text: 'Hydrochloric Acid', icon: 'loading flask' },
  { key: '1', value: 'Sulphuric Acid', text: 'Sulphuric Acid', icon: 'loading flask' },
  { key: '2', value: 'Nitric Acid', text: 'Nitric Acid', icon: 'loading flask' },
  { key: '4', value: 'Barium Chloride', text: 'Barium Chloride', icon: 'loading cubes' },
  { key: '5', value: 'Lithium Chloride', text: 'Lithium Chloride', icon: 'loading cubes' },
  { key: '6', value: 'Sodium Chloride', text: 'Sodium Chloride', icon: 'loading cubes' },
  { key: '7', value: 'Strontium Chloride', text: 'Strontium Chloride', icon: 'loading cubes' },
  { key: '8', value: 'Lead Nitrate', text: 'Lead Nitrate', icon: 'loading cubes' },
  { key: '9', value: 'Ethanol', text: 'Ethanol', icon: 'loading flask' },
  { key: '10', value: 'Propanol', text: 'Propanol', icon: 'loading flask' },
  { key: '11', value: 'Methanol', text: 'Methanol', icon: 'loading flask' }
]


const ChemicalSearch = (props) => (

  <Form.Select
        placeholder={props.placeholder}
        label={props.label}
        clearable
        fluid
        search
        selection
        options={chemicalSearch}
    />
  )

export default ChemicalSearch
