import { createSlice } from "@reduxjs/toolkit"
import { statusFilters } from "./constants"

const filtersInitialState = {
    status: statusFilters.all
}

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: filtersInitialState,
    reducers: {
        changeFilter(state, action){
            return {
                status: action.payload
            }
        }
    },
})

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions