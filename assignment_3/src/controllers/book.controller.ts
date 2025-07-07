import { Request, RequestHandler, Response } from "express";
import { Book } from "../models/book.model";
import { Borrow } from "../models/borrow.model";
import mongoose from "mongoose";
// import { Borrow } from "../models/borrow.model";

//create Book function (p1)
export const createBook = async (req: Request, res: Response) => {
  try {
    const book = new Book(req.body);
    await book.save();

    res.status(201).json({
      success: true,
      message: "Book created successfully",

      data: book,
    });
  } catch (error) {
    res.status(400).json({
      message: "validation failed",
      success: false,
      error,
    });
  }
};

// get all books function (p2)

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "desc",
      limit = "10",
    } = req.query;

    const query: any = {};

    if (filter) {
      query.genre = filter;
    }

    const sortOrder: any = {};
    sortOrder[String(sortBy)] = sort === "asc" ? 1 : -1;

    const books = await Book.find(query).sort(sortOrder).limit(Number(limit));

    res.json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrive books",
      error,
    });
  }
};

//p3 (get books by id)
export const getBookById = async (
  req: Request<{ bookId: string }>,
  res: Response
): Promise<void> => {
  try {
    const { bookId } = req.params;

    const book = await Book.findById(bookId);

    if (!book) {
      res.status(404).json({
        success: false,
        message: "book missing",
      });
      return;
    }

    res.json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrive boook",
      error,
    });
  }
};

// update book by id (p4)

export const updateBookById = async (
  req: Request<{ bookId: string }>,
  res: Response
): Promise<void> => {
  try {
    const { bookId } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: "Book Not found",
        data: null,
      });
      return;
    }
    console.log(updatedBook);
    res.json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to updatee the book",
      data: null,
      error,
    });
  }
};

//delete book function (p5)
export const deleteBookById = async (
  req: Request<{ bookId: string }>,
  res: Response
): Promise<void> => {
  try {
    const { bookId } = req.params;

    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "Book Not found",
        data: null,
      });

      return;
    }

    res.json({
      success: true,
      message: "Book deleted Successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete booj",
      error,
    });
  }
};

//borrow a book function (p6)

export const borrowBook = async (
  req: Request<{ bookId: string }>,
  res: Response
): Promise<void> => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;

    const book = await Book.findById(bookId);

    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
      return;
    }

    if (book.copies < quantity) {
      res.status(400).json({
        success: false,
        message: "Not enough copies available",
      });
      return;
    }

    book.copies -= quantity;

    if (book.copies === 0) {
      book.available = false;
    }

    await book.save();

    const borrow = await Borrow.create({
      book: book._id,
      quantity,
      dueDate,
    });

    res.json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to retrive the boooks by genre ",
      error,
    });
  }
};
// p7(summary borrowed books)
export const borrowBookSummary = async (req: Request, res: Response) => {
  try {
    const summary = await Borrow.aggregate([
      { $group: { _id: "$book", totalQuantity: { $sum: "$quantity" } } },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookInfo",
        },
      },
      { $unwind: "$bookInfo" },
      {
        $project: {
          _id: 0,
          book: { title: "$bookInfo.title", isbn: "$bookInfo.isbn" },
          totalQuantity: 1,
        },
      },
    ]);

    res.json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to retrive borrow book summary",
      error,
    });
  }
};
