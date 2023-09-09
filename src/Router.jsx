import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ProductPage from "./Components/ProductPage";
import CategoryPage from "./Components/CategoryPage";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckoutPage";
import SellerLogin from "./Components/SellerLogin";
import SellerSignup from "./Components/SellerSignup";
import UserSignup from "./Components/UserSignup";
import UserLogin from "./Components/UserLogin";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ProductPage />} path="/product" />
          <Route element={<CategoryPage />} path="/category" />
          <Route element={<CartPage />} path="/cart" />
          <Route element={<CheckoutPage />} path="/checkout" />
          <Route element={<SellerLogin />} path="/sellerlogin" />
          <Route element={<SellerSignup />} path="/sellersignup" />
          <Route element={<UserSignup />} path="/usersignup" />
          <Route element={<UserLogin />} path="/userlogin" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
