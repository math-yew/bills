import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Pic from './pic';
import Modal from './modal';
import BudgetService from './budgetService';

export default function ShowBudget (props) {

    const [dataStr, setDataStr] = useState();

    function getTimePeriod(){
      setDataStr(BudgetService.getTimePeriod());
    }

    return(
      <div>
        <Link to={"/boards"}>Back</Link>
        <h1>Budget</h1>
        {dataStr}
        <button onClick={getTimePeriod}>getTimePeriod</button>
      </div>
    )
}
