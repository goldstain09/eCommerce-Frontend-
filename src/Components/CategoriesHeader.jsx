import React from "react";
import { Link } from "react-router-dom";


export default function CategoriesHeader() {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-2 d-flex justify-content-center border-bottom categories">
          <nav className="mb-3 d-flex col-auto mb-lg-0 me-3 px-3 py-2 gap-5">
            <Link to={"/category/Men's Clothing"} className="text-dark text-decoration-none">
            Men's Clothing
            </Link>
            <Link to={"/category/Women's Clothing"} className="text-dark text-decoration-none">
            Women's Clothing
            </Link>
            <Link to={"/category/Kid's Clothing"} className="text-dark text-decoration-none">
            Kid's Clothing
            </Link>
            <Link to={"/category/Kid's Accessories"} className="text-dark text-decoration-none">
            Kid's Accessories
            </Link>
            <Link to={"/category/Jewelleries"} className="text-dark text-decoration-none">
            Jewelleries
            </Link>
            <Link to={"/category/Footwear"} className="text-dark text-decoration-none">
            Footwear
            </Link>
            <Link to={"/category/Health Care"} className="text-dark text-decoration-none">
            Health Care
            </Link>
            <Link to={"/category/Accessories"} className="text-dark text-decoration-none">
            Accessories
            </Link>
            <Link to={"/category/Watches"} className="text-dark text-decoration-none">
            Watches
            </Link>
            <Link to={"/category/Electronics"} className="text-dark text-decoration-none">
            Electronics
            </Link>
            <Link to={"/category/Home Decor"} className="text-dark text-decoration-none">
            Home Decor
            </Link>
            <Link to={"/category/Grooming"} className="text-dark text-decoration-none">
            Grooming
            </Link>
            <Link to={"/category/Beauty"} className="text-dark text-decoration-none">
            Beauty
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}