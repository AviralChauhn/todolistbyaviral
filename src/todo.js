import React, { useState } from "react";

// Custom hook to manage todo items
function useTodo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return [todos, addTodo, deleteTodo];
}

function TodoApp() {
  const [todos, addTodo, deleteTodo] = useTodo();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(e.target.elements.todo.value);
          e.target.elements.todo.value = "";
        }}
      >
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}{" "}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;