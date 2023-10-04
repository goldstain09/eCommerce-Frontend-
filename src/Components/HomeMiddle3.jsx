import { Link } from "react-router-dom";
import React from 'react';
import './SCSS/HomeMiddle3.scss';

export default function HomeMiddle3() {
  return (
    <>
     <div className="container HomeMiddle3">
        <div className="row d-flex gap-3">
          <div className="col-12 col-lg-4 col-sm-12">
          <h1>New Styles</h1>
            <Link to={"/category/NewStyles"} className="btn btn-outline-dark ">
              View All
            </Link>
          </div>
          <div className="col-12 col-lg-2 col-sm-12 text-center">
            <Link to={"/category/Accessories"} className="btn btn-outline-dark">
              Accessories
            </Link>
          </div>
          <div className="col-12 col-lg-2 col-sm-12 text-center">
            <Link  to={"/category/Footwear"} className="btn btn-outline-dark">
              Footwear
            </Link>
          </div>
          <div className="col-12 col-lg-2 col-sm-12 text-center">
            <Link  to={"/category/Electronics"} className="btn btn-outline-dark">
              Electronics
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
