import React from 'react';
import './App.css';
import Card from './components/Card';
import Subreddit from './components/Subreddit';
import Search from './features/search/Search';

function App() {
  return (
    <div className='App'>
      <Search />
      <div className='app-body'>
        <Card />
        <Subreddit />
      </div>
    </div>
  );
}

export default App;
