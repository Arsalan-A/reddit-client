import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostComments } from '../../api';
import moment from 'moment';

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (subredditInfo) => {
    const { subreddit, postId } = subredditInfo;
    const data = await fetchPostComments(subreddit, postId);
    return data;
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  hasError: false,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    clearComments: (state, action) => {
      state.comments = [];
    },
  },
  extraReducers: {
    [getComments.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getComments.fulfilled]: (state, action) => {
      const allComments = action.payload.map((comment) => {
        return {
          postId: comment.parent_id.substring(3),
          user: comment.author,
          comment: comment.body,
          postedTime: moment.unix(comment.created_utc).fromNow(),
        };
      });

      //if comments already has the post's comments dont push those comments again
      if (
        state.comments.filter(
          (comment) => comment.postId === allComments[0].postId
        ).length === 0
      ) {
        allComments.map((comment) => state.comments.push(comment));
      }

      state.isLoading = false;
      state.hasError = false;
    },
    [getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectComments = (state) => state.comments.comments;
export const { clearComments } = commentsSlice.actions;
export default commentsSlice.reducer;
