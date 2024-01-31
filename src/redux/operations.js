import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65b92f2bb71048505a8a6156.mockapi.io/';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, thunkAPI) => {
    try {
        const res = await axios.get('tasks');
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue('Упс, помилка')
    }
});

export const addTask = createAsyncThunk('tasks/addTask', async (text, thunkAPI) => {
    try {
        const res = await axios.post('tasks', {text})
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Упс, помилка')
    }
})