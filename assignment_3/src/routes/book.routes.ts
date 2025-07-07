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
router.patch("/books/:bookId", updateBookById);
router.delete("/books/:bookId", deleteBookById);
router.post("/borrow", borrowBook);
router.get("/borrow", borrowBookSummary);

export default router;
