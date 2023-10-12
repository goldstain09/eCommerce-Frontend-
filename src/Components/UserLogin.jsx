import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUserStart } from "../Redux/action"; 
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserLogin({ setnotHasJWToken }) {
  const dispatch = useDispatch();

  const userIsLogin = useSelector((state) => state.userIsLogin);
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
        localStorage.setItem('token', JSON.stringify({token:userIsLogin.token}));
        setUserPasswordOrEmailisNotCorrect(false);
        setnotHasJWToken(false);
        toast.success("LoggedIn SuccessFully!",{theme:"dark"})
        setInterval(() => {
          window.location.reload();
        }, 10);
        clearInterval();
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
  return (
    <>
      {/* Header--------- */}
      <ul className="nav border-bottom justify-content-center CartNav mt-5 pt-5">
        <Link
          to={"/"}
          className="btn btn-outline-dark"
          style={{ position: "absolute", top: "1rem", left: "1rem" }}
        >
          back to Home
        </Link>
        <li className="nav-item">
          <a className="nav-link">
            <i className="bi bi-person-circle"></i> Login
          </a>
        </li>
      </ul>
      <form className="container mt-5" onSubmit={login}>
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
