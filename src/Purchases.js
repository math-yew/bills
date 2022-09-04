import React from 'react';

const PurchaseTableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const PurchaseTableBody = props => {
    const rows = props.purchases.map((row, index) => {
        return (
            <tr key={index}>
                <td> {row.name}</td>
                <td>{row.amount}</td>
                <td><button onClick={() => props.removePurchase(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Purchases = (props) => {
    const { removePurchase, purchases} = props;
        return (
            <table>
                <PurchaseTableHeader />
                <PurchaseTableBody purchases={purchases} removePurchase={removePurchase} />
            </table>
        );
}

export default Purchases;
