import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubredditPosts } from '../../api';
import { selectSearchTerm } from '../search/searchSlice';
import moment from 'moment';
import { allSubredditsSlice } from '../subreddit/subredditSlice';

export const getPosts = createAsyncThunk(
  'allPosts/getAllPosts',
  async (subredditName) => {
    const data = await fetchSubredditPosts(`r/${subredditName}`);
    return data;
  }
);

const initialState = {
  posts: [],
  toggle: false,
  isLoading: false,
  hasError: false,
};

export const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState,
  reducers: {
    setToggle: (state, action) => {
      if (action.payload === -1) {
        state.toggle = {};
      } else {
        state.toggle = {
          ...state.toggle,
          [action.payload]: !state.toggle[action.payload],
        };
      }
    },
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getPosts.fulfilled]: (state, action) => {
      const posts = action.payload.map((post) => {
        return {
          id: post.id,
          title: post.title,
          img: post.url,
          user: post.author,
          votes: post.ups,
          comments_num: post.num_comments,
          post_time: moment.unix(post.created_utc).fromNow(),
          subreddit: post.subreddit_name_prefixed,
        };
      });
      state.posts = posts;
      state.isLoading = false;
      state.hasError = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectPosts = (state) => state.allPosts.posts;
export const selectFilteredPosts = (state) => {
  const allPosts = selectPosts(state);
  const searchTerm = selectSearchTerm(state);

  return allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
export const selectToggle = (state) => state.allPosts.toggle;
export const { setToggle } = allPostsSlice.actions;
export default allPostsSlice.reducer;
