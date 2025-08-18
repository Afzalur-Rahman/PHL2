import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import BorrowBook from "./pages/BorrowBook";
import BorrowSummary from "./pages/BorrowSummary";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* navbar
       */}

      <nav className="bg-blue-800 text-white p-4 flex space-x-18 justify-center">
        <NavLink
          to="/books"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          All Books
        </NavLink>
        <NavLink
          to="/create-book"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Add book
        </NavLink>
        <NavLink
          to="/borrow-summary"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Borrow summary
        </NavLink>
      </nav>

      {/* main  */}

      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/create-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/borrow/:bookId" element={<BorrowBook />} />
          <Route path="/borrow-summary" element={<BorrowSummary />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
