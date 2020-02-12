import React from "react";
import "./styles.css";
import BookContextProvider from "./contexts/BookContext";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}
