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
      console.log("Save Budget:");
      console.log(this.state);
      Service.saveBudget(this.state);
    }

    removeBill = index => {
        const { bills } = this.state;

        this.setState({
            bills: bills.filter((character, i) => {
                return i !== index;
            })
        },this.saveBudget);
    }

    handleSubmit = bill => {
        this.setState({bills: [...this.state.bills, bill]},this.saveBudget);
    }

    render() {
        const { bills } = this.state;
        return (
            <div className="container">
                <h1>Bills and Expenses</h1>
                <p>Here's the list of bill and expenses for the budget.</p>
                <Table
                    bills={bills}
                    removeBill={this.removeBill}
                />

                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;
