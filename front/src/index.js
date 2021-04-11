import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StoreProvider from './Components/Context/StoreProvider';
import App from './App';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
