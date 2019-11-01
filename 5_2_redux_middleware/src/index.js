import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/modules';
import { Provider } from 'react-redux';
import middleware from './middleware';

import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(middleware, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
