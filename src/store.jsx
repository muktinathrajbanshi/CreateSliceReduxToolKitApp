import { configureStore, createSlice } from "@reduxjs/toolkit";

//  eslint-disable no-case-declarations 
// const ADD_TASK = "task/add";
// const DELETE_TASK = "task/delete";
// const FETCH_TASKS = "task/fetch";


const initialState = {
    task: [],
};

//? RTK slice
const taskReducer = createSlice({
    name: "task",
    initialState,
    reducers:{
        addTask(state, action) {},
        deleteTask(state, action) {},
    },
});


const {addTask, deleteTask} = taskReducer.actions;


//! New Style
export const store = configureStore({
    reducer: {
        taskReducer,
    },
});


// Step 3: Log the initial state 


// Step 4: Dispatch an action to add a task 






