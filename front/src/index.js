import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StoreProvider from './Components/Context/StoreProvider';
import App from './App';
import './index.css';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
