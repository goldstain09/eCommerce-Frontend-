import React from "react";
import "./SCSS/HomeMiddle1.scss";
import { Link } from "react-router-dom";

export default function HomeMiddle1() {
  return (
    <>
      <div className="container HomeMiddle1">
        <div className="row d-flex gap-3">
          <h1>Be Fashion Forward</h1>
          <div className="col-12 col-lg-5 col-sm-12">
            <Link to={''} className="text-decoration-none">
              <h2>Women's Store</h2>
            </Link>
          </div>
          <div className="col-12 col-lg-3 col-sm-12">
            <Link className="text-decoration-none">
              <h2>Men's Store</h2>
            </Link>
          </div>
          <div className="col-12 col-lg-3 col-sm-12">
            <Link className="text-decoration-none">
              <h2>Kid's Store</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
