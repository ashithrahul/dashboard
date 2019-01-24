import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Componets/NavBar/NavBar';
import SideBar from './Componets/SideBar/SideBar';
import { ADD_USER, DASHBOARD_URL } from './DashBoard.constants';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

const divStyle = { display: 'flex', flexGrow: 1 };

const DashBoard = () => (
  <Router>
    <Fragment>
      <NavBar />
      <div style={divStyle}>
        <SideBar />
        <Route path={ADD_USER} component={About} />
        <Route exact path={DASHBOARD_URL} component={Home} />
      </div>
    </Fragment>
  </Router>
);

export default DashBoard;
