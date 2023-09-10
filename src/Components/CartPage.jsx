import React from "react";
import "./SCSS/CartPage.scss";
import img from "../Media/cod.png";
import { Link } from "react-router-dom";

export default function CartPage() {
  return (
    <>
      {/* Header--------- */}
      <ul class="nav border-bottom justify-content-center CartNav">
        <Link to={'/'} className="btn btn-outline-dark" style={{position:'absolute',top:'1rem',left:'1rem'}}>back to Home</Link>
        <li class="nav-item">
          <a class="nav-link">
            <i class="bi bi-basket"></i> Cart
          </a>
        </li>
      </ul>
      {/* Carts */}
      <div className="container CartItemsDiv mt-5">
        <p className="h5">
          Cart | <span>6 Items</span>
        </p>
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="row d-flex">
              <div className="col col-2">
                <img src={img} alt="--" />
              </div>
              <div className="col col-8">
                <h1 className="title">Product Title</h1>
                <h1 className="price">$499</h1>
                <h1 className="text">All issue easy returns allowed</h1>
                <h1 className="qty">Quantity:2</h1>
                <button className="btn btn-outline-danger">
                  <i class="bi bi-trash3"></i> Remove
                </button>
              </div>
              <div className="col col-2">
                <button
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  className="btn btn-outline-secondary"
                >
                  <i class="bi bi-pen"></i> Edit
                </button>
              </div>
            </div>
            <div className="row border-top">
              <div className="col col-9">
                <h6 className="h6 mt-3 text-secondary">Sold by: Admin</h6>
              </div>
              <div className="col col-3">
                <h6 className="h6 mt-3 text-secondary">Free Delivery</h6>
              </div>
            </div>
          </div>
          <div className="col-1">{/* gap */}</div>
          <div className="col col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
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
                <h1 className="h5 text-secondary mt-3 ">Order Total</h1>
              </div>
              <div className="col col-3">
                <h1 className="h5 text-secondary mt-3  pb-3">$499</h1>
              </div>
            </div>
            <div className="row">
              <div className="col col-12">
                <Link
                  to={"/checkout"}
                  className="w-100 btn btn-danger fs-3 py-1"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Canvas */}

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header border-bottom">
          <h5 id="offcanvasRightLabel" className="text-secondary">
            EDIT ITEM
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="row">
            <div className="col col-2">
              <img src={img} alt="" className="w-100" />
            </div>
            <div className="col col-10">
              <h1 className="h6 text-secondary">Title</h1>
              <h1 className="h5 text-dark">$499</h1>
              <h1 className="h5 text-dark d-inline-block">Quantity</h1>&emsp;
              <button className="btn btn-outline-danger">-</button>
              <button className="btn btn-light" disabled>
                1
              </button>
              <button className="btn btn-outline-success">+</button>
            </div>
          </div>
          <div className="row border-top border-bottom mt-4">
            <div className="col col-9 mt-2 mb-2 h5">Total Price</div>
            <div className="col col-3 mb-2 mt-2 h5">$499</div>
          </div>
          <div className="row mt-3">
            <div className="col col-12">
              <button
                className="btn w-100 btn-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

    // <>
    // <div>
    //   cart is empty
    // </div>
    // </>
  );
}
