import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { WirengApp } from './WelcApp';

import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <WirengApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
