import React from "react";
import "./SCSS/ProductsForYou.scss";
import Card from "./Card";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";
// Home Page Bottom but before Footer
export default function ProductsForYou({ allProducts }) {
  const allProductsDataLoading = useSelector(
    (state) => state.allProductsDataLoading
  );
  const allProductsDataError = useSelector(
    (state) => state.allProductsDataError
  );

  if (allProductsDataLoading) {
    return (
      <>
        <div className="container">
          <h3 className="h3">Products For You</h3>
        </div>
        <Loading />
      </>
    );
  } else if (allProductsDataError !== "") {
    return (
      <>
        <Error errorMessage={allProductsDataError} />
      </>
    );
  }
  return (
    <>
      <div className="container ProductsForYou">
        <h3 className="h3">Products For You</h3>
        <div className="row gap-0 flex-wrap">
          {allProducts.length > 0 ? (
            allProducts.map((item, index) => (
              <Card key={index} item={item} onProductPage={false} />
            ))
          ) : (
            <>
              {" "}
              <Error errorMessage={allProductsDataError} />{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
}
