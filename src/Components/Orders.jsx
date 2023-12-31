import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SCSS/Order.scss";
import {
  getAllProductsDataStart,
  userIsLogginnedStart,
  verifyUserStart,
} from "../Redux/action";
import Loading from "./Loading";
import Error from "./Error";

export default function Orders() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userIsLoginned = useSelector((state) => state.userIsLoginned);
  const verifiedUser = useSelector((state) => state.verifiedUser);
  const verifiedUserLoading = useSelector((state) => state.verifiedUserLoading);
  const verifiedUserError = useSelector((state) => state.verifiedUserError);

  //jw token
  const jwtoken = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    dispatch(getAllProductsDataStart());
    if (jwtoken) {
      dispatch(verifyUserStart(jwtoken.token));
    } else {
      navigate("/profile");
    }
  }, []);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (verifiedUser.hasOwnProperty("authorise")) {
      if (verifiedUser.authorise) {
        dispatch(userIsLogginnedStart(true));
      } else {
        navigate("/profile");
      }
    }
    if (verifiedUser.hasOwnProperty("orders")) {
      if (verifiedUser.orders.length > 0) {
        setOrders(verifiedUser.orders.reverse());
      }
    }
  }, [verifiedUser]);

  if (verifiedUserLoading) {
    return (
      <>
        <ul className="nav border-bottom justify-content-center CartNav">
          <li className="nav-item">
            <a className="nav-link">
              <i className="bi bi-person-circle"></i> Orders
            </a>
          </li>
        </ul>
        <Loading />
      </>
    );
  }
  if (verifiedUserError !== "") {
    return (
      <>
        <Error errorMessage={verifiedUserError} />
      </>
    );
  }
  if (userIsLoginned) {
    return (
      <>
        {/* Header--------- */}
        <ul className="nav border-bottom justify-content-center CartNav">
          <Link
            to={"/profile"}
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
              <i className="bi bi-person-circle"></i> Orders
            </a>
          </li>
        </ul>
        <div className="container mt-5 orderss">
          {orders.length > 0 && (
            <div className="row border-bottom pt-3 pb-5">
              <div className="col-10">
                <h5 className="h5 text-secondary">Orders</h5>
              </div>
              <div className="col-2 statuss">
                <h5 className="h5 text-secondary">Status</h5>
              </div>
            </div>
          )}

          {orders.length > 0 ? (
            orders.map((item, index) => (
              <div className="row pt-3" key={index}>
                <div className="col-3">
                  <img
                    onClick={() => {
                      navigate(`/product/${item._id}`);
                    }}
                    src={item.productImages[0]}
                    alt=""
                    className="w-75"
                  />
                </div>
                <div className="col-7">
                  <h5
                    className="h5 text-secondary"
                    onClick={() => {
                      navigate(`/product/${item._id}`);
                    }}
                  >
                    {item.productTitle.split(" ").slice(0, 5).join(" ")} ...
                  </h5>
                  <h5 className="h5 text-secondary">${item.productPrice}</h5>
                </div>
                <div className="col-2">
                  <button disabled className="btn btn-secondary">
                    {item.status}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="orderEmpty">
                <Link to={"/"} className="btn btn-primary">
                  <i className="bi bi-cart3"></i> Return to Shop!
                </Link>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}
