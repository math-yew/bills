import React, { useState, useEffect } from 'react';

import ShowTable from './ShowTable';
import BudgetService from './budgetService';

export default function ShowBudget (props) {
    let initalDates = BudgetService.initialDates();

    const [budgetData, setBudgetData] = useState([]);
    const [startTime, setStartTime] = useState(initalDates.start);
    const [endTime, setEndTime] = useState(initalDates.end);

    function getTimePeriod(){
      let budgetArr = BudgetService.getTimePeriod(startTime, endTime);
      setBudgetData(budgetArr);
    }

    return(
      <div>
        <h1>Budget</h1>
        <p>
          Start Time
          <input className="dateInput" type="date" value={startTime} onChange={e => setStartTime(e.target.value)} />

          End Time
          <input className="dateInput" type="date" value={endTime} onChange={e => setEndTime(e.target.value)} />
        </p>
        <button onClick={getTimePeriod}>getTimePeriod</button>
        <ShowTable
            budgetData={budgetData}
        />
      </div>
    )
}
