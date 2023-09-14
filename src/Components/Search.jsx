import React from "react";
import Header from "./Header";
import Card from "./Card";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import Footer from "./Footer";

export default function Search() {
  return (
    <>
      <Header />
      <Link to={'/'} className="btn btn-outline-dark" style={{zIndex:'2',position:'absolute',top:'10rem',left:'1rem'}}>back to Home</Link>


      <div className="container" style={{marginTop:'12rem'}}>
        <div className="row d-flex">
          <div className="col-12 col col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <Filter />
          </div>
          <div className="col-12 col col-sm-12 col-md-6 col-lg-9 col-xl-9">
            <div className="row d-flex">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
