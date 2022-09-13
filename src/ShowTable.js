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
      let color = row.past ? "#ddd" : "#fff";
      let background = {backgroundColor: color};
      if(row.name=="Needs" && (row.amount == 0 || row.amount == "NaN")){
        console.log("NO NEEDS");
        return;
      }
        return (
            <tr key={index} style={background}>
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
