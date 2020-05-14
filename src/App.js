import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import Header from './App/containers/header/Header.js';
import Body from './App/containers/body/Body.js';
import { history } from './App/service/History';

function App() {

  history.listen((location, action) => {
    // location is an object like window.location
    console.log(action, location.pathname, location.state);
  });

  return (
    <Router history={history} >
      <Header />
      <Body />
    </Router>
  );
}

export default App;
