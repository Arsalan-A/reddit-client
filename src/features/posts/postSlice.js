import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubredditPosts } from '../../api';
import { selectSearchTerm } from '../search/searchSlice';
import moment from 'moment';

export const getPosts = createAsyncThunk(
  'allPosts/getAllPosts',
  async (subredditName) => {
    const data = await fetchSubredditPosts(`r/${subredditName}`);
    return data;
  }
);

const initialState = {
  posts: [],
  isLoading: false,
  hasError: false,
};

export const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState,
  reducers: {},
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
export default allPostsSlice.reducer;
