import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import history from 'modules/history';
import DashBoard from '../pages/DashBoard/DashBoard.route';
import '../global.css';
import Login from '../pages/Login/Login';
import Public from '../pages/Public/Public';
import SignUp from '../pages/SignUp/SignUp';
import Firebase, { FireBaseContext } from './FireBase';

export class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  render() {
    return (
      <FireBaseContext.Provider value={new Firebase()}>
        <Router history={history}>
          <Fragment>
            <Route exact path="/" component={Public} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/dashboard" component={DashBoard} />
          </Fragment>
        </Router>
      </FireBaseContext.Provider>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
