import React, { useEffect } from "react";
import GoogleBooksSearch from "./api/api";
import { useSelector } from "react-redux";


const App = () => {
  const todos = useSelector((state) => state.todos.books);
  
  console.log(todos)


  return (
    <div>
      <GoogleBooksSearch />
      <span>{todos}</span>
      {todos && todos.map((todo) => (
        <span key={todo}>{todo}</span>
      ))}
    </div>
  );
};

export default App;
