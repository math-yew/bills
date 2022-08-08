import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import budget from './budget.js';

class App extends Component {
    state = {
      ...budget
    };

    removeCharacter = index => {
        const { bills } = this.state;

        this.setState({
            bills: bills.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = bill => {
        this.setState({bills: [...this.state.bills, bill]});
    }

    render() {
        const { bills } = this.state;
        let test = "potato";
        return (
            <div className="container">
            <p>state: {JSON.stringify(this.state)}</p>
            <br/>
            <p>bills: {JSON.stringify(this.state.bills)}</p>
                  <h1>React Tutorial {this.state.mileStoneDate}</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    bills={bills}
                    removeCharacter={this.removeCharacter}
                />

                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;
