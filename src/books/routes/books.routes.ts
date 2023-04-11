import express, { Router } from "express";
import {
  fetchBooks,
  deleteBook,
  createBook,
} from "../controllers/books.controllers";
export const BookRoutes: Router = express.Router();

// api/shop/

BookRoutes.get("/", fetchBooks);
BookRoutes.post("/", createBook);
BookRoutes.delete("/:id", deleteBook);
