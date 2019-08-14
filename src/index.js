import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {featureReducer} from './reducers/featureReducer'

import 'bulma/css/bulma.css';
import './styles.scss';

export const store = createStore(featureReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
