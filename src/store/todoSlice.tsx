import { createSlice } from "@reduxjs/toolkit";
import { searchBooks } from "../actions/searchBooks";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [123,3,5],
    books: [2,4,6],
    totalItems: 0,
    test: 0
  },
  reducers: {
    async findBooks(state, action) {
      searchBooks(action.payload.query, action.payload.page)
      .then(response=>{
        state.books = response.items
        state.totalItems = response.totalItems
        // console.log(response.totalItems)
      })

      // console.log(action.payload.page)
      // state.books=(await searchBooks(action.payload.query, action.payload.page)).items

      // state.totalItems=(await searchBooks(action.payload.query, action.payload.page)).totalItems
      // console.log(state.books);
      // console.log(state.totalItems);
    },
    test(state, action) {
     state.test= 23
    },
  },
});

export const { findBooks, test } = todoSlice.actions;

export default todoSlice.reducer;
