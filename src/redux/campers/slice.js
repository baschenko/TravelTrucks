import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCampers, getCamperInfo } from './operations.js';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    total: 0,
    page: 1,
    perPage: 4,
    camper: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearItems(state) {
      state.items = [];
      state.total = 0;
      state.page = 1;
    },

    setPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...payload.items];
        state.total = payload.total;
      })

      .addCase(getCamperInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      })

      .addMatcher(
        isAnyOf(fetchCampers.pending, getCamperInfo.pending),
        state => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(fetchCampers.rejected, getCamperInfo.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { clearItems, setPage } = campersSlice.actions;
export default campersSlice.reducer;
