import React, { useEffect, useState } from "react";
import "./SCSS/ProductPage.scss";
import { Link, useParams } from "react-router-dom";
import cod from "../Media/cod.png";
import easyReturn from "../Media/return.png";
import lowestPrice from "../Media/lowestprice.png";
import logo from "../Media/logo.png";
import SuggestiveProductsUnderProductPage from "./SuggestiveProductsUnderProductPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartStart,
  getOneProductDataStart,
  userIsLogginnedStart,
  verifyUserStart,
} from "../Redux/action";
import Loading from "./Loading";
import Error from "./Error";
import { SpinnerDotted } from "spinners-react";

export default function ProductPage() {
  const params = useParams();
  const currentProduct = useSelector((state) => state.currentProduct);
  const productsPageLoading = useSelector((state) => state.productsPageLoading);
  const productsPageError = useSelector((state) => state.productsPageError);
  const userIsLoginned = useSelector((state) => state.userIsLoginned);
  const verifiedUser = useSelector((state) => state.verifiedUser);
  const addToCartLoading = useSelector((state) => state.addToCartLoading);
  //jw token --- user verification
  const jwtoken = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (jwtoken) {
      dispatch(verifyUserStart(jwtoken.token));
    }
  }, []);
  useEffect(() => {
    if (verifiedUser.hasOwnProperty("authorise")) {
      if (verifiedUser.authorise) {
        dispatch(userIsLogginnedStart(true));
        setcartLength(verifiedUser.cart.length);
      }
    }
  }, [verifiedUser]);

  //if this product is already in cart then it is true otherwise false
  const [alreadyInCartBtn, setAlreadyInCartBtm] = useState(true);
  const [cartLength, setcartLength] = useState(0);
  useEffect(() => {
    if (verifiedUser.hasOwnProperty("cart")) {
      if (verifiedUser.cart.length > 0) {
        const notInCart = verifiedUser.cart.every(
          (item) => item.productId !== params.id
        );
        // if current product present in cart it return false
        // console.log(notInCart);
        if (notInCart) {
          setAlreadyInCartBtm(true);
        } else {
          setAlreadyInCartBtm(false);
          if (verifiedUser.cart.length > cartLength) {
            toast.success("Product is in your Cart", {
              theme: "dark",
              autoClose: 1000,
              position: "top-center",
              draggable: true,
              pauseOnHover: true,
            });
          }
        }
      } else {
        setAlreadyInCartBtm(true);
      }
    }
  }, [verifiedUser]);

  // console.log(currentProduct);
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

  if (productsPageLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  } else if (productsPageError !== "") {
    return (
      <>
        <Error errorMessage={productsPageError} />
      </>
    );
  }
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
                  <img
                    src={product.productImages[0]}
                    alt=""
                    onClick={() => {
                      setImageIndex(0);
                    }}
                  />
                </div>
                <div className="col-2">
                  <img
                    src={product.productImages[1]}
                    alt=""
                    onClick={() => {
                      setImageIndex(1);
                    }}
                  />
                </div>
                <div className="col-2">
                  <img
                    src={product.productImages[2]}
                    alt=""
                    onClick={() => {
                      setImageIndex(2);
                    }}
                  />
                </div>
                <div className="col-2">
                  <img
                    src={product.productImages[3]}
                    alt=""
                    onClick={() => {
                      setImageIndex(3);
                    }}
                  />
                </div>
                <div className="col-2">
                  <img
                    src={product.productImages[4]}
                    alt=""
                    onClick={() => {
                      setImageIndex(4);
                    }}
                  />
                </div>
              </div>
              <div>
                {addToCartLoading ? (
                  <>
                    <button className="btn btn-outline-danger">
                      <SpinnerDotted speed={180} color="#5c0431" />
                    </button>
                  </>
                ) : userIsLoginned ? (
                  alreadyInCartBtn ? (
                    <button
                      onClick={() => {
                        const jwtoken = JSON.parse(
                          localStorage.getItem("token")
                        );
                        dispatch(
                          addToCartStart({
                            userToken: jwtoken.token,
                            userId: verifiedUser.id,
                            productId: product._id,
                            quantity: 1,
                          })
                        );
                      }}
                      className="btn btn-outline-danger"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <Link className="btn btn-outline-danger" to={"/cart"}>
                      Go to Cart
                    </Link>
                  )
                ) : (
                  <Link to={"/profile"} className="btn btn-outline-danger">
                    Add to Cart
                  </Link>
                )}
              </div>
            </div>
            {/* -------------- */}
            <div className="col-xl-1 col-lg-1 col-md-0 col-0 mt-sm-4 mt-md-4 mt-4"></div>
            {/* -------------- */}
            <div className="col col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 textDiv ">
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
                    <Link
                      to={`/sellerShop/${product.sellerId}`}
                      className="btn btn-danger"
                    >
                      View Shop
                    </Link>
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

      <SuggestiveProductsUnderProductPage product={product} />
      <Footer />
      <ToastContainer />
    </>
  );
}
