import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  const invariant = require('redux-immutable-state-invariant').default;

  middleware.push(invariant());
}

export default middleware;
