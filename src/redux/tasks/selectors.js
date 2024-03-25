import { statusFilters } from "./constants";
import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = state => state.tasks.items;
export const selectFiltersStatus = state => state.filters.status;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;

export const visibleTasks = createSelector([selectTasks, selectFiltersStatus], (tasks, statusFilter) => {
    return tasks.filter((task) => {
        switch(statusFilter){
            case statusFilters.active:
                return !task.completed;
            case statusFilters.completed:
                return task.completed;
            default:
                return task;
            }
        })
})

export const selectCount = createSelector([selectTasks], (tasks) => {
    return tasks.reduce((acc, task) => {
        if(task.completed){
          acc.completed++;
        }else{
          acc.active++;
        }
        return acc;
      },
      {active: 0, completed: 0})
})