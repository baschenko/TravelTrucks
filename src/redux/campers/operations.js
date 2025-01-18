import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

// GET @ /campers
export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/campers');
      return res.data;
    } catch (error) {
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

// GET @ /campers
// export const fetchCampers = createAsyncThunk(
//   'campers/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/campers');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
