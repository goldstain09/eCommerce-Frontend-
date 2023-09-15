import React from "react";
import img from "../Media/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Orders() {
  const userIsLogin = useSelector((state) => state.userIsLogin);
  console.log(userIsLogin);
  if (userIsLogin) {
    return (
      <>
        {/* Header--------- */}
        <ul class="nav border-bottom justify-content-center CartNav">
          <Link
            to={"/profile"}
            className="btn btn-outline-dark"
            style={{ position: "absolute", top: "1rem", left: "1rem" }}
          >
            back to Profile
          </Link>
          <li class="nav-item">
            <a class="nav-link">
              <i class="bi bi-person-circle"></i> Your Orders
            </a>
          </li>
        </ul>
        <div className="container mt-5 pt-5">
          <div className="row border-bottom pt-3">
            <div className="col-3">
              <img src={img} alt="" className="w-75" />
            </div>
            <div className="col-7">
              <h5 className="h5 text-secondary">title</h5>
              <h5 className="h5 text-secondary">$499</h5>
            </div>
            <div className="col-2">
              <button className="btn btn-danger">Cancel</button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <h3
        className="h3 text-center mt-5 pt-5"
        style={{ color: "#5c0431", fontFamily: "'Inter', sans-serif" }}
      >
        You have to be loginned for your orders{" "}
        <Link to={"/profile"}>Login & SignUp</Link>{" "}
      </h3>
    );
  }
}
