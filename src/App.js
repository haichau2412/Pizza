import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Menu from './components/layout/Content/Menu/Menu';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import SideBar from './components/layout/Content/SideBar/SideBar';
import routes from './components/layout/Content/SideBar/routes';
import ContentWrapper from './components/layout/ContentWrapper';



function App() {

  return (
    <>
      <Header></Header>
      <ContentWrapper />
    </>
  );
}

export default App;
