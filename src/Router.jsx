import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ProductPage from "./Components/ProductPage";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ProductPage />} path="/product" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
