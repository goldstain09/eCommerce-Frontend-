import React, { useEffect, useState } from "react";
import "./SCSS/Profile.scss";
import { Link, useNavigate } from "react-router-dom";
import UserSignup from "./UserSignup";
import UserLogin from "./UserLogin";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";

import {
  followSellerStart,
  logoutUserStart,
  unfollowSellerStart,
  userIsLogginnedStart,
  verifyUserStart,
} from "../Redux/action";
import Loading from "./Loading";
import Error from "./Error";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verifiedUser = useSelector((state) => state.verifiedUser);
  const userIsLoginLoading = useSelector((state) => state.userIsLoginLoading);
  const createUserLoading = useSelector((state) => state.createUserLoading);
  const verifiedUserLoading = useSelector((state) => state.verifiedUserLoading);
  const userIsLoginError = useSelector((state) => state.userIsLoginError);
  const createUserError = useSelector((state) => state.createUserError);
  const verifiedUserError = useSelector((state) => state.verifiedUserError);
  // console.log(verifiedUser);

  const [nothasJWToken, setnotHasJWToken] = useState(false);
  const [verified, setVerified] = useState(false);

  //jw token
  const jwtoken = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (jwtoken) {
      dispatch(verifyUserStart(jwtoken.token));
    } else {
      setnotHasJWToken(true);
      dispatch(userIsLogginnedStart(false));
    }
  }, []);

  useEffect(() => {
    if (verifiedUser.hasOwnProperty("authorise")) {
      if (verifiedUser.authorise) {
        if (verifiedUser.hasOwnProperty("Logginned")) {
          setnotHasJWToken(false);
          setVerified(true);
          dispatch(userIsLogginnedStart(true));
          toast.success("LoggedIn SuccessFully!", { theme: "dark" });
        }
      }
    }
    if (verifiedUser.hasOwnProperty("authorise")) {
      if (verifiedUser.authorise) {
        if (verifiedUser.hasOwnProperty("Logginnedd")) {
          setnotHasJWToken(false);
          setVerified(true);
          dispatch(userIsLogginnedStart(true));
          navigate("/");
        }
      }
    }
    if (verifiedUser.hasOwnProperty("logout")) {
      setnotHasJWToken(true);
    }
    if (verifiedUser.hasOwnProperty("authorise")) {
      if (verifiedUser.authorise) {
        if (verifiedUser.hasOwnProperty("accountCreated")) {
          setnotHasJWToken(false);
          setVerified(true);
          navigate("/");
          dispatch(userIsLogginnedStart(true));
        }
      }
    }
  }, [verifiedUser]);

  //if user have arlready an account then it will true
  const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(false);

  if (nothasJWToken) {
    if (userIsLoginLoading || createUserLoading) {
      return (
        <>
          <Loading />
        </>
      );
    } else
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
  } else if (createUserLoading || verifiedUserLoading || userIsLoginLoading) {
    return (
      <>
        <ul className="nav border-bottom justify-content-center CartNav">
          <li className="nav-item">
            <a className="nav-link">
              <i className="bi bi-person-circle"></i> DashBoard
            </a>
          </li>
        </ul>
        <Loading />
      </>
    );
  } else if (userIsLoginError !== "") {
    return (
      <>
        <Error errorMessage={userIsLoginError} />
      </>
    );
  } else if (createUserError !== "") {
    return (
      <>
        <Error errorMessage={createUserError} />
      </>
    );
  } else if (verifiedUserError !== "") {
    return (
      <>
        <Error errorMessage={verifiedUserError} />
      </>
    );
  } else
    return (
      <>
        {/* Header--------- */}
        <ul className="nav border-bottom justify-content-center CartNav">
          <Link
            to={"/"}
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
            <i class="bi bi-box-arrow-left"></i>{" "}
          </Link>
          <li className="nav-item">
            <a className="nav-link">
              <i className="bi bi-person-circle"></i> DashBoard
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
                <div className="col-6">
                  {verified && (
                    <>
                      <h1 className="name">{verifiedUser.userName}</h1>
                      <h1 className="email">{verifiedUser.userEmail}</h1>{" "}
                    </>
                  )}
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-outline-secondary w-100 editbtn"
                    onClick={() => {
                      navigate("/profile/edit");
                    }}
                  >
                    <i class="bi bi-pencil-square"></i>
                  </button>
                </div>
                <div className="col-4 border-top my-5 py-4">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => {
                      navigate("/profile/orders");
                    }}
                  >
                    <i class="bi bi-bag-check"></i> Orders
                  </button>
                </div>
                <div className="col-8 border-top my-5 py-4">
                  <button
                    onClick={() => {
                      setnotHasJWToken(true);
                      dispatch(logoutUserStart());
                      // navigate('/');
                    }}
                    className="btn btn-outline-danger"
                  >
                    <i class="bi bi-box-arrow-right"></i> Log-Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5 pt-5 following">
          <h6>Following:</h6>
          {verifiedUser.hasOwnProperty("authorise") &&
            verifiedUser.authorise &&
            (verifiedUser.followingSellers.length > 0 ? (
              verifiedUser.followingSellers.map((item, index) => (
                <div className="row d-flex border-top pt-4" key={index}>
                  <div className="col col-10">
                    <h3
                      onClick={() => {
                        navigate(`/sellerShop/${item.sellerId}`);
                      }}
                    >
                      {item.Shopname}
                    </h3>
                  </div>
                  <div className="col col-2">
                    <button
                      id={`${item.sellerId}unfollow`}
                      style={{ visibility: "visible" }}
                      className="btn btn-outline-danger"
                      onClick={() => {
                        document.getElementById(
                          `${item.sellerId}follow`
                        ).style.visibility = "visible";
                        document.getElementById(
                          `${item.sellerId}unfollow`
                        ).style.visibility = "hidden";
                        const jwtoken = JSON.parse(
                          localStorage.getItem("token")
                        );
                        dispatch(
                          unfollowSellerStart({
                            userId: verifiedUser.id,
                            userToken: jwtoken.token,
                            sellerId: item.sellerId,
                          })
                        );
                      }}
                    >
                      <i class="bi bi-person-x"></i>
                    </button>
                    <button
                      id={item.sellerId + "follow"}
                      style={{ visibility: "hidden" }}
                      className="btn btn-outline-danger"
                      onClick={() => {
                        document.getElementById(
                          `${item.sellerId}unfollow`
                        ).style.visibility = "visible";
                        document.getElementById(
                          `${item.sellerId}follow`
                        ).style.visibility = "hidden";
                        const jwtoken = JSON.parse(
                          localStorage.getItem("token")
                        );
                        dispatch(
                          followSellerStart({
                            userName: verifiedUser.userName,
                            userId: verifiedUser.id,
                            userToken: jwtoken.token,
                            sellerId: item.sellerId,
                          })
                        );
                      }}
                    >
                      Undo
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <>
                <h3>You didn't followed any seller...</h3>
              </>
            ))}
        </div>
        <ToastContainer />
        <ReactNotifications />
      </>
    );
}
