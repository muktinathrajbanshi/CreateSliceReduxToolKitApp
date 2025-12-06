import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./features/tasks/taskSlice";

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









