import React, { useEffect } from 'react';
import {
  fetchSubreddits,
  fetchSubredditPosts,
  fetchPostComments,
} from '../api';

const Subreddit = () => {
  useEffect(async () => {
    const data = await fetchSubreddits();
    const postData = await fetchSubredditPosts('r/home');
    // get all subreddit names
    data.map((data) => {
      console.log(data.display_name);
    });

    const postComments = await fetchPostComments('r/home', 't887rc');

    console.log(postData);
    console.log(postComments);
  }, []);

  return <div>Subreddit</div>;
};

export default Subreddit;
