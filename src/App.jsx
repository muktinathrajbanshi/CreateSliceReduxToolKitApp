import React from 'react'
import { Todo } from './components/Todo';

const App = () => {
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
      </div>
    </div>
  )
};

export default App;
