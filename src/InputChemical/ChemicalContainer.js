import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import InputChemical from './InputChemical';

class ChemicalContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            children: [],
            counter: 2
        }
    }

    addChemical = (event) => {
        event.preventDefault();
        this.setState({ 
            children: [
                ...this.state.children,
                <InputChemical
                    chemical={`Chemical #${this.state.counter}`}
                    quantity={`Quantity #${this.state.counter}`}
                />
            ],
            counter: this.state.counter + 1
        });
    }

    removeChemical = (event) => {
        event.preventDefault();
        let chemicals = this.state.children;
        chemicals.pop();
        if (this.state.counter > 2) {
            this.setState({ 
                children: [...chemicals],
                counter: this.state.counter - 1
            });
        }
    }

    render() {
        return(
            <div>
                <h1 class="ui header" align="center">Chemical Entry</h1>
                <div align="center">
                <Button.Group>
                    <Button onClick={this.addChemical} positive>Add Chemical</Button>
                    <Button.Or text='OR' />
                    <Button onClick={this.removeChemical} negative>Remove Chemical</Button>
                </Button.Group>
                </div>
                <InputChemical
                    chemical="Chemical #1"
                    chemicalLabel="Chemical"
                    quantity="Quantity #1"
                    quantityLabel="Quantity"
                    hazard="Hazard #1"
                    hazardLabelOne="Hazard #1"
                    hazardLabelTwo="Hazard #2"
                    hazardLabelThree="Hazard #3"
                />
                {this.state.children}
            </div>
        )
    }
}

export default ChemicalContainer
 