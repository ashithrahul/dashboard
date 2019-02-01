import * as firebase from 'firebase';
import React from 'react';

const prodConfig = {
  apiKey: 'AIzaSyASaQfEVA7pHLwsM3DDQbPr-36nUYOrkJk',
  authDomain: 'react-boilerplate-64b67.firebaseapp.com',
  databaseURL: 'https://react-boilerplate-64b67.firebaseio.com',
  projectId: 'react-boilerplate-64b67',
  storageBucket: 'react-boilerplate-64b67.appspot.com',
  messagingSenderId: '656330136025',
};

const devConfig = {
  apiKey: 'AIzaSyASaQfEVA7pHLwsM3DDQbPr-36nUYOrkJk',
  authDomain: 'react-boilerplate-64b67.firebaseapp.com',
  databaseURL: 'https://react-boilerplate-64b67.firebaseio.com',
  projectId: 'react-boilerplate-64b67',
  storageBucket: 'react-boilerplate-64b67.appspot.com',
  messagingSenderId: '656330136025',
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.firestore();
    this.auth = firebase.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export const FireBaseContext = React.createContext({});
export const AuthUserContext = React.createContext({});

export const withFirebase = Component => props => (
  <FireBaseContext.Consumer>
    {firebaseConfig => <Component {...props} {...firebaseConfig} />}
  </FireBaseContext.Consumer>
);

export const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      this.listener = this.props.auth.onAuthStateChanged(authUser => {
        authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push('/home');
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return withFirebase(WithAuthorization);
};

export default Firebase;
