import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubreddits } from '../../api';

export const loadSubreddits = createAsyncThunk(
  'allSubreddits/getAllSubreddits',
  async () => {
    const data = await fetchSubreddits();
    return data.map((subreddit) => {
      return {
        name: subreddit.display_name,
        img: subreddit.icon_img,
      };
    });
  }
);

const initialState = {
  subreddits: [],
  isLoading: false,
  hasError: false,
};

export const allSubredditsSlice = createSlice({
  name: 'allSubredits',
  initialState,
  reducers: {},
  extraReducers: {
    [loadSubreddits.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadSubreddits.fulfilled]: (state, action) => {
      state.subreddits = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadSubreddits.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectSubreddits = (state) => state.allSubreddits.subreddits;
export default allSubredditsSlice.reducer;
