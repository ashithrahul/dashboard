import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import rootSaga from 'sagas/index';
import rootReducer from 'reducers/index';

import middleware, { sagaMiddleware } from './middleware';

const reducer = combineReducers({ ...rootReducer });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* istanbul ignore next */
const configStore = (initialState = {}) => {
  const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('reducers', () => {
      store.replaceReducer(require('reducers/index').default);
    });
  }

  return {
    store,
  };
};

const { store } = configStore();

global.store = store;

export { store };
