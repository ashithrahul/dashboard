import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import history from 'modules/history';
import DashBoard from '../pages/DashBoard/DashBoard.route';
import '../global.css';

const App1 = () => <div>aoo</div>;

export class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Router history={history}>
        <Fragment>
          <Route exact path="/" component={App1} />
          <Route path="/dashboard" component={DashBoard} />
        </Fragment>
      </Router>
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
