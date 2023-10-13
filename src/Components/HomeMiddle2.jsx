import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SCSS/HomeMiddle2.scss";

export default function HomeMiddle2() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container HomeMiddle2">
        <div className="row d-flex gap-3">
          <div
            className="col-12 col-lg-4 col-sm-12"
            onClick={() => {
              navigate("/category/essentials");
            }}
          >
            <h1>Essentials</h1>
            <Link to={"/category/essentials"} className="btn btn-outline-dark ">
              View All
            </Link>
          </div>
          <div
            className="col-12 col-lg-2 col-sm-12 text-center"
            onClick={() => {
              navigate("/category/Home Decor");
            }}
          >
            <Link to={"/category/Home Decor"} className="btn btn-outline-dark">
              Home Decor
            </Link>
          </div>
          <div
            className="col-12 col-lg-2 col-sm-12 text-center"
            onClick={() => {
              navigate("/category/Kitchen Appliances");
            }}
          >
            <Link
              to={"/category/Kitchen Appliances"}
              className="btn btn-outline-dark"
            >
              Kitchen Appliances
            </Link>
          </div>
          <div
            className="col-12 col-lg-2 col-sm-12 text-center"
            onClick={() => {
              navigate("/category/Health Care");
            }}
          >
            <Link to={"/category/Health Care"} className="btn btn-outline-dark">
              Health Care
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
