import React from "react";
import { Link } from "react-router-dom";
import "./SCSS/HomeMiddle4.scss";

export default function HomeMiddle4() {
  return (
    <>
      <div className="container HomeMiddle4">
        <div className="row">
          <a target="_new" href="http://localhost:3001/" className="btn">
            Sign Up Now
          </a>
        </div>
      </div>
      <hr id="products" className="mt-5 pt-5" />
    </>
  );
}
