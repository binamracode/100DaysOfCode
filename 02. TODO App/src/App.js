import { Button, ButtonGroup, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import TodoTable from "./components/TodoTable";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(() =>
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );

  const [valueError, setError] = useState({ status: false, helperText: "" });

  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setError({ status: false, helperText: "" });

    if (value.length < 3)
      return setError({
        status: true,
        helperText: "Work Text must be greater then 3",
      });

    setTodo([
      {
        title: value,
        id: Date.now().toString(),
        completed: false,
      },
      ...todo,
    ]);

    setValue("");
  };

  const markAsCompleted = (id) => {
    const updatedTodo = todo.map((t) => {
      if (t.id === id) t.completed = true;

      return t;
    });

    setTodo(updatedTodo);
  };

  const deleteTodo = (id) => {
    const updatedTodo = todo.filter((t) => t.id !== id);

    setTodo(updatedTodo);
  };

  return (
    <div>
      <h1>Simple TODO App</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter your todo"
          variant="outlined"
          className="inputBox"
          error={valueError.status}
          helperText={valueError.helperText}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className="submitBtn"
          type="submit"
        >
          Add
        </Button>
      </form>

      <TodoTable
        data={todo}
        onMarkAsCompleted={markAsCompleted}
        onRemove={deleteTodo}
      />
    </div>
  );
}

export default App;
