import { configureStore } from '@reduxjs/toolkit';
import allSubredditsReducer from '../features/subreddit/subredditSlice';
import allPostsReducer from '../features/posts/postSlice';
import searchReducer from '../features/search/searchSlice';
export const store = configureStore({
  reducer: {
    allSubreddits: allSubredditsReducer,
    allPosts: allPostsReducer,
    search: searchReducer,
  },
});
