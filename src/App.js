import React from 'react';
import './App.css';
import Header from './App/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './App/Body/Body';


function App() {

  return (
    <Router>
      <Header></Header>
      <Body />
    </Router>
  );
}

export default App;
