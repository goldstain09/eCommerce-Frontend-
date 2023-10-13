import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsDataStart } from "../Redux/action";
import Loading from "./Loading";

export default function SuggestiveProductsUnderProductPage({ product }) {
  const dispatch = useDispatch();
  const allProductsData = useSelector((state) => state.allProductsData);
  const allProductsDataLoading = useSelector(
    (state) => state.allProductsDataLoading
  );
  const [allSuggestiveProducts, setAllSuggestiveProducts] = useState([]);
  useEffect(() => {
    dispatch(getAllProductsDataStart());
  }, []);
  useEffect(() => {
    if (allProductsData.length > 0 && product.hasOwnProperty("productTitle")) {
      const SameCategoryProducts = allProductsData.filter(
        (item) => item.productCategory === product.productCategory
      );
      const SuggestiveProducts = SameCategoryProducts.filter(
        (item) => item._id.toString() !== product._id.toString()
      );
      setAllSuggestiveProducts(SuggestiveProducts);
    }
  }, [allProductsData, product]);

  if (allProductsDataLoading) {
    return (
      <>
        <div className="container">
          <h1
            className="h1 mb-5"
            style={{ fontFamily: " 'Inter', sans-serif" }}
          >
            People Also Viewed
          </h1>
        </div>
        <Loading />
      </>
    );
  }
  return (
    <>
      <div className="container mt-5">
        <h1 className="h1 mb-5" style={{ fontFamily: " 'Inter', sans-serif" }}>
          People Also Viewed
        </h1>
        <div className="row d-flex">
          {allSuggestiveProducts.length > 0 ? (
            allSuggestiveProducts.map((item, index) => (
              <Card key={index} item={item} onProductPage={true} />
            ))
          ) : (
            <>
              <h1>No Products Related to this product...</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}
