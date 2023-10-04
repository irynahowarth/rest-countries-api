import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Where in the world?</h1>
        <Link to="/">Home</Link>
        <Link to="/ukraine">Ukraine</Link>
      </header>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:id" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
