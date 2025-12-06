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
        addTask(state, action) {
            state.task.push(action.payload);
            // state.task = [...state.task, action.payload],
        },
        deleteTask(state, action) {
            state.task = state.task.filter(
             (curTask, index) => index !== action.payload);
        },
    },
});


export const {addTask, deleteTask} = taskReducer.actions;


//! New Style
export const store = configureStore({
    reducer: {
        taskReducer: taskReducer.reducer,
    },
});


// Step 3: Log the initial state 
console.log(store.getState());


// Step 4: Dispatch an action to add a task 
console.log(store.dispatch(addTask("Buy Mango")));
console.log(store.getState());

console.log(store.dispatch(addTask("Buy Grapes")));
console.log(store.dispatch(deleteTask(1)));
console.log(store.getState());


console.log(store.dispatch(addTask("Buy Apple")));
console.log(store.getState());









