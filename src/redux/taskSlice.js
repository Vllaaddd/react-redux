import { createSlice } from "@reduxjs/toolkit"
import { fetchTasks } from "./operations";
import { addTask } from "./operations";

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    extraReducers(builder){
      builder
        .addCase(fetchTasks.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        })
        .addCase(fetchTasks.rejected, (state, action) => {
          state.error = action.payload;
        })
        .addCase(addTask.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addTask.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload)
        })
        .addCase(addTask.rejected, (state, action) => {
          state.error = action.payload;
        })
    }
})

export const taskReducer = taskSlice.reducer;