import React, { useEffect, useState } from "react";
import "./SCSS/ProductPage.scss";
import img from "../Media/suitLady.jpg";
import { Link, useParams } from "react-router-dom";
import cod from "../Media/cod.png";
import easyReturn from "../Media/return.png";
import lowestPrice from "../Media/lowestprice.png";
import logo from "../Media/logo.png";
import SuggestiveProductsUnderProductPage from "./SuggestiveProductsUnderProductPage";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getOneProductDataStart } from "../Redux/action";

export default function ProductPage() {
  const params = useParams();
  const currentProduct = useSelector((state) => state.currentProduct);
  console.log(currentProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProductDataStart(params.id));
  }, []);

  const [product, setProduct] = useState({});
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    if (currentProduct.hasOwnProperty("_id")) {
      setProduct(currentProduct);
    }
  }, [currentProduct]);
  return (
    <>
      <Header />
      {product.hasOwnProperty("_id") ? (
        <div className="container ProductPage">
          <div className="row d-flex">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 imgDiv">
              <img src={product.productImages[imageIndex]} alt="Product" />
              <div className="row d-flex">
                <div className="col-2">
                  <img src={product.productImages[0]} alt="" onClick={()=>{setImageIndex(0)}} />
                </div>
                <div className="col-2">
                  <img src={product.productImages[1]} alt=""  onClick={()=>{setImageIndex(1)}}  />
                </div>
                <div className="col-2">
                  <img src={product.productImages[2]} alt=""  onClick={()=>{setImageIndex(2)}}  />
                </div>
                <div className="col-2">
                  <img src={product.productImages[3]} alt=""  onClick={()=>{setImageIndex(3)}}  />
                </div>
                <div className="col-2">
                  <img src={product.productImages[4]} alt=""  onClick={()=>{setImageIndex(4)}}  />
                </div>
              </div>
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
                <h1 className="title">{product.productTitle}</h1>
                <h1 className="price">${product.productPrice}</h1>
                <button disabled className="btn btn-success">
                  {product.productRating} <i className="bi bi-star-fill"></i>
                </button>
                <button disabled className="btn btn-light d-block">
                  Free Delivery
                </button>
              </div>
              <div className="descDiv">
                <h3 className="h3">Product Description:</h3>
                <p>{product.productDescription}</p>
              </div>
              <div className="sellerDiv">
                <h3 className="h3">Seller:</h3>
                <div className="row d-flex">
                  <div className="col col-2 shopicon">
                    <i className="bi bi-shop-window"></i>
                  </div>
                  <div className="col col-7">
                    <h1 className="h1">{product.shopName}</h1>
                  </div>
                  <div className="col col-3">
                    <Link className="btn btn-danger">ViewShop</Link>
                  </div>
                </div>
              </div>

              <div className="advantagesDiv">
                <div className="row d-flex justify-content-center">
                  <div className="col-4  d-flex text-center">
                    <div className="icon">
                      <img src={lowestPrice} alt="" />
                    </div>
                    <div className="text">
                      <p>
                        Lowest <br />
                        Price
                      </p>
                    </div>
                  </div>
                  <div className="col-4 d-flex  text-center">
                    <div className="icon">
                      <img src={cod} alt="" />
                    </div>
                    <div className="text">
                      <p>
                        Cash on
                        <br /> Delivery
                      </p>
                    </div>
                  </div>
                  <div className="col-4 d-flex text-center">
                    <div className="icon">
                      <img src={easyReturn} alt="" />
                    </div>
                    <div className="text">
                      <p>
                        Easy 7 Days
                        <br /> Return
                      </p>
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
                    <h4 className="h4">
                      Best quality products from trusted suppliers
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1>Unable to fetch product data..., please retry</h1>
        </>
      )}

      {/* <SuggestiveProductsUnderProductPage /> */}
      <Footer />
    </>
  );
}
