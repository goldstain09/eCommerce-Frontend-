import React from "react";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ProductPage from "./Components/ProductPage";
import CategoryPage from "./Components/CategoryPage";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckoutPage";
import Orders from "./Components/Orders";
import Profile from "./Components/Profile";
import Search from "./Components/Search";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ProductPage />} path="/product" />
          <Route element={<CategoryPage />} path="/category" />
          <Route element={<CartPage />} path="/cart" />
          <Route element={<CheckoutPage />} path="/checkout" />
          <Route  path="/profile" >
            <Route index element={<Profile />} />
            <Route path=":orders" element={<Orders />} />
          </Route>
          <Route element={<Search />} path="/search" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
