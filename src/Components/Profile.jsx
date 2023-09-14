import React, { useEffect, useState } from "react";
import Orders from "./Orders";
import "./SCSS/Profile.scss";
import { Link, useNavigate } from "react-router-dom";
import UserSignup from "./UserSignup";
import UserLogin from "./UserLogin";
import { useDispatch, useSelector } from "react-redux";
import { verifyUserStart } from "../Redux/action";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verifiedUser = useSelector((state) => state.verifiedUser);
  const createUserRes = useSelector((state) => state.createUserRes);

  console.log(verifiedUser);
  const [nothasJWToken, setnotHasJWToken] = useState(false);
  const [verified, setVerified] = useState(false);

  //jw token
  const jwtoken = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (jwtoken) {
      dispatch(verifyUserStart(jwtoken.token));
    } else {
      setnotHasJWToken(true);
    }
  }, []);

  useEffect(() => {
    setnotHasJWToken(false);
    if (verifiedUser) {
      setnotHasJWToken(false);
      if (verifiedUser.authorise) {
        setnotHasJWToken(false);
        setVerified(true);
      } else {
        // it called when jwtoken is not valid
        setnotHasJWToken(true);
        console.log("dsd");
      }
    }
  }, [verifiedUser]);
  //if user have arlready an account then it will true
  const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(false);

  if (nothasJWToken) {
    return (
      <>
        <UserSignup
          setAlreadyHaveAccount={setAlreadyHaveAccount}
          alreadyHaveAccount={alreadyHaveAccount}
        />
        {alreadyHaveAccount && (
          <UserLogin setnotHasJWToken={setnotHasJWToken} />
        )}
      </>
    );
  }

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
            <i className="bi bi-person-circle"></i> Profile
          </a>
        </li>
      </ul>
      {/* user details */}
      <div className="container userDetails">
        <div className="row d-flex">
          <div className="col col-12 profile">
            <h1 className="h1">Your Details</h1>
            <div className="row">
              <div className="col-3">
                <h1 className="name">Name :</h1>
                <h1 className="email">Email :</h1>
              </div>
              <div className="col-9">
                {verified && (
                  <>
                    <h1 className="name">{verifiedUser.userName}</h1>
                    <h1 className="email">{verifiedUser.userEmail}</h1>{" "}
                  </>
                )}
              </div>
              <div className="col-4 border-top my-5 py-4">
                <button className="btn btn-outline-secondary w-25">Edit</button>
              </div>
              <div className="col-3 border-top my-5 py-4">
                <button
                  className="btn btn-outline-primary w-75"
                  onClick={() => {
                    navigate("/profile/orders");
                  }}
                >
                  Your Orders
                </button>
              </div>
              <div className="col-5 border-top my-5 py-4">
                <button
                onClick={()=>{
                  localStorage.removeItem("token");
                  setInterval(() => {
                    window.location.reload();
                  }, 10);
                  clearInterval();
                }}
                className="btn btn-outline-danger w-75">Log-Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
