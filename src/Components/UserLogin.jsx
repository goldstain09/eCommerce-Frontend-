import React from "react";
import { Link } from "react-router-dom";

export default function UserLogin() {
  return (
    <>
      {/* Header--------- */}
      <ul class="nav border-bottom justify-content-center CartNav">
        <Link
          to={"/"}
          className="btn btn-outline-dark"
          style={{ position: "absolute", top: "1rem", left: "1rem" }}
        >
          back to Home
        </Link>
        <li class="nav-item">
          <a class="nav-link">
            <i class="bi bi-person-circle"></i> Login
          </a>
        </li>
      </ul>
      <form className="container mt-5 ">
        <div className="row justify-content-center">
          <div className="col-7">
            <input
              type="email"
              placeholder="Email Address"
              className="d-block mt-3 w-100 form-control"
            />
          </div>
          <div className="col-7">
            <input
              type="password"
              className="form-control mt-3 w-100 d-block"
              placeholder="Password"
            />
          </div>
          <div className="col-7">
            <button
              type="submit"
              className="form-control btn mt-3 w-100 d-block btn-success"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
