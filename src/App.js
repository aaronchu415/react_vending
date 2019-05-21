import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from './components/VendingMachine'
import './App.css';

function App() {
  return (
    <div className="App">
      <VendingMachine />
    </div>
  );
}

export default App;
