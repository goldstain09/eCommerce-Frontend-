import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./SCSS/UserSignup.scss";
import { createUserStart } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";

export default function UserSignup({
  setAlreadyHaveAccount,
  alreadyHaveAccount,
}) {
  //dispatch & getting value
  const dispatch = useDispatch();
  const createUserRes = useSelector((state) => state.createUserRes);
  const createUserError = useSelector((state) => state.createUserError);
  const createUserLoading = useSelector((state) => state.createUserLoading);

  useEffect(() => {
    if (createUserRes.hasOwnProperty("token")) {
      setUserSignUpData(SignUpData);
      setpassword1("");
      setInterval(() => {
        window.location.reload();
      }, 10);
      clearInterval();
    }
  }, [createUserRes]);

  const SignUpData = {
    userName: "",
    userEmail: "",
    password: "",
  };

  const [userSignUpData, setUserSignUpData] = useState(SignUpData);
  const [password1, setpassword1] = useState("");
  const { userName, userEmail, password } = userSignUpData;
  //errors
  const [nameEmptyError, setNameEmptyError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);
  const [pswrdEmptyError, setPswrdEmptyError] = useState(false);
  const [pswrdDoesnotMatchingError, setPswrdDoesnotMatchingError] =
    useState(false);
  const [emailCorrectError, setEmailCorrectError] = useState(false);

  //input change Function
  const inputChange = (e) => {
    setUserSignUpData({
      ...userSignUpData,
      [e.target.name]: e.target.value,
    });
  };

  // signup function
  const signUp = (e) => {
    e.preventDefault();
    // console.log(userSignUpData);
    if (userName.length > 0) {
      if (userEmail.length > 0) {
        if (password.length === 8 || password.length > 8) {
          if (userEmail.includes(".") && userEmail.includes("@")) {
            if (password === password1) {
              dispatch(createUserStart(userSignUpData));
            } else {
              setPswrdDoesnotMatchingError(true);
            }
          } else {
            setEmailCorrectError(true);
          }
        } else {
          setPswrdEmptyError(true);
        }
      } else {
        setEmailEmptyError(true);
      }
    } else {
      setNameEmptyError(true);
    }
  };

  if (createUserError !== "") {
    return (
      <>
        <Error errorMessage={createUserError} />
      </>
    );
  } else if (createUserLoading) {
    return (
      <>
        {/* Header--------- */}
        <ul className="nav border-bottom justify-content-center CartNav">
          <li className="nav-item">
            <a className="nav-link">
              <i className="bi bi-person-circle"></i> Sign Up
            </a>
          </li>
        </ul>
        <Loading />
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
            <i className="bi bi-person-circle"></i> Sign Up
          </a>
        </li>
      </ul>
      <form onSubmit={signUp} className="container mt-5 ">
        <div className="row justify-content-center">
          <div className="col-7">
            <input
              onChange={inputChange}
              onInput={() => {
                setNameEmptyError(false);
              }}
              value={userName}
              type="text"
              placeholder="Full Name"
              name="userName"
              className="d-block mt-3 w-100 form-control"
            />
            {nameEmptyError && (
              <p className="text-danger">Please enter your name.</p>
            )}
          </div>
          <div className="col-7">
            <input
              onChange={inputChange}
              onInput={() => {
                setEmailCorrectError(false);
                setEmailEmptyError(false);
              }}
              value={userEmail}
              name="userEmail"
              type="email"
              placeholder="Email Address"
              className="d-block mt-3 w-100 form-control"
            />
            {emailEmptyError && (
              <p className="text-danger">Please enter your email.</p>
            )}
            {emailCorrectError && (
              <p className="text-danger">Please enter a valid email.</p>
            )}
            {createUserRes.hasOwnProperty("keyValue") && (
              <p className="text-danger">
                Email is already in use, Please try another one...
              </p>
            )}
          </div>
          <div className="col-7">
            <input
              onChange={inputChange}
              value={password}
              name="password"
              onInput={() => {
                setPswrdEmptyError(false);
              }}
              type="password"
              className="form-control mt-3 w-100 d-block"
              placeholder="Password"
            />
            {pswrdEmptyError && (
              <p className="text-danger">
                Please enter a password with minimum length of 8 or more
                letters.
              </p>
            )}
          </div>
          <div className="col-7">
            <input
              value={password1}
              onChange={(e) => {
                setpassword1(e.target.value);
              }}
              onInput={() => {
                setPswrdDoesnotMatchingError(false);
              }}
              type="password"
              className="form-control mt-3 w-100 d-block"
              placeholder="Confirm Password"
            />
            {pswrdDoesnotMatchingError && (
              <p className="text-danger">Password doesn't matching.</p>
            )}
          </div>
          <div className="col-7">
            <button
              type="submit"
              className="form-control btn mt-3 w-100 d-block btn-success"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
      {alreadyHaveAccount ? (
        <></>
      ) : (
        <h6 className="h6 text-center mt-5 pt-5">
          Already have account?{" "}
          <button
            onClick={() => {
              setAlreadyHaveAccount(true);
            }}
          >
            Login
          </button>
        </h6>
      )}
    </>
  );
}
