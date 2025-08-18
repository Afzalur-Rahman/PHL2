import { Router } from "express";
// import { Request, Response } from "express";

import {
  borrowBook,
  borrowBookSummary,
  createBook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
} from "../controllers/book.controller";

const router = Router();

router.post("/books", createBook);
router.get("/books", getAllBooks);
router.get("/books/:bookId", getBookById);
router.put("/books/:bookId", updateBookById);
router.delete("/books/:bookId", deleteBookById);
router.post("/borrows/:bookId", borrowBook);
router.get("/borrows/summary", borrowBookSummary);

export default router;
