import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { getAllProductsDataStart } from "../Redux/action";
import Error from "./Error";

export default function Search() {
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.allProductsData);
  const allProductsDataError = useSelector(
    (state) => state.allProductsDataError
  );
  const allProductsDataLoading = useSelector(
    (state) => state.allProductsDataLoading
  );
  const searchedProductName = useSelector((state) => state.searchedProductName);
  const searchedProductError = useSelector(
    (state) => state.searchedProductError
  );
  const searchedProductLoading = useSelector(
    (state) => state.searchedProductLoading
  );

  useEffect(() => {
    dispatch(getAllProductsDataStart());
  }, []);
  const [products, setProducts] = useState({});
  useEffect(() => {
    if (allProductsData.length > 0) {
      const shuffledArray = [...allProductsData].sort(
        () => Math.random() - 0.5
      );
      setProducts(shuffledArray);
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
      const shuffledArray = [...result].sort(() => Math.random() - 0.5);
      setProducts(shuffledArray);
    }
  }, [searchedProductName.length]);

  if (searchedProductLoading || allProductsDataLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  } else if (searchedProductError !== "") {
    return (
      <>
        <Error errorMessage={searchedProductError} />
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
      <Header />
      <Link
        to={"/"}
        className="btn btn-outline-dark"
        style={{
          zIndex: "2",
          position: "absolute",
          top: "10rem",
          left: "1rem",
          border: "none",
          fontSize: "1.4rem",
        }}
      >
        <i class="bi bi-box-arrow-left"></i>
      </Link>

      <div className="container" style={{ marginTop: "12rem" }}>
        <div className="row d-flex">
          <div className="col-12 col">
            <div className="row d-flex">
              {products.length > 0 ? (
                products.map((item, index) => <Card key={index} item={item} />)
              ) : (
                <>
                  <h1
                    className="h1 text-center mt-5 bi bi-emoji-frown"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      color: "#5c0431",
                    }}
                  >
                    &nbsp;No Results Found!
                  </h1>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
