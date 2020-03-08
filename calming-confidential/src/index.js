// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { browserHistory } from 'react-router';
import './Pinned.css';
import './bootstrap.css'

import Routes from './routes';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);

registerServiceWorker();
