
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/**  base mame added for the github page */}
    <BrowserRouter basename="/GoalMaker">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);