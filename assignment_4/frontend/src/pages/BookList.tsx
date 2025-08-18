// import React from "react";
// import { useGetBookQuery,useDeleteBookMutation } from "../services/booksApi";
// import { useNavigate }  from "react-router-dom";

// const BookList: React.FC = ()=> {

// const {data:books,error,isLoading} = useGetBooksQuery();
// const [deleteBook] = useDeleteBookMutation();
// const navigate = useNavigate();

// if(isLoading) return <p>Loading books...</p>
// if(error) return <p>Error loading books</p>

// const handleDelete = async (id: string) => {

// if(window.confirm('Confirm delete ?')){

// await deleteBook(id)

// }
// }

//   return (

// <div>

// </div>

//   )

// }

import React from "react";
import { useGetBooksQuery, useDeleteBookMutation } from "../services/booksApi";
import { useNavigate } from "react-router-dom";

const BookList: React.FC = () => {
  const { data: books, error, isLoading } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading books...</p>;
  if (error) return <p>Error loading books</p>;

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure to delete this book?")) {
      await deleteBook(id);
    }
  };

  return (
    <div>
      <h1 className="text-6xl font-bold mb-6">All Books</h1>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-200">
          <tr className="border px-2 py-1">
            <th >Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>ISBN</th>
            <th>Copies</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book._id}>
              <td
                className="border px-2 py-1 cursor-pointer text-blue-600"
                onClick={() => navigate(`/books/${book._id}`)}
              >
                {book.title}
              </td>
              <td className="border px-2 py-1">{book.author}</td>
              <td className="border px-2 py-1">{book.genre}</td>
              <td className="border px-2 py-1">{book.isbn}</td>
              <td className="border px-2 py-1">{book.copies}</td>
              <td className="border px-2 py-1">
                {book.available ? "Available" : "Notavailable"}
              </td>
              <td className="border px-2 py-1 space-x-2">
                <button
                  className="text-green-600"
                  onClick={() => navigate(`/edit-book/${book._id}`)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </button>
                <button
                  className="text-blue-600"
                  disabled={!book.available}
                  onClick={() => navigate(`/borrow/${book._id}`)}
                >
                  Borrow
                </button>
              </td>
            </tr>
          ))}
          {books?.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center p-4">
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
