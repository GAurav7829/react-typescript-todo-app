import React, { useState } from "react";
import "./App.css";
import { TodoTable } from "./components/TodoTable";
import { NewTodoForm } from "./components/NewTodoForm";

export const App = () => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: "Description 1",
      rowAssigned: "Eric",
    },
    {
      rowNumber: 2,
      rowDescription: "Description 2",
      rowAssigned: "Eric",
    },
    {
      rowNumber: 3,
      rowDescription: "Description 3",
      rowAssigned: "Eric",
    },
  ]);

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteRowNumber: number) => {
    let filetered = todos.filter(function (value) {
      return value.rowNumber !== deleteRowNumber;
    });
    setTodos(filetered);
  };

  return (
    // JSX(Javascript XML) - wrapper allows us to write html in react app
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your TODO's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? "Close New Todo" : "New Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
};
