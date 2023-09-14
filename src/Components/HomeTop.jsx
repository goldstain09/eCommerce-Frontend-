import React from "react";
import "./SCSS/HomeTop.scss";
import { Link } from "react-router-dom";

export default function HomeTop() {
  return (
    <>
      <div className="container Home-top">
        <div className="row d-flex">
          <div className="col-12 col-lg-6 textDiv">
            <h1>Lowest Prices</h1>
            <h1>Best Quality Shopping</h1>
            <div className="d-flex">
              <div
                className="col-4 d-flex"
                style={{ borderRight: "2px grey solid" }}
              >
                <section>
                  <i className="bi bi-truck"></i>
                </section>
                <section>
                  Fast <br />
                  Delivery
                </section>
              </div>
              <div
                className="col-4 d-flex"
                style={{ borderRight: "2px grey solid" }}
              >
                <section>
                  <i className="bi bi-wallet2"></i>
                </section>
                <section>
                  Cash on <br />
                  Delivery
                </section>
              </div>
              <div className="col-4 d-flex">
                <section>
                  <i className="bi bi-sign-turn-slight-left"></i>
                </section>
                <section>Easy Returns</section>
              </div>
            </div>
            <div>
              <Link to={'/'} className="btn btn-outline-secondary">
                Buy Now <i className="bi bi-bag-fill"></i>
              </Link >
            </div>
          </div>
          <div className="col-12 col-lg-6 imgDiv"></div>
        </div>
      </div>
    </>
  );
}
