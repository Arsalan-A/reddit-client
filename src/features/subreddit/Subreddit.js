import React, { useEffect } from 'react';
import './subreddit.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits, loadSubreddits } from './subredditSlice';
import white from '../../assets/white.PNG';
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
    // async function fetchData() {
    //   const data = await fetchSubreddits();
    //   const postData = await fetchSubredditPosts('r/home');
    //   // get all subreddit names
    //   data.map((data) => {
    //     console.log(data.display_name);
    //   });

    //   const postComments = await fetchPostComments('r/home', 't887rc');

    //   console.log(postData);
    //   console.log(postComments);
    // }

    // fetchData();
    dispatch(loadSubreddits());
  }, []);

  const onClickHandler = (e, subreddit) => {
    console.log(subreddit);
  };

  const titles = allSubreddits.map((subreddit, index) => {
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
