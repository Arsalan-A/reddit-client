import React, { useEffect } from 'react';
import fetchSubreddit from '../api';

const Card = () => {
  useEffect(async () => {
    const data = await fetchSubreddit();

    // get all subreddit names
    data.map((data) => {
      console.log(data.display_name);
    });
  }, []);

  return <div>Card</div>;
};

export default Card;
