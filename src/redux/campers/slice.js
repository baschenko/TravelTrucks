import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, getCamperInfo } from './operations.js';
// import { fetchTasks, addTask, deleteTask } from './operations';
// import { logOut } from '../auth/operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    data: {
      items: [],
      total: 0,
    },
    camper: null,
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
      })
      .addCase(getCamperInfo.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCamperInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      })
      .addCase(getCamperInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
