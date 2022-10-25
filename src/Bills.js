import React, { Component, useState } from 'react';
import Table from './Table';
import Form from './Form';
import Service from './service.js';
import Purchases from './Purchases.js';
import PurchaseForm from './PurchaseForm.js';

class Bills extends Component {
    state = {
      show:"none",
      showEdit:false,
      editRecord: null
    };

    // const [showEdit, setShowEdit] = useState(false);

    componentWillMount(){
      let budget = Service.getBudget();
      this.setState({...budget});
      this.setState({editRecord:{name:null}});
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

    openAdd = () => {
      this.setState({showEdit:false});
      this.showModal();
    }

    openEdit = index => {
      let record = this.state.bills[index];
      record.index = index;
      this.setState({editRecord:record});
      this.setState({showEdit:true});
      this.showModal();
    }

    changeBill = index => {
        const { bills } = this.state;
        this.setState({
          index: index,
          editBill: bills[index]
        })
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
      if(this.state.showEdit){
        console.log(this.state.showEdit + "start" + this.showEdit);
        let billsCopy = this.state.bills;
        let index = this.state.editRecord.index;
        billsCopy.splice(index,1,bill);
        this.setState({bills: billsCopy},this.saveBudget);
        console.log("end" +this.showEdit);
      } else {
        this.setState({bills: [...this.state.bills, bill]},this.saveBudget);
      }
    }

    purchaseSubmit = bill => {
        this.setState({purchases: [...this.state.purchases, bill]},this.saveBudget);
    }

    showModal = () => {
      let showState = (this.state.show == "none") ? "block" : "none";
      this.setState({show: showState});
      this.setState({showState: true});
    }

    render() {
        const { bills, mileStoneAmount, mileStoneDate, purchases, editBill, show, showEdit, editRecord } = this.state;
        return (
            <div className="container">
              <div className="mainColumn">
                  <h1>Bills and Expenses</h1>
                  <h1>show: {show.toString()}</h1>
                  <h1>{JSON.stringify(this.showEdit)} showEdit: {showEdit.toString()}</h1>

                  <label htmlFor="mileStoneAmount">Latest Amount: </label>
                  <input
                      type="text"
                      name="mileStoneAmount"
                      id="mileStoneAmount"
                      value={mileStoneAmount}
                      onChange={this.updateReserve}/>
                  <label htmlFor="mileStoneAmount">Date: </label>
                  <input
                      type="date"
                      name="mileStoneDate"
                      id="mileStoneDate"
                      value={mileStoneDate}
                      onChange={this.updateReserve} />
                  <button onClick={() => this.saveBudget()}>Update </button>
                  <br/>
                  <button className="showModalButton" onClick={() => this.openAdd()}>+</button>
                  <p>Here's the list of bill and expenses for the budget.</p>
                  <Table
                      bills={bills}
                      removeBill={this.removeBill}
                      openEdit={this.openEdit}
                  />
                  <Form show={show} showEdit={showEdit} editBill={editBill} editRecord={editRecord} showModal={this.showModal} handleSubmit={this.handleSubmit} />
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
