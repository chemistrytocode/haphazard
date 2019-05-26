import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const chemicalSearch = [
  { key: 'af', value: 'af', flag: 'af', text: 'Sulphuric Acid' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Hydrochloric Acid' },
  { key: 'al', value: 'al', flag: 'al', text: 'Nitric Acid' },
  { key: 'dz', value: 'dz', flag: 'dz', text: 'Barium Chloride' },
  { key: 'as', value: 'as', flag: 'as', text: 'Lithium Chloride' },
  { key: 'ad', value: 'ad', flag: 'ad', text: 'Sodium Chloride' },
  { key: 'ao', value: 'ao', flag: 'ao', text: 'Strontium Chloride' },
  { key: 'ai', value: 'ai', flag: 'ai', text: 'Lead Nitrate' },
  { key: 'ag', value: 'ag', flag: 'ag', text: 'Ethanol' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Propanol' },
  { key: 'am', value: 'am', flag: 'am', text: 'Methanol' }
]

const ChemicalSearch = () => (
    <div class="field">
  <Dropdown
    placeholder='Select Chemical'
    fluid
    search
    selection
    options={chemicalSearch}
  />
    </div>
)

export default ChemicalSearch
