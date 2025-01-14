import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /campers
export const fetchTasks = createAsyncThunk(
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
