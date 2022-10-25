import React, {Component} from 'react';

class PurchaseForm extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            amount: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.purchaseSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, amount } = this.state;

        return (
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
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default PurchaseForm;
