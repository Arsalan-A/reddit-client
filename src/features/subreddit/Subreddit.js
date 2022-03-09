//depencies
import React, { useEffect } from 'react';
import './subreddit.css';
import { useDispatch, useSelector } from 'react-redux';
import white from '../../assets/white.PNG';

//Selectors and actions
import { selectSubreddits, loadSubreddits } from './subredditSlice';
import { selectPosts, getPosts } from '../posts/postSlice';

import {
  fetchSubreddits,
  fetchSubredditPosts,
  fetchPostComments,
} from '../../api';

const Subreddit = () => {
  const allSubreddits = useSelector(selectSubreddits);
  const dispatch = useDispatch();
  //console.log(allSubreddits);
  useEffect(() => {
    async function fetchData() {
      const postData = await fetchSubredditPosts('r/home');

      //   const postComments = await fetchPostComments('r/home', 't887rc');
    }

    fetchData();
    dispatch(loadSubreddits());
    dispatch(getPosts('home'));
  }, [dispatch]);

  const onClickHandler = (e, subreddit) => {
    dispatch(getPosts(subreddit));
  };

  //render the titles for subreddits based on the fethced data
  const titles = allSubreddits.map((subreddit, index) => {
    //Set the image to the fethed data or white image
    const img = subreddit.img !== '' && subreddit.img ? subreddit.img : white;
    return (
      <div
        key={index}
        className='subreddit-content'
        onClick={(e) => onClickHandler(e, subreddit.name)}
      >
        <div className='subreddit-titles '>
          <img src={img} alt='' />

          <p>{subreddit.name}</p>
        </div>
      </div>
    );
  });

  return (
    <div className='subreddit-container'>
      <h2>Subreddits</h2>
      {titles}
    </div>
  );
};

export default Subreddit;
