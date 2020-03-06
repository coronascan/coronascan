import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BgProvider } from './contexts/BgContext';

ReactDOM.render(
  <Router>
    <BgProvider>
      <App />
    </BgProvider>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
