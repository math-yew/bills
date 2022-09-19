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
      let color1 = row.past ? "#ddd" : "#fff";
      let color2 = row.name == "Needs" ? "#ddf" : color1;
      let color = row.income ? "#dfd" : color2;
      let color3 = row.income ? "#0c0" : "#000";
      let fontColor = {color: color3};
      let background = {backgroundColor: color};
      if(row.name=="Needs" && (row.amount == 0 || row.amount == "NaN")){
        console.log("NO NEEDS");
        return;
      }
        return (
            <tr key={index} style={background}>
                <td> {row.name}</td>
                <td style={fontColor}>{row.amount}</td>
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
