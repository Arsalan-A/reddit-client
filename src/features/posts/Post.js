import React from 'react';
import './post.css';
import { RiMessage2Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import { selectPosts } from './postSlice';

const Post = () => {
  const posts = useSelector(selectPosts);
  const renderPosts = posts.map((post) => {
    return (
      <div key={post.id} className='post-container'>
        <div className='post-data'>
          <h2 className='post-title'>{post.title}</h2>
          {post.img.includes('.jpg') && <img src={post.img} alt={post.title} />}

          <div className='post-line'></div>
          <div className='post-info'>
            <p>Votes: {post.votes}</p>
            <p className='post-poster'>{post.user}</p>
            <p className='post-hrs'>{post.post_time}</p>
            <div className='post-btn-container'>
              <button className='post-btn'>
                <RiMessage2Line />
              </button>
              <p>{post.comments_num}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div className='post-main-container'>{renderPosts}</div>;
};

export default Post;
