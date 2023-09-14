import React from "react";
import { Link } from "react-router-dom";

export default function ProfileEdit() {


    const submitChanges = (e) =>{
        e.preventDefault();

    }
    const inputChange = (e) => {
        e.preventDefault()
    }
  return (
    <>     
      {/* Header--------- */}
      <ul className="nav border-bottom justify-content-center CartNav">
        <Link
          to={"/profile"}
          className="btn btn-outline-dark"
          style={{ position: "absolute", top: "1rem", left: "1rem" }}
        >
          back to Profile
        </Link>
        <li className="nav-item">
          <a className="nav-link">
            <i className="bi bi-person-circle"></i> Edit Your Details CArefully
          </a>
        </li>
      </ul>
      <form className="container mt-5 pt-5" onSubmit={submitChanges}>
        <div className="row justify-content-center">
          <div className="col-7">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-7">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-7">
            <label className="form-label">Current Password</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-7 text-center mt-5 pt-3">
            <button type="submit" className="btn btn-success">Submit Changes</button>
          </div>
        </div>
      </form>
    </>
  );
}
