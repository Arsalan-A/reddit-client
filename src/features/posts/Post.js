import React, { useState } from 'react';
import Comment from '../comments/Comment';
import './post.css';
import { useSelector } from 'react-redux';
import { RiMessage2Line } from 'react-icons/ri';

import { setToggle } from './postSlice';
import { selectFilteredPosts } from './postSlice';

import { useDispatch } from 'react-redux';

const Post = () => {
  //dispatch
  const dispatch = useDispatch();

  //redux state
  const posts = useSelector(selectFilteredPosts);
  const { isLoading, toggle } = useSelector((state) => state.allPosts);

  // //local State
  // const [toggle, setToggle] = useState(false);

  const toggleHandler = (index) => {
    // setToggle({
    //   ...toggle,
    //   [index]: !toggle[index],
    // });
    dispatch(setToggle(index));
  };

  //render not Found div
  const notFound = (
    <div className='post-container'>
      <div className='post-data'>
        <h1 className='post-not-found'>No Posts Found</h1>
      </div>
    </div>
  );

  //render posts div
  const renderPosts = posts.map((post, index) => {
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
              <button className='post-btn' onClick={() => toggleHandler(index)}>
                <RiMessage2Line />
              </button>
              <p>{post.comments_num}</p>
            </div>
          </div>
          {toggle[index] && (
            <Comment postId={post.id} subreddit={post.subreddit} />
          )}
        </div>
      </div>
    );
  });
  return (
    <div className='post-main-container'>
      {posts.length === 0 && !isLoading ? notFound : renderPosts}
    </div>
  );
};

export default Post;
