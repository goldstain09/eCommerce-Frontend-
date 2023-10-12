import React from "react";
import "./SCSS/ProductsForYou.scss";
import Card from "./Card";
// Home Page Bottom but before Footer
export default function ProductsForYou({ allProducts }) {
  return (
    <>
      <div className="container ProductsForYou">
        <h3 className="h3">Products For You</h3>
        <div className="row gap-0 flex-wrap">
          {allProducts.length > 0 ? (
            allProducts.map((item, index) => <Card key={index} item={item} onProductPage={false} />)
          ) : (
            <> Unable To Fetch Data... Please Retry... </>
          )}
        </div>
      </div>
    </>
  );
}
