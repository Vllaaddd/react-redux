import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65b92f2bb71048505a8a6156.mockapi.io/';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, thunkAPI) => {
    try {
        const res = await axios.get('tasks');
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
});

export const addTask = createAsyncThunk('tasks/addTask', async (text, thunkAPI) => {
    try {
        const res = await axios.post('tasks', {text})
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId, thunkAPI) => {
    try {
        const res = await axios.delete(`tasks/${taskId}`)
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const toggleCompleted = createAsyncThunk('filters/toggleCompleted', async (task, thunkAPI) => {
    try {
        const res = await axios.put(`tasks/${task.id}`, {completed: !task.completed})
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})