import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://69b549c7be587338e7158009.mockapi.io/"

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);