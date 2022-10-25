import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Freq</th>
                <th>Income</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.bills.map((row, index) => {
        return (
            <tr key={index}>
                <td> {row.name}</td>
                <td>{row.amount}</td>
                <td>{row.date}</td>
                <td>{row.freq}</td>
                <td>{row.income}</td>
                <td><button onClick={() => props.removeBill(index)}>Delete</button></td>
                <td><button onClick={() => props.openEdit(index)}>Edit</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { removeBill, bills, openEdit} = props;
        return (
            <table>
                <TableHeader />
                <TableBody bills={bills} removeBill={removeBill} openEdit={openEdit} />
            </table>
        );
}

export default Table;
