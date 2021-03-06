// Polyfills
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { store } from 'store/index';

import App from 'containers/App';

export const app = {
  cssRetries: 0,
  fetchRetries: 0,

  run() {
    this.render(App);

    /* istanbul ignore else */
    // if (process.env.NODE_ENV === 'production') {
    //   this.initOfflinePlugin();
    // }
  },
  render(Component) {
    const root = document.getElementById('react');

    /* istanbul ignore next */
    if (root) {
      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <Component />
          </Provider>
        </AppContainer>,
        root,
      );
    }
  },
};

app.run();

/* istanbul ignore next  */
if (module.hot) {
  module.hot.accept('containers/App', () => app.render(App));
}
