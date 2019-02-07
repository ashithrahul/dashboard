import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import Table from '../../components/Table/Table';
import { withAuthentication, withAuthorization } from '../../containers/FireBase';
import AddUser from './Componets/AddUser/AddUser';
import ListUser from './Componets/ListUser/ListUser';
import NavBar from './Componets/NavBar/NavBar';
import SideBar from './Componets/SideBar/SideBar';
import { ADD_USER, DASHBOARD_URL, LIST_USER } from './DashBoard.constants';

const Home = () => (
  <div>
    <Card
      child={
        <div>
          <Input />
        </div>
      }
    />
    <Card
      child={
        <div>
          <Table />
        </div>
      }
    />
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

const divStyle = { display: 'flex', height: '100%' };
const contentWrapper = {
  padding: '20px',
  height: 'calc(100% - 70px)',
  overflow: 'auto',
  width: '100%',
};

const DashBoard = props => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div style={divStyle}>
          <SideBar />
          <div style={contentWrapper}>
            <Route path={ADD_USER} component={AddUser} />
            <Route path={LIST_USER} component={ListUser} />
            <Route exact path={DASHBOARD_URL} component={Home} />
          </div>
        </div>
      </Fragment>
    </Router>
  );
};

const condition = authUser => !!authUser;


export default withAuthentication(withAuthorization(condition)(DashBoard));
