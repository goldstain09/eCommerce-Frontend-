import React from "react";

export default function AddressForm() {
  return (
    <>
      <form>
        <div className="row d-flex">
          <div className="mb-3 w-50">
            <label for="exampleFormControlInput1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 w-50">
            <label for="exampleFormControlInput1" className="form-label">
              Mobile No.
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 w-75">
            <label for="exampleFormControlInput1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 w-25">
            <label for="exampleFormControlInput1" className="form-label">
              Pin Code
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
      </form>
    </>
  );
}
