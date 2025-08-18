import React from 'react';
import { useGetBorrowSummaryQuery } from '../services/booksApi';

const BorrowSummary: React.FC = () => {
  const { data: summary, isLoading, error } = useGetBorrowSummaryQuery();

  if (isLoading) return <p>Loading borrow summary...</p>;
  if (error) return <p>Error loading borrow summary.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Borrow Summary</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Book Title</th>
            <th className="border px-2 py-1">ISBN</th>
            <th className="border px-2 py-1">Total Quantity Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {summary?.map((item) => (
            <tr key={item.isbn}>
              <td className="border px-2 py-1">{item.bookTitle}</td>
              <td className="border px-2 py-1">{item.isbn}</td>
              <td className="border px-2 py-1">{item.totalQuantity}</td>
            </tr>
          ))}
          {summary?.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center p-4">No borrowed books found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummary;
