import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Service from './service.js';

class App extends Component {
    state = {};

    componentWillMount(){
      let budget = Service.getBudget();
      this.setState({...budget})
    }

    saveBudget(){
      Service.saveBudget(this.state);
    }

    removeCharacter = index => {
        const { bills } = this.state;

        this.setState({
            bills: bills.filter((character, i) => {
                return i !== index;
            })
        });
        this.saveBudget();
    }

    handleSubmit = bill => {
        this.setState({bills: [...this.state.bills, bill]});
        this.saveBudget();
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
