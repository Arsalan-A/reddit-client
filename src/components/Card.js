import React from 'react';
import './card.css';
import Post from '../features/posts/Post';
import Subreddit from '../features/subreddit/Subreddit';

const Card = () => {
  return (
    <div className='card-container'>
      <Post />
      <Subreddit />
    </div>
  );
};

export default Card;
