import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ProductPage from "./Components/ProductPage";
import CategoryPage from "./Components/CategoryPage";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckoutPage";
import Orders from "./Components/Orders";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import ProfileEdit from "./Components/ProfileEdit";
import ShopPage from "./Components/ShopPage";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ProductPage />} path="/product/:id" />
          <Route element={<CategoryPage />} path="/category/:name" />
          <Route element={<CartPage />} path="/cart" />
          <Route element={<CheckoutPage />} path="/checkout" />
          <Route element={<ShopPage />} path="/sellerShop/:sellerId" />
          <Route  path="/profile" >
            <Route index element={<Profile />} />
            <Route path="/profile/orders" element={<Orders />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
          </Route>
          <Route element={<Search />} path="/search" />
        </Routes>
      </BrowserRouter>
    </>
  );
}
