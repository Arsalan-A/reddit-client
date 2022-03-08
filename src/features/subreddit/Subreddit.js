import React from 'react';
import './subreddit.css';
// import {
//   fetchSubreddits,
//   fetchSubredditPosts,
//   fetchPostComments,
// } from '../../api';

const Subreddit = () => {
  return (
    <div className='subreddit-container'>
      <h2>Subreddits</h2>
      <div className='subreddit-content active'>
        <div className='subreddit-titles '>
          <div className='subreddit-img-container'>
            <img src='' alt='' />
          </div>

          <p>Home</p>
        </div>
      </div>
    </div>
  );
};

export default Subreddit;

// useEffect(async () => {
//   const data = await fetchSubreddits();
//   const postData = await fetchSubredditPosts('r/home');
//   // get all subreddit names
//   data.map((data) => {
//     console.log(data.display_name);
//   });

//   const postComments = await fetchPostComments('r/home', 't887rc');

//   console.log(postData);
//   console.log(postComments);
// }, []);
