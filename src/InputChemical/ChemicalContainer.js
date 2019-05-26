import React, { Component } from 'react';
import InputChemical from '../InputChemical/InputChemical';

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
                    chemical={`Chemical-${this.state.counter}`}
                    quantity={`Quantity-${this.state.counter}`}
                    hazard={`Hazard-${this.state.counter}`}
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
            <button onClick={this.addChemical}>Add Chemical</button>
            <button onClick={this.removeChemical}>Remove Chemical</button>
                <InputChemical
                    chemical="Chemical-1"
                    quantity="Quantity-1"
                    hazard="Hazard-1" />
                {this.state.children}
            </div>
        )
    }
}

export default ChemicalContainer
 