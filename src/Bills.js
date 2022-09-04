import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Service from './service.js';
import Purchases from './Purchases.js';
import PurchaseForm from './PurchaseForm.js';

class Bills extends Component {
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

    updateReserve= event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    removeBill = index => {
        const { bills } = this.state;

        this.setState({
            bills: bills.filter((character, i) => {
                return i !== index;
            })
        },this.saveBudget);
    }

      removePurchase = index => {
          const { purchases } = this.state;

          this.setState({
              purchases: purchases.filter((character, i) => {
                  return i !== index;
              })
          },this.saveBudget);
      }

    handleSubmit = bill => {
        this.setState({bills: [...this.state.bills, bill]},this.saveBudget);
    }

    purchaseSubmit = bill => {
        this.setState({purchases: [...this.state.purchases, bill]},this.saveBudget);
    }

    render() {
        const { bills, mileStoneAmount, mileStoneDate, purchases } = this.state;
        return (
            <div className="container">
              <div className="mainColumn">
                  <h1>Bills and Expenses</h1>
                  <label for="mileStoneAmount">Latest Amount: </label>
                  <input
                      type="text"
                      name="mileStoneAmount"
                      id="mileStoneAmount"
                      value={mileStoneAmount}
                      onChange={this.updateReserve}/>
                  <label for="mileStoneAmount">Date: </label>
                  <input
                      type="date"
                      name="mileStoneDate"
                      id="mileStoneDate"
                      value={mileStoneDate}
                      onChange={this.updateReserve} />
                  <button onClick={() => this.saveBudget()}>Update </button>
                  <p>Here's the list of bill and expenses for the budget.</p>
                  <Table
                      bills={bills}
                      removeBill={this.removeBill}
                  />

                  <h3>Add New</h3>
                  <Form handleSubmit={this.handleSubmit} />
              </div>
              <div className="purchaseColumn">
                <Purchases
                  purchases={purchases}
                  removePurchase={this.removePurchase}
                />
                <PurchaseForm purchaseSubmit={this.purchaseSubmit} />
              </div>
            </div>
        );
    }
}

export default Bills;
