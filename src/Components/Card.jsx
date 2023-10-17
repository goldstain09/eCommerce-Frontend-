import React from "react";
import "./SCSS/Card.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ item, onProductPage }) {
  const navigate = useNavigate();

  return (
    <>
    
      <div
        className="card CourseCard col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4"
        style={{ width: "32%" }}
      >
        <img src={item.productImages[0]} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">
            {item.productTitle.split(" ").slice(0, 6).join(" ")}...
          </h5>
          <p className="card-text">
            {item.productDescription.split(" ").slice(0, 10).join(" ")}...
          </p>
          <div className="stars">
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>{" "+item.productRating}
          </div>
          <div className="prices">
            <h6>
              Price ${item.productPrice} <span>onwards</span>
            </h6>
          </div>
          <div className="students">
            <h4>Free Delivery</h4>
          </div>
          <a
            href="#"
            onClick={() => {
              navigate(`/product/${item._id}`);
              if (onProductPage) {
                window.location.reload();
              }
            }}
            className="btn btn-outline-primary"
          >
            Check Now
          </a>
        </div>
      </div>
    </>
  );
}
