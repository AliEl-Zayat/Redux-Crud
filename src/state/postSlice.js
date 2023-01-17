import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { records: [], loading: false, error: null };
export const fetchPosts = createAsyncThunk(
  "posts/fetchposts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/posts");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error, "tt7");
      return rejectWithValue(error.message);
    }
  }
);
export const deletePosts = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // fetch posts
    [fetchPosts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    },
    // create posts

    // delete posts
    [deletePosts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deletePosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = state.records.filter((el) => el.id !== action.payload);
    },
    [deletePosts.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    },
    //edit posts
  },
});

export default postSlice.reducer;
