import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SCSS/CheckoutPage.scss";
import AddressForm from "./AddressForm";
import PaymentMethod from "./PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { placeOrderStart } from "../Redux/action";
import Loading from "./Loading";
import Error from "./Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const forCheckoutProduct = useSelector((state) => state.forCheckoutProduct);
  const forCheckoutProductError = useSelector(
    (state) => state.forCheckoutProductError
  );
  const forCheckoutProductLoading = useSelector(
    (state) => state.forCheckoutProductLoading
  );
  const addAddressRes = useSelector((state) => state.addAddressRes);
  const addAddressError = useSelector((state) => state.addAddressError);
  const verifiedUser = useSelector((state) => state.verifiedUser);
  const orderPlacedResponse = useSelector((state) => state.orderPlacedResponse);
  const orderPlacedLoading = useSelector((state) => state.orderPlacedLoading);
  const orderPlacedError = useSelector((state) => state.orderPlacedError);

  useEffect(() => {
    if (orderPlacedResponse.hasOwnProperty("orderPlaced")) {
      if (orderPlacedResponse.orderPlaced) {
        toast.success("Hurrey!! Order Placed!", {
          theme: "dark",
          autoClose: 1000,
          position: "top-center",
          draggable: true,
          pauseOnHover: true,
        });
        setInterval(() => {
          navigate("/profile/orders");
          setInterval(() => {
            window.location.reload();
          }, 1000);
          clearInterval();
        }, 1000);
        clearInterval();
      }
    }
  }, [orderPlacedResponse]);

  const [addressISAddedAlready, setAddressISAddedAlready] = useState(true);
  useEffect(() => {
    if (verifiedUser.hasOwnProperty("address")) {
      if (verifiedUser.address.hasOwnProperty("userPhone")) {
        setAddressISAddedAlready(false);
      } else {
        setAddressISAddedAlready(true);
      }
    } else {
      setAddressISAddedAlready(true);
    }
    if (verifiedUser.hasOwnProperty("cart")) {
      if (verifiedUser.cart.length === 0) {
        navigate("/cart");
      }
    }
  }, [verifiedUser]);

  // const [showPlaceOrderBtn, setShowPlaceOrderBtn] = useState(false);

  const [checkoutProducts, setCheckoutProducts] = useState([]);
  useEffect(() => {
    if (forCheckoutProduct.hasOwnProperty("cart")) {
      if (forCheckoutProduct.cart.length > 0) {
        setCheckoutProducts(forCheckoutProduct.cart);
      }
    }
  }, [forCheckoutProduct]);
  useEffect(() => {
    if (addAddressRes.hasOwnProperty("addressAdded")) {
      if (addAddressRes.addressAdded) {
        // setShowPlaceOrderBtn(true);
        setAddressISAddedAlready(false);
        toast.success("Addess is added!", {
          theme: "dark",
          autoClose: 1000,
          position: "top-center",
          draggable: true,
          pauseOnHover: true,
        });
      }
    }
  }, [addAddressRes]);

  if (orderPlacedLoading || forCheckoutProductLoading) {
    return (
      <>
        <ul className="nav border-bottom justify-content-center CheckoutNav">
          <li className="nav-item">
            <a className="nav-link">
              <i className="bi bi-bag-check-fill"></i> Checkout
            </a>
          </li>
        </ul>
        <Loading />
      </>
    );
  } else if (forCheckoutProductError !== "") {
    return (
      <>
        <Error errorMessage={forCheckoutProductError} />
      </>
    );
  } else if (addAddressError !== "") {
    return (
      <>
        <Error errorMessage={addAddressError} />
      </>
    );
  } else if (orderPlacedError !== "") {
    return (
      <>
        <Error errorMessage={orderPlacedError} />
      </>
    );
  }
  return (
    <>
      {/* Header--------- */}
      <ul className="nav border-bottom justify-content-center CartNav">
        <Link
          to={"/cart"}
          className="btn btn-outline-dark"
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            border: "none",
            fontSize: "1.4rem",
            zIndex: "1",
          }}
        >
          <i className="bi bi-box-arrow-left"></i>{" "}
        </Link>
        <li className="nav-item">
          <a className="nav-link">
            <i className="bi bi-bag-check-fill"></i> Checkout
          </a>
        </li>
      </ul>
      {/* Carts */}
      <div className="container CheckoutDiv mt-5">
        <p className="h5">
          Total |<span>{checkoutProducts.length} Items</span>
        </p>
        {/* product detail */}
        <div className="row d-flex">
          {checkoutProducts.length > 0 ? (
            checkoutProducts.map((item, index) => (
              <div className="col col-12" key={index}>
                <div className="row d-flex">
                  <div className="col col-3">
                    <img src={item.productImages[0]} alt="--" />
                  </div>
                  <div className="col col-9">
                    <h1 className="title">
                      {item.productTitle.split(" ").slice(0, 6).join(" ")}...
                    </h1>
                    <h1 className="price">${item.productPrice}</h1>
                    <h1 className="text">All issue easy returns allowed</h1>
                    <h1 className="qty">Quantity:{item.quantity}</h1>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <Error errorMessage={forCheckoutProductError} />
            </>
          )}
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
                {forCheckoutProduct.hasOwnProperty("totalPrice") ? (
                  <h1 className="h6 text-secondary mt-3 pb-3">
                    ${forCheckoutProduct.totalPrice}
                  </h1>
                ) : (
                  <h1 className="h6 text-secondary mt-3 pb-3">$0</h1>
                )}
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col col-9">
                <h1 className="h5 text-secondary mt-3 ">Grand Total Price</h1>
              </div>
              <div className="col col-3">
                {forCheckoutProduct.hasOwnProperty("totalPrice") ? (
                  <h1 className="h6 text-secondary mt-3 pb-3">
                    ${forCheckoutProduct.totalPrice}
                  </h1>
                ) : (
                  <h1 className="h5 text-secondary mt-3  pb-3">$0</h1>
                )}
              </div>
            </div>
            {addressISAddedAlready ? (
              <></>
            ) : (
              <div className="row">
                <div className="col col-12">
                  <button
                    onClick={() => {
                      const token = JSON.parse(localStorage.getItem("token"));
                      dispatch(
                        placeOrderStart({
                          products: checkoutProducts,
                          userDetails: {
                            token: token.token,
                            userId: verifiedUser.id,
                          },
                        })
                      );
                    }}
                    className="w-100 btn btn-danger fs-3 py-1"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
