import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAddressStart } from "../Redux/action";
import Loading from "./Loading";
import Error from "./Error";

export default function AddressForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verifiedUser = useSelector((state) => state.verifiedUser);
  const addAddressLoading = useSelector((state) => state.addAddressLoading);
  const [addressShouldBeAdd, setAddressShouldBeAdd] = useState(true);

  useEffect(() => {
    if (verifiedUser.hasOwnProperty("address")) {
      if (verifiedUser.address.hasOwnProperty("userPhone")) {
        setAddressFormData(verifiedUser.address);
        setAddressShouldBeAdd(false);
      } else {
        setAddressFormData({
          userName: verifiedUser.userName,
          userEmail: verifiedUser.userEmail,
          userPhone: "",
          address: "",
          pincode: "",
          landmark: "",
        });
        setAddressShouldBeAdd(true);
      }
    } else {
      navigate("/cart");
    }
  }, [verifiedUser]);

  const [addressFormData, setAddressFormData] = useState({
    userName: verifiedUser.userName,
    userEmail: verifiedUser.userEmail,
    userPhone: "",
    address: "",
    pincode: "",
    landmark: "",
  });
  const { userName, userEmail, userPhone, address, pincode, landmark } =
    addressFormData;

  const inputChange = (e) => {
    setAddressFormData({
      ...addressFormData,
      [e.target.name]: e.target.value,
    });
  };
  //errors
  const [emptyAddress, setEmptyAddress] = useState(false);
  const [emptyPhone, setEmptyPhone] = useState(false);
  const [emptyPincode, setEmptyPincode] = useState(false);
  const [emptyLandmark, setEmptyLandmark] = useState(false);

  const add = (e) => {
    e.preventDefault();
    if (userPhone.length === 10 && /^[0-9]{10}$/.test(userPhone)) {
      if (address.length > 90) {
        if (landmark.length > 0) {
          if (pincode.length === 6 && /^[0-9]{6}$/.test(pincode)) {
            // console.log(addressFormData);
            const token = JSON.parse(localStorage.getItem("token"));
            dispatch(
              addAddressStart({
                userDetails: {
                  token: token.token,
                  userId: verifiedUser.id,
                },
                userAddress: {
                  ...addressFormData,
                },
              })
            );
          } else {
            setEmptyPincode(true);
          }
        } else {
          setEmptyLandmark(true);
        }
      } else {
        setEmptyAddress(true);
      }
    } else {
      setEmptyPhone(true);
    }
  };

  if (addAddressLoading) {
    return (
      <>
        <Loading />
      </>
    );
  } else
    return (
      <>
        <form onSubmit={add} className="Addresss">
          <h2 className="h2">Add Your Address</h2>
          <div className="row d-flex">
            <div className="mb-3 w-50">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                readOnly
                value={userName}
                name="userName"
                onChange={inputChange}
              />
            </div>
            <div className="mb-3 w-50">
              <label className="form-label">Phone No.</label>
              <input
                type="tel"
                name="userPhone"
                value={userPhone}
                className="form-control"
                onChange={(e) => {
                  if (/^$|^[0-9]+$/.test(e.target.value)) {
                    setAddressFormData({
                      ...addressFormData,
                      userPhone: e.target.value,
                    });
                  }
                  setEmptyPhone(false);
                }}
              />
              {emptyPhone && (
                <p className="text-danger">Please enter a valid Phone Number</p>
              )}
            </div>
            <div className="mb-3 w-75">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={address}
                onChange={inputChange}
                onInput={() => {
                  setEmptyAddress(false);
                }}
              />
              {emptyAddress && (
                <p className="text-danger">
                  Address Should be minimum 15 words (Full Address)
                </p>
              )}
            </div>
            <div className="mb-3 w-25">
              <label className="form-label">Landmark</label>
              <input
                type="text"
                name="landmark"
                value={landmark}
                className="form-control"
                onChange={inputChange}
                onInput={() => {
                  setEmptyLandmark(false);
                }}
              />
              {emptyLandmark && (
                <p className="text-danger">Please enter any Landmark...</p>
              )}
            </div>
            <div className="mb-3 w-75">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="userEmail"
                readOnly
                value={userEmail}
                onChange={inputChange}
              />
            </div>
            <div className="mb-3 w-25">
              <label className="form-label">Pin Code</label>
              <input
                type="number"
                className="form-control"
                name="pincode"
                value={pincode}
                onChange={inputChange}
                onInput={() => {
                  setEmptyPincode(false);
                }}
              />
              {emptyPincode && (
                <p className="text-danger">Please enter a correct PinCode</p>
              )}
            </div>
          </div>
          <button className="btn btn-outline-success" type="submit">
            {addressShouldBeAdd ? "Add" : "Update"}
          </button>
          {addressShouldBeAdd ? (
            <></>
          ) : (
            <p className="text-secondary mt-2">
              NOTE* If you make some changes in this address, make sure to
              Update it, otherwise your order placed on previous address...
            </p>
          )}
        </form>
      </>
    );
}
