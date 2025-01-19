import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

// GET @ /campers
export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page, perPage, filter }, thunkAPI) => {
    try {
      const res = await axios.get(
        `/campers?page=${page}&limit=${perPage}&${filter}`
      );
      return res.data;
    } catch (error) {
      error.status === 404 && toast.error('Not found, try changing filter');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET @ /campers/:camperId
export const getCamperInfo = createAsyncThunk(
  'campers/getCamperInfo',
  async (camperId, thunkAPI) => {
    try {
      const res = await axios.get(`/campers/${camperId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
