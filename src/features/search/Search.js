import React from 'react';
import logo from '../../assets/reddit-logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from './searchSlice';
import './search.css';

const Search = () => {
  const searchterm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleSearchTerm = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <div className='search-container'>
      <div className='search-logo'>
        <img src={logo} alt='logo' className='reddit-logo' />
        <p>Reddit Client</p>
      </div>

      <input
        placeholder='Search'
        className='search-input'
        type='text'
        value={searchterm}
        onChange={handleSearchTerm}
      />
    </div>
  );
};

export default Search;
