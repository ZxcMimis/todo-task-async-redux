import { createSlice, nanoid } from "@reduxjs/toolkit";
import { StatusFilters } from "./constant";

const initialState = {
  tasks: [],
  filter: StatusFilters.all,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleComplete(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addTask, deleteTask, toggleComplete, setStatusFilter } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;