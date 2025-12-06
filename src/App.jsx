
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
        <hr />

        <ul id="list-container"></ul>
      </div>
    </div>
  );
};

export default App;
