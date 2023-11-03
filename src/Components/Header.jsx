import React, { useState } from "react";
import "./SCSS/Header.scss";
import logo from "../Media/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CategoriesHeader from "./CategoriesHeader";
import { useDispatch } from "react-redux";
import { searchStart } from "../Redux/action";
import searchicon from "./SCSS/Media/search.png";

export default function Header({ active, ShopPage }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  //error
  const [emptyError, setEmptyError] = useState(false);
  const search = (e) => {
    e.preventDefault();
    if (searchValue.length > 0) {
      dispatch(searchStart(searchValue));
      navigate("/search");
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
              <img src={searchicon} alt="" />
              <input
                type="search"
                className="form-control"
                placeholder=" Try Shirts, Smartphones, etc..."
                aria-label="Search"
                // autoFocus
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
                href="https://seller-panel-project.onrender.com/sellerpanel"
                target="_new"
                className="text-dark text-decoration-none"
              >
                Become a Supplier
              </a>
            </nav>

            <div className="d-flex gap-3 col-2 profile_cart">
              <NavLink
                to={"/profile"}
                title="Hello, to access your account SignUp"
                className="text-dark text-decoration-none"
              >
                &nbsp;&nbsp;&nbsp;<i className="bi bi-person"></i>
              </NavLink>
              <NavLink
                to={"/cart"}
                title="Hello, to see your cart!"
                className="text-dark text-decoration-none"
              >
                &nbsp;<i className="bi bi-cart3"></i>
              </NavLink>
            </div>
          </div>
        </div>
        {ShopPage ? (
          <></>
        ) : (
          <>
            <CategoriesHeader />
          </>
        )}
      </header>

      {/* off canvas and header for mobile view--- */}
      <header className="container-fluid header_mobile">
        <div className="row d-flex">
          <div className="col-6">
            <img src={logo} alt="" />
          </div>
          <div className="col-6">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i className="bi bi-chevron-double-right"></i>
            </button>
          </div>
        </div>
        <div className="row mobileSearchbar">
          <form
            className="nav d-flex col-12  me-lg-auto mb-2 justify-content-center mb-md-0"
            onSubmit={search}
          >
            <img src={searchicon} alt="" />
            <input
              type="search"
              className="form-control"
              placeholder=" Try Shirts, Smartphones, etc..."
              aria-label="Search"
              // autoFocus
              onClick={() => {
                navigate("/search");
              }}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setEmptyError(false);
              }}
            />
            {emptyError && (
              <p className="text-danger card-text">Please Enter Something...</p>
            )}
          </form>
        </div>
      </header>

      <div
        className="offcanvas offcanvas-start mobileviewCanvas"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <img src={logo} alt="" />
          </h5>
          <button
            type="button"
            className="btn text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="bi bi-chevron-double-left"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <NavLink
            to={"/profile"}
            title="Hello, to access your account SignUp"
            className="text-dark text-decoration-none"
          >
            <i className="bi bi-person"></i> Profile
          </NavLink>
          <NavLink
            to={"/cart"}
            title="Hello, to see your cart!"
            className="text-dark text-decoration-none"
          >
            <i className="bi bi-cart3"></i> Cart
          </NavLink>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Categories
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <Link
                    to={"/category/Men's Clothing"}
                    className="text-dark text-decoration-none"
                  >
                    Men's Clothing
                  </Link>
                  <Link
                    to={"/category/Women's Clothing"}
                    className="text-dark text-decoration-none"
                  >
                    Women's Clothing
                  </Link>
                  <Link
                    to={"/category/Kid's Clothing"}
                    className="text-dark text-decoration-none"
                  >
                    Kid's Clothing
                  </Link>
                  <Link
                    to={"/category/Kid's Accessories"}
                    className="text-dark text-decoration-none"
                  >
                    Kid's Accessories
                  </Link>
                  <Link
                    to={"/category/Jewelleries"}
                    className="text-dark text-decoration-none"
                  >
                    Jewelleries
                  </Link>
                  <Link
                    to={"/category/Footwear"}
                    className="text-dark text-decoration-none"
                  >
                    Footwear
                  </Link>
                  <Link
                    to={"/category/Health Care"}
                    className="text-dark text-decoration-none"
                  >
                    Health Care
                  </Link>
                  <Link
                    to={"/category/Accessories"}
                    className="text-dark text-decoration-none"
                  >
                    Accessories
                  </Link>
                  <Link
                    to={"/category/Watches"}
                    className="text-dark text-decoration-none"
                  >
                    Watches
                  </Link>
                  <Link
                    to={"/category/Electronics"}
                    className="text-dark text-decoration-none"
                  >
                    Electronics
                  </Link>
                  <Link
                    to={"/category/Home Decor"}
                    className="text-dark text-decoration-none"
                  >
                    Home Decor
                  </Link>
                  <Link
                    to={"/category/Grooming"}
                    className="text-dark text-decoration-none"
                  >
                    Grooming
                  </Link>
                  <Link
                    to={"/category/Beauty"}
                    className="text-dark text-decoration-none"
                  >
                    Beauty
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <a href="https://seller-panel-project.onrender.com/sellerpanel">
            Become a Supplier |
          </a>
        </div>
      </div>
    </>
  );
}
