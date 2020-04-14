import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import FeaturesReducer from './reducers/FeaturesReducer';
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(FeaturesReducer);
console.log("CreateStore - store:", store);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider>
<App />
</Provider>    , rootElement);
