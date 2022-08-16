import React, { useState, useEffect } from 'react';

import ShowTable from './ShowTable';
import BudgetService from './budgetService';

export default function ShowBudget (props) {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()*1 + 1;
    let nextMonth = month + 1;
    let day = today.getDate();
    console.log("date: " + today);
    const [budgetData, setBudgetData] = useState([]);
    const [startTime, setStartTime] = useState(year+"-"+month+"-"+day);
    const [endTime, setEndTime] = useState(year+"-"+nextMonth+"-"+day);

    function getTimePeriod(){
      let budgetArr = BudgetService.getTimePeriod(startTime, endTime);
      setBudgetData(budgetArr);
    }

    return(
      <div>
        <h1>Budget</h1>
        <label>Start Time</label>
        <input type="date" value={startTime} onChange={e => setStartTime(e.target.value)} />
        {startTime}
        <label>End Time</label>
        <input type="date" value={endTime} onChange={e => setEndTime(e.target.value)} />
        {endTime}
        <button onClick={getTimePeriod}>getTimePeriod</button>
        <ShowTable
            budgetData={budgetData}
        />
      </div>
    )
}
