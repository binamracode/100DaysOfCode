import "./App.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { ButtonGroup, TextField } from "@material-ui/core";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoToAdd, setTodoToAdd] = useState("");

  const handleDelete = (index) => {
    setTodo(todo.filter((_, item_index) => item_index !== index));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, todoToAdd]);
  };

  return (
    <div className='App'>
      <h1 className='title'>Simple TODO App</h1>
      <form onSubmit={handleAddTodo}>
        <ButtonGroup
          size='large'
          color='primary'
          aria-label='large outlined primary button group'>
          <TextField
            className='todo_field'
            label='Enter your Todo'
            onChange={(event) => setTodoToAdd(event.target.value)}
          />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='add_todo_btn'
            onClick={handleAddTodo}>
            Add
          </Button>
        </ButtonGroup>
      </form>
      {todo.length > 0 ? (
        <TableContainer component={Paper} className='table'>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>S.n.</TableCell>
                <TableCell>Work</TableCell>
                <TableCell>Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todo.map((each, index) => (
                <TableRow key={index}>
                  <TableCell>{index}</TableCell>
                  <TableCell>{each}</TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      onClick={() => handleDelete(index)}
                      color='secondary'>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p className='no_todo'>Add Your Todo First</p>
      )}
    </div>
  );
}

export default App;
