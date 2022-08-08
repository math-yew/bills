import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.bills.map((row, index) => {
        return (
            <tr key={index}>
                <td> {row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { removeCharacter, bills} = props;
        return (
            <table>
                <TableHeader />
                <TableBody bills={bills} removeCharacter={removeCharacter} />
            </table>
        );
}

export default Table;
