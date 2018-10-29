import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { notesReducer } from './store/reducers';

const store = createStore(notesReducer, applyMiddleware());

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
  , document.getElementById('root'));
registerServiceWorker();
