import { BooksModel } from "../models/books.model";
import { Request, Response } from "express";


export const createBook = async (req: any, res: Response) => {
    let { title, author, publisher, published_date, description, page_count } =
      req.body;
    let books = await BooksModel.create({
      title,
      author,
      publisher,
      published_date: new Date(published_date),
      description,
      page_count,
    });
  
    if (books) {
      res.status(201).json({
        success: true,
        message: "created book",
        result: books,
      });
    } else {
      res.status(401).json({
        success: false,
        message: "unable to fetch books",
      });
    }
  };

export const fetchBooks = async (req: any, res: Response) => {
  let books = await BooksModel.find({});
  if (books) {
    res.status(201).json({
      success: true,
      message: "fetched books",
      result: books,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "unable to fetch books",
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  let { id } = req.params;

  let book = await BooksModel.findByIdAndDelete(id);

  if (book) {
    res.status(201).json({
      success: true,
      message: "delete books",
      result: book,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "unable to delete books",
    });
  }
};

