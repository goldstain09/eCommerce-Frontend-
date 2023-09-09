import React from "react";
import Filter from "./Filter";
import "./SCSS/ProductsForYou.scss";
import Card from "./Card";
import img from '../Media/logo.png'

// Home Page Bottom but before Footer

export default function ProductsForYou() {
  return (
    <>
      <div className="container ProductsForYou">
        <div className="row gap-0 flex-wrap">
          <div className=" col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 flex-column">
          <h3 className="h3">Products For You</h3>
            <Filter />
          </div>
          <div className="col col-12 col-sm-12 col-lg-9 col-md-6 col-xl-9  ">
            <div className="container">
              <div className="row gap-0 d-flex">
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
