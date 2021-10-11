import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots,requestRobots } from './reducers';
import 'tachyons'; 

const rootReducer = combineReducers({searchRobots,requestRobots});
const logger = createLogger();
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();