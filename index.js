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
