import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import CreateBooks from "./assets/pages/CreateBooks";
import ShowBook from "./assets/pages/ShowBook";
import EditBook from "./assets/pages/EditBook";
import DeleteBook from "./assets/pages/DeleteBook";

const App = ()=>{
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBooks/>} />
      <Route path="/books/details/:id" element={<ShowBook/>} />
      <Route path="/books/edit/:id" element={<EditBook/>} />
      <Route path="/books/delete/:id" element={<DeleteBook/>} />
    </Routes>
  )
}

export default App