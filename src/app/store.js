import { configureStore } from '@reduxjs/toolkit';
import allSubredditsReducer from '../features/subreddit/subredditSlice';

export const store = configureStore({
  reducer: {
    allSubreddits: allSubredditsReducer,
  },
});
