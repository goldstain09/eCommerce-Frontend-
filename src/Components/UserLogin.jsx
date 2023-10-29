import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUserStart } from "../Redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";
import Error from "./Error";
import "./SCSS/UserLogin.scss";

export default function UserLogin({ setnotHasJWToken }) {
  const dispatch = useDispatch();

  const userIsLogin = useSelector((state) => state.userIsLogin);
  const userIsLoginLoading = useSelector((state) => state.userIsLoginLoading);
  const userIsLoginError = useSelector((state) => state.userIsLoginError);
  // console.log(userIsLogin);

  //initial data
  const initialData = {
    userEmail: "",
    password: "",
  };
  const [initialDataLogin, setInitialDataLogin] = useState(initialData);
  const { userEmail, password } = initialDataLogin;

  const [userPasswordOrEmailisNotCorrect, setUserPasswordOrEmailisNotCorrect] =
    useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    switch (userIsLogin.authorise) {
      case true:
        localStorage.setItem(
          "token",
          JSON.stringify({ token: userIsLogin.token })
        );
        setUserPasswordOrEmailisNotCorrect(false);
        setnotHasJWToken(false);
        // toast.success("LoggedIn SuccessFully!", { theme: "dark" });
        break;
      case false:
        setUserPasswordOrEmailisNotCorrect(true);
        break;
    }
  }, [userIsLogin]);

  const inputChange = (e) => {
    e.preventDefault();

    setInitialDataLogin({
      ...initialDataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    if (
      userEmail.length > 0 &&
      userEmail.includes(".") &&
      userEmail.includes("@")
    ) {
      if (password.length === 8 || password.length > 8) {
        dispatch(loginUserStart(initialDataLogin));
      } else {
        setPasswordError(true);
      }
    } else {
      setEmailError(true);
    }
  };

  if (userIsLoginError !== "") {
    return (
      <>
        <Error errorMessage={userIsLoginError} />
      </>
    );
  } else if (userIsLoginLoading) {
    return (
      <>
        {/* Header--------- */}
        <ul className="nav border-bottom justify-content-center CartNav mt-5 pt-5">
          <li className="nav-item">
            <a className="nav-link">
              <i className="bi bi-person-circle"></i> Login
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
      <ul className="nav border-bottom justify-content-center CartNav mt-5 pt-5">
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
          <i class="bi bi-box-arrow-left"></i>
        </Link>
        <li className="nav-item">
          <a className="nav-link">
            <i className="bi bi-person-circle"></i> Login
          </a>
        </li>
      </ul>
      <form className="container mt-5 Login" onSubmit={login}>
        <div className="row justify-content-center">
          <div className="col-7">
            <input
              onChange={inputChange}
              onInput={() => {
                setEmailError(false);
                setUserPasswordOrEmailisNotCorrect(false);
              }}
              name="userEmail"
              type="email"
              placeholder="Email Address"
              className="d-block mt-3 w-100 form-control"
            />
            {emailError && (
              <p className="text-danger">Please enter a Valid Email.</p>
            )}
          </div>
          <div className="col-7">
            <input
              onChange={inputChange}
              onInput={() => {
                setPasswordError(false);
                setUserPasswordOrEmailisNotCorrect(false);
              }}
              name="password"
              type="password"
              className="form-control mt-3 w-100 d-block"
              placeholder="Password"
            />
            {passwordError && (
              <p className="text-danger">Enter a valid password...</p>
            )}
            {userPasswordOrEmailisNotCorrect && (
              <p className="text-danger">Email Or Password is not Correct.</p>
            )}
          </div>
          <div className="col-7">
            <button
              type="submit"
              style={{ background: "#5c0431", border: "1px solid #5c0431" }}
              className="form-control btn mt-3 w-100 d-block btn-success"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
