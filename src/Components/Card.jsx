import React from "react";
import './SCSS/Card.scss';
import { Link } from "react-router-dom";
import img from '../Media/logo.png';

export default function Card({item}) {
  function getFirstFiveWords(title) {
    const words = title.split(' ');
    return words.slice(0, 5).join(' ');
  }

  return (
    <>
      <div className="card productCard mt-3 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" >
        <div className="card-body">

        <img src={item.productImages[0]} className="card-img-top" alt="Preview" />
        {/* <div className="card-body"> */}
          <h5 className="card-title">{getFirstFiveWords(item.productTitle)}...</h5>
          <p className="card-price">
            ${item.productPrice} <span>onwards</span>
          </p>
          <button disabled className="btn btn-light">Free Delivery</button>
          <button disabled className="btn btn-success">{item.productRating}</button>
          <Link to={`/product/${item._id}`} className="btn btn-warning d-block">Check Now</Link>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
