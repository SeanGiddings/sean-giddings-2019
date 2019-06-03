import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LandingPage />, document.getElementById('root'));

// If you want your LandingPage to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
