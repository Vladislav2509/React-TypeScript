import { createSlice } from "@reduxjs/toolkit";

import { APIstatus, getPosts } from "../../api/fetchPosts";



const initialState = {
  postsStatus: { status: APIstatus.IDLE },
  postData: [],
};

export const fetchPostsSlice = createSlice({
  name: "Fetch Posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.postsStatus.status = APIstatus.PENDING;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.postsStatus.status = APIstatus.FULFILLED;
        state.postData = action.payload.results;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.postsStatus.status = APIstatus.REJECTED;
      });
  },
});

export const { reducer: postsReducer, actions: postActions } = fetchPostsSlice;