import React from 'react';
import './App.css';

import Form from './Components/Form/Form';
import List from './Components/List/List';

function App() {
  return (
    <div className='app-container'>
      <nav className='nav-brand'>
        <h3>To-Do List</h3>
      </nav>
      <Form />
      <hr/>
      <List />
    </div>
  );
}

export default App;
