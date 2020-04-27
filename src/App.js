import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './App/containers/header/Header.js';
import Body from './App/containers/body/Body.js';



function App() {
  return (
    <Router>
      <Header />
      <Body />
    </Router>
  );
}

export default App;
