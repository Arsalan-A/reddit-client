import React from 'react';
import './card.css';
import { RiMessage2Line } from 'react-icons/ri';

const Card = () => {
  return (
    <div className='card-container'>
      <div className='card-data'>
        <h2 className='card-title'>This is a Post</h2>
        <img src='https://i.redd.it/m8p7y2ieutl81.jpg' alt='placeHolder' />
        <div className='card-line'></div>
        <div className='card-info'>
          <p>Votes: 16</p>
          <p className='card-poster'>Coin-Wizaed</p>
          <p className='card-hrs'>6 hours ago</p>
          <div className='card-btn-container'>
            <button className='card-btn'>
              <RiMessage2Line />
            </button>
            <p>14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
