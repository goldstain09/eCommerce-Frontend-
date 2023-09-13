import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserLogin() {
  //initial data
  const initialData = {
    userEmail: "",
    password: "",
  };
  const [initialDataLogin, setInitialDataLogin] = useState(initialData);
  const { userEmail, password } = initialDataLogin;

  const inputChange = (e) => {
    e.preventDefault();

    setInitialDataLogin({
      ...initialDataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    // if(){}
    console.log(initialDataLogin);
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
              name="userEmail"
              type="email"
              placeholder="Email Address"
              className="d-block mt-3 w-100 form-control"
            />
          </div>
          <div className="col-7">
            <input
              onChange={inputChange}
              name="password"
              type="password"
              className="form-control mt-3 w-100 d-block"
              placeholder="Password"
            />
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
    </>
  );
}
