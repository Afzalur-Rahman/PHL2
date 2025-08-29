import React, { useState } from "react";
import { useGetBookQuery, useBorrowBookMutation } from "../services/booksApi";
import { useParams, useNavigate } from "react-router-dom";

const BorrowBook: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { data: book, isLoading, error } = useGetBookQuery(bookId!);
  const [borrowBook, { isLoading: borrowing }] = useBorrowBookMutation();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  if (isLoading) return <p>Loading book...</p>;
  if (error || !book) return <p>Book not found</p>;

  const maxQuantity = book.copies;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (quantity > maxQuantity) {
      alert(`You cannot borrow more than ${maxQuantity} copies.`);
      return;
    }
    if (!dueDate) {
      alert("please choose a date");
      return;
    }

    console.log("Borrowing book:", { bookId: book._id, quantity, dueDate });

    try {
      const result = await borrowBook({
        bookId: book._id,
        quantity,
        dueDate,
      }).unwrap();
      console.log("Borrow successful:", result);
      alert("Book borrowed successfully!");
      navigate("/borrow-summary");
    } catch (error: any) {
      console.error("error details:", error);
   

      if (error?.data?.message) {
        alert(`Failed: ${error.data.message}`);
      } else if (error?.status === 400) {
        alert("Please check quantity and due date.");
      } else if (error?.status === 404) {
        alert("not found.");
      } else {
        alert(
          `Failed to borrow . Error: ${error?.status || "Unknown error"}`
        );
      }
    }
  };

  return (
    <div>
      <h1 className="text-6xl font-bold mb-4">Borrow Book: {book.title}</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <label>
          Quantity (max {maxQuantity}):
          <input
            type="number"
            min={1}
            max={maxQuantity}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input"
            required
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="input"
            required
          />
        </label>
        <button
          type="submit"
          disabled={borrowing}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Borrow
        </button>
      </form>
    </div>
  );
};

export default BorrowBook;
