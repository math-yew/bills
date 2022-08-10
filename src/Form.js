import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            amount: '',
            date: '',
            freq: '',
            income: ''
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
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, amount, date, freq, income } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label for="amount">Amount</label>
                <input
                    type="text"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={this.handleChange} />
                <label for="amount">Date</label>
                <input
                    type="text"
                    name="date"
                    id="date"
                    value={date}
                    onChange={this.handleChange} />
                <label for="amount">Frequency</label>
                <input
                    type="text"
                    name="freq"
                    id="freq"
                    value={freq}
                    onChange={this.handleChange} />
                <label for="amount">Income?</label>
                <input
                    type="text"
                    name="income"
                    id="income"
                    value={income}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
