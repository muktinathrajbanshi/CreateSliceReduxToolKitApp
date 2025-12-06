import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { addTask, deleteTask } from "./store";

const App = () => {
  const [userTask, setUserTask] = useState("");
  const tasks = (useSelector(state => state.taskReducer.task));
  const dispatch = useDispatch();

  const handleFromSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(userTask));
    setUserTask("");
  };

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>To-do List:</h1>
        <div className="row">
          <form onSubmit={handleFromSubmit}>
            <input 
            type="text" 
            id="input-box" 
            placeholder="Add a new Task" 
            value={userTask} 
            onChange={(e) => setUserTask(e.target.value)}  
            />
            <button type="submit">Add Task</button>
          </form>
        </div>
        <hr />

        <ul id="list-container">
          {
            tasks.map((curTask, index) => {
              return (
                <li key={index}>
                  <p>
                    {index}: {curTask}
                  </p>
                  <div>
                    <MdDeleteForever
                    className="icon-style"
                    onClick={() => handleDelete(index)}
                     />
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default App;
