import React, { useEffect } from 'react';
import './comment.css';
import { useSelector, useDispatch } from 'react-redux';
import { getComments, selectComments } from './commentSlice';

const Comment = ({ postId, subreddit }) => {
  //console.log(postId);
  const dispatch = useDispatch();

  //select state
  const comments = useSelector(selectComments);

  useEffect(() => {
    dispatch(getComments({ subreddit, postId }));
  }, [dispatch, postId, subreddit]);

  //only render comments for the post clicked
  const renderComments = comments.map((comment, index) => {
    if (postId === comment.postId) {
      return (
        <div key={index} className='comment-container'>
          <div className='comment-heading'>
            <p className='comment-poster'>{comment.user}</p>
            <p className='comment-hrs'>{comment.postedTime}</p>
          </div>

          <p className='comment-body'>{comment.comment}</p>
        </div>
      );
    }
  });
  return <>{renderComments}</>;
};

export default Comment;
