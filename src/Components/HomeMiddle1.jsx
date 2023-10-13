import React from "react";
import "./SCSS/HomeMiddle1.scss";
import { Link, useNavigate } from "react-router-dom";

export default function HomeMiddle1() {
  const navigate = useNavigate();
  return (
    <>
      <h1 id="homeH1">
        <span>---------</span> Top Categories to choose from{" "}
        <span>---------</span>
      </h1>
      <div className="container HomeMiddle1">
        <div className="row d-flex gap-3">
          <h1>Be Fashion Forward</h1>
          <div
            className="col-12 col-lg-5 col-sm-12"
            onClick={() => {
              navigate("/category/Women's Store");
            }}
          >
            <Link
              to={"/category/Women's Store"}
              className="text-decoration-none"
            >
              <h2>Women's Store</h2>
            </Link>
          </div>
          <div
            className="col-12 col-lg-3 col-sm-12"
            onClick={() => {
              navigate("/category/Men's Store");
            }}
          >
            <Link to={"/category/Men's Store"} className="text-decoration-none">
              <h2>Men's Store</h2>
            </Link>
          </div>
          <div
            className="col-12 col-lg-3 col-sm-12"
            onClick={() => {
              navigate("/category/Kid's Store");
            }}
          >
            <Link to={"/category/Kid's Store"} className="text-decoration-none">
              <h2>Kid's Store</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
