import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet, Link } from "react-router-dom";
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Outlet />
      </header>
    </div>
  );
}

export default App;
