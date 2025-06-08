import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const { title, author, pages, publicationDate, genres } = book;
title;
author;
console.log(title, author, pages, publicationDate, genres);

// genres
// const primaryGenre = genres[0];
// const secondGenre = genres[1];
const [primaryGenre, secondGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondGenre, otherGenres);

const newGenres = [...genres, "epic", "fantsy"];
newGenres;

const updatedBook = {
  ...book,
  //Adding a property
  moviePublication: "2001-12-19",

  //Overriding a property
  pages: "1200",
};
updatedBook;

const summary = `${title} is a  book`;
summary;

const pagesRnge =
  pages > 1000 ? "pages over a thousand" : "less than a thousand";
pagesRnge;

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const tittles = books.map((book) => book.title);
tittles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

essentialData;
// FILTER

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => b - a);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

//ADD BOOK  OBLECT TO THE ARRAY
const newBook = {
  id: 6,
  title: "Harry pooter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const bookAfterAdd = [...books, newBook];
bookAfterAdd;

// DELETE BOOK
const booksAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// UPDATE A BOOK
const bookAfterUpdate = booksAfterDelete.map(book);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("korir");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
