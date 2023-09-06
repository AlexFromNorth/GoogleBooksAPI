import axios from "axios";

const API_KEY = "AIzaSyDc25tuyICvu7cjAzeU81MvmaDzDDQI_eU"; // Замените 'YOUR_API_KEY' на свой ключ API Google Books
const RESULTS_PER_PAGE = 10; // Количество результатов на одной странице

export const searchBooks = async (query, currentPage) => {
    // console.log(query)
    const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&startIndex=${startIndex}&maxResults=${RESULTS_PER_PAGE}`
    );
    return response.data;
};