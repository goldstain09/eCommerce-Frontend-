import React from "react";
import "./SCSS/ProductPage.scss";
import img from "../Media/suitLady.jpg";
import { Link } from "react-router-dom";
import cod from "../Media/cod.png";
import easyReturn from "../Media/return.png";
import lowestPrice from "../Media/lowestprice.png";
import logo from '../Media/logo.png';
import SuggestiveProductsUnderProductPage from "./SuggestiveProductsUnderProductPage";

export default function ProductPage() {
  return (
    <>
      <div className="container ProductPage">
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 imgDiv">
            <img src={img} alt="Product" />
            <div>
              <button className="btn btn-outline-danger">Add to Cart</button>
              <Link className="btn btn-danger">Buy Now</Link>
            </div>
          </div>
          {/* -------------- */}
          <div className="col-xl-1 col-lg-1 col-md-0 col-0"></div>
          {/* -------------- */}
          <div className="col col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 textDiv">
            <div className="titleDiv">
              <h1 className="title">Rayon Printed Blue Kurta for Women's & Girls</h1>
              <h1 className="price">$241</h1>
              <button disabled className="btn btn-success">
                4.5 <i class="bi bi-star-fill"></i>
              </button>
              <button disabled className="btn btn-light d-block">
                Free Delivery
              </button>
            </div>
            <div className="descDiv">
              <h3 className="h3">Product Description:</h3>
              <p>
                Name : Rayon Printed Blue Kurta for Women's & Girls Fabric :
                Rayon Sleeve Length : Three-Quarter Sleeves Pattern : Printed
                Combo of : Single Sizes : XS, S, M, L, XL, XXL, XXXL Country of
                Origin : India Name : Rayon Printed Blue Kurta for Women's &
                Girls Fabric : Rayon Sleeve Length : Three-Quarter Sleeves
                Pattern : Printed Combo of : Single Sizes : XS, S, M, L, XL,
                XXL, XXXL Country of Origin : India Name : Rayon Printed Blue
                Kurta for Women's & Girls Fabric : Rayon Sleeve Length :
                Three-Quarter Sleeves Pattern : Printed Combo of : Single Sizes
                : XS, S, M, L, XL, XXL, XXXL Country of Origin : India Name :
                Rayon Printed Blue Kurta for Women's & Girls Fabric : Rayon
                Sleeve Length : Three-Quarter Sleeves Pattern : Printed Combo of
                : Single Sizes : XS, S, M, L, XL, XXL, XXXL Country of Origin :
                India
              </p>
            </div>
            <div className="sellerDiv">
              <h3 className="h3">Seller:</h3>
              <div className="row d-flex">
                <div className="col col-2 shopicon">
                  <i class="bi bi-shop-window"></i>
                </div>
                <div className="col col-7">
                  <h1 className="h1">Shop Name</h1>
                </div>
                <div className="col col-3">
                  <Link className="btn btn-danger">ViewShop</Link>
                </div>
              </div>
              <h4 className="h4">Products:94</h4>
              <h4 className="h4">Ratings:4.4</h4>
            </div>

            <div className="advantagesDiv">
              <div className="row d-flex justify-content-center">
                <div className="col-4  d-flex text-center">
                  <div className="icon">
                    <img
                      src={lowestPrice}
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <p>Lowest <br/>Price</p>
                  </div>
                </div>
                <div className="col-4 d-flex  text-center">
                  <div className="icon">
                    <img
                      src={cod}
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <p>Cash on<br/> Delivery</p>
                  </div>
                </div>
                <div className="col-4 d-flex text-center">
                  <div className="icon">
                    <img
                      src={easyReturn}
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <p>Easy 7 Days<br/> Return</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Trust">
                <div className="row d-flex">
                    <div className="col col-2">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col col-10">
                        <h4 className="h4">Best quality products from trusted suppliers</h4>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <SuggestiveProductsUnderProductPage />
    </>
  );
}
