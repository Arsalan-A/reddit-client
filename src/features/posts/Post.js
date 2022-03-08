import React from 'react';
import './post.css';
import { RiMessage2Line } from 'react-icons/ri';

const Post = () => {
  return (
    <div className='post-container'>
      <div className='post-data'>
        <h2 className='post-title'>This is a Post</h2>
        <img src='https://i.redd.it/m8p7y2ieutl81.jpg' alt='placeHolder' />
        <div className='post-line'></div>
        <div className='post-info'>
          <p>Votes: 16</p>
          <p className='post-poster'>Coin-Wizaed</p>
          <p className='post-hrs'>6 hours ago</p>
          <div className='post-btn-container'>
            <button className='post-btn'>
              <RiMessage2Line />
            </button>
            <p>14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
