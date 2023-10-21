import React from "react";
import "./SCSS/Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer border-top">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <h1>Non-Stop Shopping on Seesho (Demo Footer)</h1>
              <span>
                Trusted by more than 1 Crore Indians Cash on Delivery | Free
                Delivery
              </span>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 pt-4">
              <p>Careers</p>
              <p>Become a Supplier</p>
              <p>Hall of Fame</p>
              <p>Sitemap</p>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 pt-4">
              <p>Legal and Policies</p>
              <p>Seesho Tech Blog</p>
              <p>Notices and Return</p>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
              <h4>Reach out to us</h4>
              <i className="bi bi-instagram m-1"></i>
              <i className="bi bi-facebook m-1"></i>
              <i className="bi bi-youtube m-1"></i>
              <i className="bi bi-linkedin m-1"></i>
              <i className="bi bi-twitter m-1"></i>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
              <h4>Contact Us</h4>
              <span>
                Seesho Private Limited,Outer Ring Road, Karnataka, India E-mail
                address: query@seesho.com © 2015-2023 Seesho.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
