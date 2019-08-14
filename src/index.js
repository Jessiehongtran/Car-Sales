import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import {featureReducer} from './reducers/featureReducer'

import 'bulma/css/bulma.css';
import './styles.scss';

export const store = createStore(featureReducer)

console.log('store', store)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, rootElement);
