import { useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";

const App = () => {

  const tasks = (useSelector(state => state.taskReducer.task));
  

  return (
    <div className="container">
      <div className="todo-app">
        <h1>To-do List:</h1>
        <div className="row">
          <form>
            <input type="text" id="input-box" placeholder="Add a new Task" />
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
