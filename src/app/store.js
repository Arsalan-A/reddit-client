import { configureStore } from '@reduxjs/toolkit';
import allSubredditsReducer from '../features/subreddit/subredditSlice';
import allPostsReducer from '../features/posts/postSlice';
export const store = configureStore({
  reducer: {
    allSubreddits: allSubredditsReducer,
    allPosts: allPostsReducer,
  },
});
