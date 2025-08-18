import React, { useState, useEffect } from "react";
import { useGetBookQuery, useUpdateBookMutation } from "../services/booksApi";
import { useNavigate, useParams } from "react-router-dom";

const EditBook: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading, error } = useGetBookQuery(id!);
  const [updateBook, { isLoading: updating }] = useUpdateBookMutation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 1,
    available: true,
  });

  useEffect(() => {
    if (book) {
      setForm({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        description: book.description || "",
        copies: book.copies,
        available: book.available,
      });
    }
  }, [book]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load</p>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "number" ? +value : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateBook({
        id: id!,
        body: { ...form, available: form.copies > 0 },
      }).unwrap();
      navigate("/books");
    } catch (error: any) {
      console.error("Update error:", error);
      if (error?.data?.message) {
        alert(`Failed to update: ${error.data.message}`);
      } else {
        alert("check all fields and try again.");
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input
          required
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="input"
        />
        <input
          required
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          className="input"
        />
        <select
          required
          name="genre"
          value={form.genre}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select Genre</option>
          <option value="FICTION">Fiction</option>
          <option value="NON_FICTION">Non-Fiction</option>
          <option value="SCIENCE">Science</option>
          <option value="HISTORY">History</option>
          <option value="BIOGRAPHY">Biography</option>
          <option value="FANTASY">Fantasy</option>
        </select>
        <input
          required
          name="isbn"
          placeholder="ISBN"
          value={form.isbn}
          onChange={handleChange}
          className="input"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="input"
        />
        <input
          required
          name="copies"
          type="number"
          min={0}
          placeholder="Copies"
          value={form.copies}
          onChange={handleChange}
          className="input"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
          />
          <span>Available</span>
        </label>
        <button
          type="submit"
          disabled={updating}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
