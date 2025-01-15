import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations.js';
// import { fetchTasks, addTask, deleteTask } from './operations';
// import { logOut } from '../auth/operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    data: {
      items: [],
      total: 0,
    },
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
