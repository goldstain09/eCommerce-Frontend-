import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./SCSS/HomeMiddle3.scss";

export default function HomeMiddle3() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container HomeMiddle3">
        <div className="row d-flex gap-3">
          <div
            className="col-12 col-lg-4 col-sm-12"
            onClick={() => {
              navigate("/category/NewStyles");
            }}
          >
            <h1>New Styles</h1>
            <Link to={"/category/NewStyles"} className="btn btn-outline-dark ">
              View All
            </Link>
          </div>
          <div
            className="col-12 col-lg-2 col-sm-12 text-center"
            onClick={() => {
              navigate("/category/Accessories");
            }}
          >
            <Link to={"/category/Accessories"} className="btn btn-outline-dark">
              Accessories
            </Link>
          </div>
          <div
            className="col-12 col-lg-2 col-sm-12 text-center"
            onClick={() => {
              navigate("/category/Footwear");
            }}
          >
            <Link to={"/category/Footwear"} className="btn btn-outline-dark">
              Footwear
            </Link>
          </div>
          <div
            className="col-12 col-lg-2 col-sm-12 text-center"
            onClick={() => {
              navigate("/category/Electronics");
            }}
          >
            <Link to={"/category/Electronics"} className="btn btn-outline-dark">
              Electronics
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
