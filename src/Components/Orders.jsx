import React, { useEffect, useState } from "react";
import img from "../Media/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsDataStart,
  userIsLogginnedStart,
  verifyUserStart,
} from "../Redux/action";

export default function Orders() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userIsLoginned = useSelector((state) => state.userIsLoginned);
  const verifiedUser = useSelector((state) => state.verifiedUser);

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

  if (userIsLoginned) {
    return (
      <>
        {/* Header--------- */}
        <ul class="nav border-bottom justify-content-center CartNav">
          <Link
            to={"/profile"}
            className="btn btn-outline-dark"
            style={{ position: "absolute", top: "1rem", left: "1rem" }}
          >
            back to Profile
          </Link>
          <li class="nav-item">
            <a class="nav-link">
              <i class="bi bi-person-circle"></i> Your Orders
            </a>
          </li>
        </ul>
        <div className="container mt-5">
          <div className="row border-bottom pt-3 pb-5">
            <div className="col-10">
              <h5 className="h5 text-secondary">Orders</h5>
            </div>
            <div className="col-2">
              <h5 className="h5 text-secondary">Status</h5>
            </div>
          </div>
          {orders.length > 0 ? (
            orders.map((item, index) => (
              <div className="row border-bottom pt-3" key={index}>
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
                    {item.productTitle.split(" ").slice(0, 8).join(" ")} ...
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
              <h1>No Orders placed...</h1>
            </>
          )}
        </div>
      </>
    );
  } else {
    return (
      <h3
        className="h3 text-center mt-5 pt-5"
        style={{ color: "#5c0431", fontFamily: "'Inter', sans-serif" }}
      >
        You have to be loginned for your orders{" "}
        <Link to={"/profile"}>Login & SignUp</Link>{" "}
      </h3>
    );
  }
}
