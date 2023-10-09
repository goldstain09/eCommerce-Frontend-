import React, { useEffect, useState } from "react";
import "./SCSS/CartPage.scss";
import img from "../Media/cod.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsDataStart,
  removeFromCartStart,
  setProductsForCheckoutStart,
  setQuantityStart,
  userIsLogginnedStart,
  verifyUserStart,
} from "../Redux/action";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userIsLoginned = useSelector((state) => state.userIsLoginned);
  const verifiedUser = useSelector((state) => state.verifiedUser);
  const allProductsData = useSelector((state) => state.allProductsData);
  const quantityAdded = useSelector((state) => state.quantityAdded);
  const productRemovedRes = useSelector((state) => state.productRemovedRes);
  //jw token
  const jwtoken = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    dispatch(getAllProductsDataStart());
    if (jwtoken) {
      dispatch(verifyUserStart(jwtoken.token));
    }else{
      navigate('/profile');
    }
  }, []);
  useEffect(() => {
    if (quantityAdded.hasOwnProperty("quantityUpdated")) {
      if (quantityAdded.quantityUpdated) {
        window.location.reload();
      }
    }
  }, [quantityAdded]);
  useEffect(() => {
    if (productRemovedRes.hasOwnProperty("removed")) {
      if (productRemovedRes.removed) {
        window.location.reload();
      }
    }
  }, [productRemovedRes]);

  const [cart, setCart] = useState([]);
  const [currentOne, setCurrentOne] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if(verifiedUser.hasOwnProperty('authorise')){
      if (verifiedUser.authorise) {
        dispatch(userIsLogginnedStart(true));
      }else{
        navigate('/profile');
      }
    }
    if (verifiedUser.hasOwnProperty("cart")) {
      if (verifiedUser.cart.length > 0) {
        //extracting product ids
        const productIds = verifiedUser.cart.map((item) => item.productId);
        //extracting products through their ids
        const cartProducts = allProductsData.filter((item) =>
          productIds.includes(item._id)
        );
        // adding quantity through verifiedUser.cart because it have quantity and extracting it and set it to products with matching their ids
        const cartProductsWithQuantity = cartProducts.map((item2) => {
          const matchedItem = verifiedUser.cart.find(
            (item1) => item1.productId === item2._id
          );
          if (matchedItem) {
            return {
              ...item2,
              quantity: matchedItem.quantity,
            };
          }
          return item2;
        });
        setCart(cartProductsWithQuantity);
        const productTotalpriceWithQuan = cartProductsWithQuantity.map(
          (item) => ({ price: item.productPrice, quan: item.quantity })
        );
        const totalPriceAccToQuantity = productTotalpriceWithQuan
          .map((item) => item.price * item.quan)
          .reduce((acc, cur) => acc + cur, 0);
        // console.log(totalPriceAccToQuantity);
        setTotalPrice(totalPriceAccToQuantity);
      }
    }
  }, [verifiedUser, allProductsData]);

  if (userIsLoginned) {
    return (
      <>
        {/* Header--------- */}
        <ul className="nav border-bottom justify-content-center CartNav">
          <Link
            to={"/"}
            className="btn btn-outline-dark"
            style={{ position: "absolute", top: "1rem", left: "1rem" }}
          >
            back to Home
          </Link>
          <li className="nav-item">
            <a className="nav-link">
              <i className="bi bi-basket"></i> Cart
            </a>
          </li>
        </ul>
        {/* Carts */}
        {cart.length > 0 ? (
          <>
            <div className="container CartItemsDiv mt-5">
              <p className="h5">
                Cart | <span>{cart.length} Items</span>
              </p>
              <div className="row d-flex">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                  >
                    <div className="row d-flex">
                      <div className="col col-2">
                        <img src={item.productImages[0]} alt="--" />
                      </div>
                      <div className="col col-8">
                        <h1 className="title">
                          {item.productTitle.split(" ").slice(0, 6).join(" ")}
                          ...
                        </h1>
                        <h1 className="price">${item.productPrice}</h1>
                        <h1 className="text">All issue easy returns allowed</h1>
                        <h1 className="qty">Quantity:{item.quantity}</h1>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => {
                            const tokenn = JSON.parse(
                              localStorage.getItem("token")
                            );
                            dispatch(
                              removeFromCartStart({
                                productId: item._id,
                                token: tokenn.token,
                                userId: verifiedUser.id,
                              })
                            );
                          }}
                        >
                          <i className="bi bi-trash3"></i> Remove
                        </button>
                      </div>
                      <div className="col col-2">
                        <button
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                          className="btn btn-outline-secondary"
                          onClick={() => {
                            setCurrentOne(item);
                            setQuantity(item.quantity);
                          }}
                        >
                          <i className="bi bi-pen"></i> Edit
                        </button>
                      </div>
                    </div>
                    <div className="row border-top">
                      <div className="col col-9">
                        <h6 className="h6 mt-3 text-secondary">
                          Sold by: {item.shopName}
                        </h6>
                      </div>
                      <div className="col col-3">
                        <h6 className="h6 mt-3 text-secondary">
                          Free Delivery
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}

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
                      <h1 className="h6 text-secondary mt-3 pb-3">
                        ${totalPrice}
                      </h1>
                    </div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col col-9">
                      <h1 className="h5 text-secondary mt-3 ">Order Total</h1>
                    </div>
                    <div className="col col-3">
                      <h1 className="h5 text-secondary mt-3  pb-3">
                        ${totalPrice}
                      </h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12">
                      <Link
                        to={"/checkout"}
                        className="w-100 btn btn-danger fs-3 py-1"
                        onClick={() => {
                          dispatch(setProductsForCheckoutStart({cart:cart,totalPrice:totalPrice}));
                        }}
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
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header border-bottom">
                <h5 id="offcanvasRightLabel" className="text-secondary">
                  EDIT ITEM
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="row">
                  <div className="col col-2">
                    {currentOne.hasOwnProperty("productImages") && (
                      <img
                        src={currentOne.productImages[0]}
                        alt=""
                        className="w-100"
                      />
                    )}
                  </div>
                  <div className="col col-10">
                    {currentOne.hasOwnProperty("productTitle") && (
                      <h1 className="h6 text-secondary">
                        {currentOne.productTitle
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}
                      </h1>
                    )}
                    <h1 className="h5 text-dark">${currentOne.productPrice}</h1>
                    <h1 className="h5 text-dark d-inline-block">Quantity</h1>
                    &emsp;
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        } else {
                          setQuantity(1);
                        }
                      }}
                    >
                      -
                    </button>
                    <button className="btn btn-light" disabled>
                      {quantity}
                    </button>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        if (quantity < 10) {
                          setQuantity(quantity + 1);
                        } else {
                          setQuantity(10);
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="row border-top border-bottom mt-4">
                  <div className="col col-9 mt-2 mb-2 h5">Total Price</div>
                  <div className="col col-3 mb-2 mt-2 h5">
                    ${currentOne.productPrice * quantity}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col col-12">
                    <button
                      className="btn w-100 btn-danger"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      onClick={() => {
                        const tokenn = JSON.parse(
                          localStorage.getItem("token")
                        );
                        dispatch(
                          setQuantityStart({
                            productId: currentOne._id,
                            newQuantity: quantity,
                            token: tokenn.token,
                            userId: verifiedUser.id,
                          })
                        );
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>Cart is Empty...</h1>
          </>
        )}
      </>
    );
  } else {
    return (
      <h3
        className="h3 text-center mt-5 pt-5"
        style={{ color: "#5c0431", fontFamily: "'Inter', sans-serif" }}
      >
        You have to be loginned for your Cart{" "}
        <Link to={"/profile"}>Login & SignUp</Link>{" "}
      </h3>
    );
  }
}
