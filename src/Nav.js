import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Nav (props) {

  return(
    <div>
      <Link to={"/bills"}><button className="navButton">Bills</button></Link>
      <Link to={"/showBudget"}><button className="navButton">Budget</button></Link>
    </div>
  )
}
