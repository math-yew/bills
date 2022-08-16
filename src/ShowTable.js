import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Total</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.budgetData.map((row, index) => {
        return (
            <tr key={index}>
                <td> {row.name}</td>
                <td>{row.amount}</td>
                <td>{row.prettyDate}</td>
                <td>{row.total}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const ShowTable = (props) => {
    const { removeBill, budgetData} = props;
        return (
            <table>
                <TableHeader />
                <TableBody budgetData={budgetData} removeBill={removeBill} />
            </table>
        );
}

export default ShowTable;
