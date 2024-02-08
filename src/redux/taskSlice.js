import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { deleteTask, fetchTasks, addTask, toggleCompleted } from "./operations";

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    extraReducers(builder){
      builder
        .addCase(fetchTasks.fulfilled, (state, action) => {
          state.items = action.payload;
        })
        .addCase(addTask.fulfilled, (state, action) => {
          state.items.push(action.payload)
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
          const index = state.items.findIndex((task) => task.id === action.payload.id)
          state.items.splice(index, 1)
        })
        .addCase(toggleCompleted.fulfilled, (state, action) => {
          const index = state.items.findIndex((task) => task.id === action.payload.id)
          state.items.splice(index, 1, action.payload)
        })
        .addMatcher(isAnyOf(fetchTasks.pending, addTask.pending, deleteTask.pending, toggleCompleted.pending), (state) => {
          state.isLoading = true;
        })
        .addMatcher(isAnyOf(fetchTasks.rejected, addTask.rejected, deleteTask.rejected, toggleCompleted.rejected), (state, action) => {
          state.error = action.payload;
        })
        .addMatcher(isAnyOf(fetchTasks.fulfilled, addTask.fulfilled, deleteTask.fulfilled, toggleCompleted.fulfilled), (state, action) => {
          state.isLoading = false;
          state.error = null;
        })
    }
})

export const taskReducer = taskSlice.reducer;