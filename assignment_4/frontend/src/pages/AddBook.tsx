import React, { useState } from "react";
import { useAddBookMutation } from "../services/booksApi";
import { useNavigate } from "react-router-dom";

const AddBook: React.FC = () => {
  const [addBook, { isLoading }] = useAddBookMutation();
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    console.log("Submitting form data:", form);

    try {
      const result = await addBook({
        ...form,
        available: form.copies > 0 ? true : false,
      }).unwrap();
      console.log("Book added successfully:", result);
      navigate("/books");
    } catch (error: any) {
      console.error("Add book error details:", error);
    

      if (error?.data?.message) {
        alert(`Failed: ${error.data.message}`);
      } else if (error?.status === 400) {
        alert("Validation error");
      } else if (error?.status === 409) {
        alert("Please use a different ISBN.");
      } else {
        alert(`Failed to add book. Error: ${error?.status || "Unknown error"}`);
      }
    }
  };

  return (
    <div className="justify-items-center">
      <h1 className="text-6xl font-bold mb-6">Add New Book</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-1xl space-y-3 justify-items-center "
      >
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
          <span> Available</span>
        </label>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
