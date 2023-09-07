import React from "react";
import { Link } from "react-router-dom";


export default function CategoriesHeader() {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-2 d-flex justify-content-center border-bottom categories">
          <nav className="mb-3 d-flex col-auto mb-lg-0 me-3 px-3 py-2 gap-5">
            {/* <Link to={'/'}>Become a Supplier</Link> */}
            <Link to={"/"} className="text-dark text-decoration-none">
              Supplier
            </Link>
            <Link to={"/"} className="text-dark text-decoration-none">
              Supplier
            </Link>
            <Link to={"/"} className="text-dark text-decoration-none">
              Supplier
            </Link>
            <Link to={"/"} className="text-dark text-decoration-none">
              Supplier
            </Link>
            <Link to={"/"} className="text-dark text-decoration-none">
              Supplier
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}