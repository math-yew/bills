import React, { useState, useEffect } from 'react';
import budget from './budget.js';

import ShowTable from './ShowTable';
import BudgetService from './budgetService';

export default function ShowBudget (props) {
    let initalDates = BudgetService.initialDates();
    console.log("initalDates: " + JSON.stringify(initalDates));

    const [budgetData, setBudgetData] = useState([]);
    const [startTime, setStartTime] = useState(initalDates.start);
    const [endTime, setEndTime] = useState(initalDates.end);

    function getTimePeriod(){
      let budgetArr = BudgetService.getTimePeriod(startTime, endTime);
      setBudgetData(budgetArr);
    }

    const purchaseList = budget.purchases.map((e,i)=>{
      return(
        <p key={i}><span className="textSpace">{e.name}</span> {e.amount}</p>
      )
    })

    return(
      <div>
        <h1>Budget</h1>
          <div className="mainColumn">
          <p>
            Start Time{startTime}
            <input className="dateInput" type="date" value={startTime} onChange={e => setStartTime(e.target.value)} />

            End Time
            <input className="dateInput" type="date" value={endTime} onChange={e => setEndTime(e.target.value)} />
          </p>
          <button onClick={getTimePeriod}>getTimePeriod</button>
          <ShowTable
              budgetData={budgetData}
          />
        </div>
        <div className="purchaseColumn">
          <h3><u>Needs</u></h3>
          {purchaseList}
        </div>
      </div>
    )
}
