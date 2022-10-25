import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            amount: '',
            date: '',
            freq: '',
            income: '',
            disable: false
        };
        this.state = this.initialState;
    }

    componentDidUpdate(prevProps) {
      if(!this.props.showEdit && (this.props.showEdit !== prevProps.showEdit)){
        this.setState({...this.initialState});
      } else if (this.props.editRecord.name !== prevProps.editRecord.name) {
          this.setState({...this.props.editRecord});
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        this.props.showModal();
    }

    render() {
        const { name, amount, date, freq, income } = this.state;
        let editBill = this.props.editBill;
        if(!!editBill){
          this.setState(editBill);
        }

        return (
          <div className="modalSpace" style={{display:this.props.show}}>
            <h1 className="modalExist" onClick={() => this.props.showModal()}>X</h1>
            <h3>Add New</h3>
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="amount">Amount</label>
                <input
                    type="text"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={this.handleChange} />
                <label htmlFor="amount">Date</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={this.handleChange} />
                <label htmlFor="amount">Frequency</label>
                <input
                    type="text"
                    name="freq"
                    id="freq"
                    value={freq}
                    onChange={this.handleChange} />
                <label htmlFor="amount">Income?</label>
                <input
                    type="checkbox"
                    name="income"
                    id="income"
                    value="true"
                    onChange={this.handleChange} />
                <br />
                <button type="submit">
                    {this.props.showEdit ? "Update" : "Submit"}
                </button>
            </form>
          </div>
        );
    }
}

export default Form;
