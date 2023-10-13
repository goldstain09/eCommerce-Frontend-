import React from "react";
import './SCSS/Card.scss';
import { Link, useNavigate } from "react-router-dom";

export default function Card({item, onProductPage}) {
 const navigate = useNavigate();

  return (
    <>
      <div className="card productCard mt-3 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" >
        <div className="card-body">

        <img src={item.productImages[0]} className="card-img-top" alt="Preview" />
        {/* <div className="card-body"> */}
          <h5 className="card-title">{item.productTitle.split(' ').slice(0,6).join(' ')}...</h5>
          <p className="card-price">
            ${item.productPrice} <span>onwards</span>
          </p>
          <button disabled className="btn btn-light">Free Delivery</button>
          <button disabled className="btn btn-success">{item.productRating}</button>
          <button onClick={()=>{
            navigate(`/product/${item._id}`);
            if(onProductPage){
              window.location.reload();
            }
          }} className="btn btn-warning d-block">Check Now</button>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
