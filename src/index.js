import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Bills from './Bills';
import ShowBudget from './ShowBudget';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<Bills />} />
        <Route path="bills" element={<Bills />} />
        <Route path="showBudget" element={<ShowBudget />} />
        <Route path="board/:id" element={<board />} />
      </Route>
    </Routes>
</BrowserRouter>,
  document.getElementById('root')
);
