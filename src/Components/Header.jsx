import React, { useState } from "react";
import "./SCSS/Header.scss";
import logo from "../Media/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CategoriesHeader from "./CategoriesHeader";
import { useDispatch } from "react-redux";
import { searchStart } from "../Redux/action";

export default function Header({ active }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  //error
  const [emptyError, setEmptyError] = useState(false);
  const search = (e) => {
    e.preventDefault();
    if (searchValue.length > 0) {
      dispatch(searchStart(searchValue));
    } else {
      setEmptyError(true);
    }
  };
  return (
    <>
      <header className="p-3 mb-3 Nav_Header fixed-top bg-light">
        <div className="container">
          <div className="d-flex gap-5 border-bottom pb-2  flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex col-1 align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <img src={logo} alt="Seesho" />
            </a>

            <form
              className="nav d-flex col-4  me-lg-auto mb-2 justify-content-center mb-md-0"
              onSubmit={search}
            >
              <input
                type="search"
                className="form-control"
                placeholder="            Try Shirts, Smartphones, etc..."
                aria-label="Search"
                autoFocus
                onClick={() => {
                  navigate("/search");
                }}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  setEmptyError(false);
                }}
              />
              {emptyError && (
                <p className="text-danger">Please Enter Something...</p>
              )}
            </form>

            <nav
              className="mb-3 col-auto mb-lg-0 me-3 px-3 py-2"
              style={{ borderRight: "2px grey solid" }}
            >
              <a
                href="http://localhost:3001/"
                target="_new"
                className="text-dark text-decoration-none"
              >
                Become a Supplier
              </a>
            </nav>

            <div className="d-flex gap-4 col-2 profile_cart">
              <NavLink
                to={"/profile"}
                title="Hello, to access your account SignUp"
                className="text-dark text-decoration-none"
              >
                &nbsp;&nbsp;&nbsp;<i className="bi bi-person"></i>
                <br />
                Profile
              </NavLink>
              <NavLink
                to={"/cart"}
                title="Hello, to see your cart Login/SignUp"
                className="text-dark text-decoration-none"
              >
                &nbsp;<i className="bi bi-cart3"></i>
                <br />
                Cart
              </NavLink>
            </div>
          </div>
        </div>
        <CategoriesHeader />
      </header>
    </>
  );
}
