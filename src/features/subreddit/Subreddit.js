//depencies
import React, { useEffect } from 'react';
import './subreddit.css';
import { useDispatch, useSelector } from 'react-redux';
import white from '../../assets/white.PNG';

//Selectors and actions
import { selectSubreddits, loadSubreddits } from './subredditSlice';
import { getPosts, setToggle } from '../posts/postSlice';
import { clearComments } from '../comments/commentSlice';

const Subreddit = () => {
  const allSubreddits = useSelector(selectSubreddits);
  const dispatch = useDispatch();

  //load home subreddit on load
  useEffect(() => {
    dispatch(loadSubreddits());
    dispatch(getPosts('home'));
  }, [dispatch]);

  //dispatch all actions when clicking the subreddit
  const onClickHandler = (e, subreddit) => {
    dispatch(getPosts(subreddit));
    dispatch(setToggle(-1));
    dispatch(clearComments());
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
