import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from '../../components/Card/Card';
import NavBar from './Componets/NavBar/NavBar';
import SideBar from './Componets/SideBar/SideBar';
import { ADD_USER, DASHBOARD_URL } from './DashBoard.constants';

const Home = () => (
  <div>
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
    <Card child={<div>adsasdasda</div>} />
  </div>
  );
const About = () => <div>About</div>;

const divStyle = { display: 'flex', height: '100%' };
const contentWrapper = { padding: '20px', height: 'calc(100% - 70px)', overflow: 'auto', width:'100%' };

const DashBoard = () => (
  <Router>
    <Fragment>
      <NavBar />
      <div style={divStyle}>
        <SideBar />
        <div style={contentWrapper}>
        <Route path={ADD_USER} component={About} />
        <Route exact path={DASHBOARD_URL} component={Home} />
        </div>
      </div>
    </Fragment>
  </Router>
);

export default DashBoard;
