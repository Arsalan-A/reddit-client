import React from 'react';
import './App.css';
import Card from '../components/Card';
import Search from '../features/search/Search';

function App() {
  return (
    <div className='App'>
      <Search />
      <div className='app-body'>
        <Card />
      </div>
    </div>
  );
}

export default App;
