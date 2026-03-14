import { createSlice } from "@reduxjs/toolkit";
import { StatusFilters } from "./constant";
import { fetchTasks, addTask, deleteTask, toggleComplete } from "./operations";

const initialState = {
  tasks: [],
  filter: StatusFilters.all,
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      })
      .addCase(toggleComplete.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index].completed = action.payload.completed;
        }
      });
  },
});

export const { setStatusFilter } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;