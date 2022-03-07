import React from 'react';
import logo from '../../assets/reddit-logo.png';
import './search.css';

const Search = () => {
  return (
    <div className='search-container'>
      <div className='search-logo'>
        <img src={logo} alt='logo' className='reddit-logo' />
        <p>Reddit Client</p>
      </div>

      <input placeholder='Search' className='search-input' type='text' />
    </div>
  );
};

export default Search;
