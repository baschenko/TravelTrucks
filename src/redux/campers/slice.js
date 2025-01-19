import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCampers, getCamperInfo } from './operations.js';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favoriteItem: [],
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

    addToFavorite(state, { payload }) {
      state.favoriteItem = [...state.favoriteItem, payload];
    },

    deleteFromFavorite(state, { payload }) {
      state.favoriteItem = state.favoriteItem.filter(
        favorite => favorite.id !== payload
      );
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

      .addCase(getCamperInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.camper = payload;
      })

      .addMatcher(
        isAnyOf(fetchCampers.pending, getCamperInfo.pending),
        state => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(fetchCampers.rejected, getCamperInfo.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { clearItems, setPage, addToFavorite, deleteFromFavorite } =
  campersSlice.actions;
export default campersSlice.reducer;
