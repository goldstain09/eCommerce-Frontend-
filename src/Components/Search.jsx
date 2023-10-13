import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { getAllProductsDataStart } from "../Redux/action";

export default function Search() {
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.allProductsData);
  const allProductsDataLoading = useSelector(
    (state) => state.allProductsDataLoading
  );
  const searchedProductName = useSelector((state) => state.searchedProductName);
  const searchedProductLoading = useSelector(
    (state) => state.searchedProductLoading
  );

  useEffect(() => {
    dispatch(getAllProductsDataStart());
  }, []);
  const [products, setProducts] = useState({});
  useEffect(() => {
    if (allProductsData.length > 0) {
      setProducts(allProductsData);
    }
  }, [allProductsData]);
  useEffect(() => {
    if (searchedProductName.length > 0) {
      // console.log(searchedProductName);
      const searchResult = allProductsData.filter((item) =>
        item.productTitle
          .toLowerCase()
          .includes(searchedProductName.toLowerCase())
      );
      const searchResultbyCategory = allProductsData.filter((item) =>
        item.productCategory
          .toLowerCase()
          .includes(searchedProductName.toLowerCase())
      );
      const result = [...searchResult, ...searchResultbyCategory];
      setProducts(result);
    }
  }, [searchedProductName.length]);

  if (searchedProductLoading || allProductsDataLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }
  return (
    <>
      <Header />
      <Link
        to={"/"}
        className="btn btn-outline-dark"
        style={{
          zIndex: "2",
          position: "absolute",
          top: "10rem",
          left: "1rem",
        }}
      >
        Back
      </Link>

      <div className="container" style={{ marginTop: "12rem" }}>
        <div className="row d-flex">
          <div className="col-12 col">
            <div className="row d-flex">
              {products.length > 0 ? (
                products.map((item, index) => <Card key={index} item={item} />)
              ) : (
                <>No Results Found...</>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
