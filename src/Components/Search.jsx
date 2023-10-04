import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useSelector } from "react-redux";

export default function Search() {
  const allProductsData = useSelector((state) => state.allProductsData);
  const searchedProductName = useSelector((state) => state.searchedProductName);
  const [products, setProducts] = useState({});
  useEffect(()=>{
    if(allProductsData.length > 0){
      setProducts(allProductsData);
    }
  },[allProductsData]);
  useEffect(()=>{
    if(searchedProductName.length > 0){
      console.log(searchedProductName);
      const searchResult = allProductsData.filter((item)=> item.productTitle.toLowerCase().includes(searchedProductName.toLowerCase()));
      const searchResultbyCategory = allProductsData.filter((item)=> item.productCategory.toLowerCase().includes(searchedProductName.toLowerCase()));
      const result = [...searchResult, ... searchResultbyCategory]
      setProducts(result);
    }
  },[searchedProductName.length]);
  return (
    <>
      <Header />
      <Link to={'/'} className="btn btn-outline-dark" style={{zIndex:'2',position:'absolute',top:'10rem',left:'1rem'}}>back to Home</Link>

      <div className="container" style={{marginTop:'12rem'}}>
        <div className="row d-flex">
          <div className="col-12 col">
            <div className="row d-flex">
              {
                products.length > 0 ? products.map((item,index)=>(
                  <Card key={index} item={item}/>
                )) : (<>
                Unable to fetch products data,,, please Retry
                </>)
              }
              {/* <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
