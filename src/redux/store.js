import { taskReducer } from "./taskSlice";
import { filterReducer } from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filterReducer,
  }
})