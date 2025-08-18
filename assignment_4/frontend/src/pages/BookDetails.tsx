import React from 'react';
import { useGetBookQuery } from '../services/booksApi';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading, error } = useGetBookQuery(id!);
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error || !book) return <p>Book not found.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Copies:</strong> {book.copies}</p>
      <p><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</p>
      <p><strong>Description:</strong> {book.description || 'N/A'}</p>
      <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-gray-300 rounded">Back</button>
    </div>
  );
};

export default BookDetails;
