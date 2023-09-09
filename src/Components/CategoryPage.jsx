import React from "react";
import "./SCSS/CategoryPage.scss";
import Filter from "./Filter";
import Card from "./Card";

export default function CategoryPage() {
  return (
    <>
      <div className="container CategoryPage">
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <h3 className="h3">Category Name</h3>
            <Filter />
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-9 col-xl-9">
            <div className="container">
              <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
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
      </div>
    </>
  );
}
