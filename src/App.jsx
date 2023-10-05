import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Countries />} />
          <Route path="/:id" element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
