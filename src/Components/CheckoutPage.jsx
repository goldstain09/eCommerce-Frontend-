import React from "react";
import img from "../Media/cod.png";
import { Link } from "react-router-dom";
import "./SCSS/CheckoutPage.scss";
import AddressForm from "./AddressForm";
import PaymentMethod from "./PaymentMethod";

export default function CheckoutPage() {
  return (
    <>
      {/* Header--------- */}
      <ul class="nav border-bottom justify-content-center CheckoutNav">
        <li class="nav-item">
          <a class="nav-link">
            <i class="bi bi-bag-check-fill"></i> Checkout
          </a>
        </li>
      </ul>
      {/* Carts */}
      <div className="container CheckoutDiv mt-5">
        <p className="h5">
          Total | <span>6 Items</span>
        </p>
        {/* product detail */}
        <div className="row d-flex">
          <div className="col col-12">
            <div className="row d-flex">
              <div className="col col-3">
                <img src={img} alt="--" />
              </div>
              <div className="col col-9">
                <h1 className="title">Product Title</h1>
                <h1 className="price">$499</h1>
                <h1 className="text">All issue easy returns allowed</h1>
                <h1 className="qty">Quantity:2</h1>
              </div>
            </div>
          </div>
          {/* address */}
          <div className="col col-12">
            <div className="row d-flex">
              <div className="col col-12">
                <AddressForm />
              </div>
            </div>
          </div>
          {/* payment method */}
          <div className="col col-12">
            <div className="row d-flex">
               <PaymentMethod />
            </div>
          </div>
          {/* place order section */}
          <div className="col col-12 Placeorder">
            <h1 className="h5 text-dark">Price Details</h1>
            <div className="row border-bottom">
              <div className="col col-9">
                <h1 className="h6 text-secondary mt-3 pb-3">
                  Total Products Price
                </h1>
              </div>
              <div className="col col-3">
                <h1 className="h6 text-secondary mt-3 pb-3">$499</h1>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col col-9">
                <h1 className="h5 text-secondary mt-3 ">Grand Total Price</h1>
              </div>
              <div className="col col-3">
                <h1 className="h5 text-secondary mt-3  pb-3">$499</h1>
              </div>
            </div>
            <div className="row">
              <div className="col col-12">
                <button
                  to={"/checkout"}
                  className="w-100 btn btn-danger fs-3 py-1"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
