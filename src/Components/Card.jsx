import React from "react";
import './SCSS/Card.scss';
import { Link } from "react-router-dom";
import img from '../Media/logo.png';

export default function Card(props) {
  return (
    <>
      <div className="card productCard mt-3 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" >
        <div className="card-body">

        <img src='https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg' className="card-img-top" alt="..." />
        {/* <div className="card-body"> */}
          <h5 className="card-title">Card title</h5>
          <p className="card-price">
            $1000 <span>onwards</span>
          </p>
          <button disabled className="btn btn-light">Free Delivery</button>
          <button disabled className="btn btn-success">4.5</button><p>243354 reviews</p>
          <Link className="btn btn-warning d-block">Check Now</Link>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
