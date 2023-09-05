import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "AIzaSyDc25tuyICvu7cjAzeU81MvmaDzDDQI_eU"; // Замените 'YOUR_API_KEY' на свой ключ API Google Books
const RESULTS_PER_PAGE = 10; // Количество результатов на одной странице

const searchBooks = async (query, currentPage) => {
    const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&startIndex=${startIndex}&maxResults=${RESULTS_PER_PAGE}`
    );
    // console.log(response.data.items);
    return response.data.items;
    //   setTotalResults(response.data.totalItems);
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    // todos: [],
    books: [123],
  },
  reducers: {
    findBooks(state, action) {
      // state.books=[]
      // console.log(state.books[0])

      searchBooks("азбука", 1)
      .then((result)=>{
        console.log(result)
      })
      .catch((error)=>{
        console.log(error)
      })
      // console.log(state.books[0])
      // state.books=[action.payload]
    },
    // addTodo(state, action) {
    //   state.todos.push({
    //     id: new Date().toISOString(),
    //     text: action.payload.text,
    //     completed: false,
    //   });
    // },
    // removeTodo(state, action) {
    //     state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    // },
    // toggleTodoComplete(state, action) {
    //     const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
    //     toggledTodo.completed = !toggledTodo.completed
    // },
  },
});

// export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export const { findBooks } = todoSlice.actions;

export default todoSlice.reducer;
