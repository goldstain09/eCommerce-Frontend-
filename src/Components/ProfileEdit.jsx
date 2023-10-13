import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { editUserStart } from "../Redux/action";
import Loading from "./Loading";

export default function ProfileEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const responseOfEdit = useSelector((state) => state.editSuccess);
  const editUserSuccessLoading = useSelector((state) => state.editUserSuccessLoading);

  useEffect(() => {
    if (responseOfEdit) {
      switch (responseOfEdit.authorise) {
        case true:
          localStorage.setItem(
            "token",
            JSON.stringify({ token: responseOfEdit.token })
          );
          setInterval(() => {
            navigate("/profile");
            window.location.reload();
          }, 10);
          clearInterval();
          alert('Updated Successfully');
          break;
        case false:
          setPasswordIncorrectError(true);
          break;
      }
    }
  }, [responseOfEdit]);

  const verifiedUser = useSelector((state) => state.verifiedUser);
  const { userEmail, userName } = verifiedUser;
  const initialEditData = {
    userEmail: userEmail,
    userName: userName,
    password: "",
  };
  useEffect(()=>{
    if(verifiedUser.hasOwnProperty('authorise')){
    }else{
      navigate('/profile');
    }
  },[])

  const [editData, setEditData] = useState(initialEditData);
  // const { userEmail, userName } = editData; //we have to set name similar to db but here if we extract then keys are same intwo constant...

  //errors
  const [nameEmptyError, setNameEmptyError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);
  const [passwordEmptyError, setPasswordEmptyError] = useState(false);
  const [passwordIncorrectError, setPasswordIncorrectError] = useState(false);

  const submitChanges = (e) => {
    e.preventDefault();
    // console.log(editData);
    if (editData.userName.length > 0) {
      if (
        editData.userEmail.length > 0 &&
        editData.userEmail.includes(".") &&
        editData.userEmail.includes("@")
      ) {
        if (editData.password.length > 8 || editData.password.length === 8) {
          const jwtoken = JSON.parse(localStorage.getItem("token"));
          editData.token = jwtoken.token;
          dispatch(editUserStart(editData));
        } else {
          setPasswordEmptyError(true);
        }
      } else {
        setEmailEmptyError(true);
      }
    } else {
      setNameEmptyError(true);
    }
  };
  const inputChange = (e) => {
    e.preventDefault();
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  if(editUserSuccessLoading){
    return(
      <>
      <ul className="nav border-bottom justify-content-center CartNav">
        <li className="nav-item">
          <a className="nav-link">
            <i className="bi bi-person-circle"></i> Updating...
          </a>
        </li>
      </ul>
      <Loading />
      </>
    )
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
            <i className="bi bi-person-circle"></i> Edit Your Details Carefully
          </a>
        </li>
      </ul>
      <form className="container mt-5 pt-5" onSubmit={submitChanges}>
        <div className="row justify-content-center">
          <div className="col-7">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={editData.userName}
              onChange={inputChange}
              onInput={() => {
                setNameEmptyError(false);
              }}
            />
            {nameEmptyError && (
              <p className="text-danger">Please Enter a Proper Name.</p>
            )}
          </div>
          <div className="col-7">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="userEmail"
              value={editData.userEmail}
              onChange={inputChange}
              onInput={() => {
                setEmailEmptyError(false);
              }}
            />
            {emailEmptyError && (
              <p className="text-danger">Please Enter a Proper Email.</p>
            )}
          </div>
          <div className="col-7">
            <label className="form-label">Current Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              value={editData.password}
              onChange={inputChange}
              onInput={() => {
                setPasswordEmptyError(false);
                setPasswordIncorrectError(false);
              }}
            />
            {passwordEmptyError && (
              <p className="text-danger">Please enter a correct password</p>
            )}
            {passwordIncorrectError && (
              <p className="text-danger">Please enter a correct password</p>
            )}
          </div>
          <div className="col-7 text-center mt-5 pt-3">
            <button type="submit" className="btn btn-success">
              Submit Changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
}


