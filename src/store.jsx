import { configureStore, createSlice } from "@reduxjs/toolkit";

/* eslint-disable no-case-declarations */
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



//! New Style
export const store = configureStore({
    reducer: {
        taskReducer,
    },
});


// Step 3: Log the initial state 
console.log("initial State: ", store.getState());

// Step 4: Dispatch an action to add a task 
store.dispatch(addTask("Good Morning!"));
store.dispatch(addTask("Good Afternoon!"));
store.dispatch(addTask("Good Night"));
console.log("updated State: ", store.getState());






