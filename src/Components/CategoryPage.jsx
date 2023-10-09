import React, { useEffect, useState } from "react";
import "./SCSS/CategoryPage.scss";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsDataStart } from "../Redux/action";

export default function CategoryPage() {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsDataStart());
  }, []);
  const allProductsData = useSelector((state) => state.allProductsData);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (allProductsData.length > 0) {
      switch (params.name) {
        case "Women's Store":
          const beauty = allProductsData.filter(
            (item) => item.productCategory === "Beauty"
          );
          const wclothing = allProductsData.filter(
            (item) => item.productCategory === "Women's Clothing"
          );
          const handbags = allProductsData.filter(
            (item) => item.productCategory === "Handbags"
          );
          const Jewelleries = allProductsData.filter(
            (item) => item.productCategory === "Jewelleries"
          );
          const womensStore = [
            ...wclothing,
            ...beauty,
            ...Jewelleries,
            ...handbags,
          ];
          setProducts(womensStore);
          break;

        case "Men's Store":
          const Belts = allProductsData.filter(
            (item) => item.productCategory === "Belts"
          );
          const mclothing = allProductsData.filter(
            (item) => item.productCategory === "Men's Clothing"
          );
          const Grooming = allProductsData.filter(
            (item) => item.productCategory === "Grooming"
          );
          const Watches = allProductsData.filter(
            (item) => item.productCategory === "Watches"
          );
          const mensStore = [...mclothing, ...Belts, ...Watches, ...Grooming];
          setProducts(mensStore);
          break;

        case "Kid's Store":
          const kacc = allProductsData.filter(
            (item) => item.productCategory === "Kid's Accessories"
          );
          const kclothing = allProductsData.filter(
            (item) => item.productCategory === "Kid's Clothing"
          );
          const ktoys = allProductsData.filter(
            (item) => item.productCategory === "Kid's Toys"
          );
          const kheal = allProductsData.filter(
            (item) => item.productCategory === "Kid's Healthcare"
          );
          const kidsStore = [...kacc, ...kclothing, ...ktoys, ...kheal];
          setProducts(kidsStore);
          break;
        case "essentials":
          const HomeDecor = allProductsData.filter(
            (item) => item.productCategory === "Home Decor"
          );
          const KitchenAppliances = allProductsData.filter(
            (item) => item.productCategory === "Kitchen Appliances"
          );
          const HealthCare = allProductsData.filter(
            (item) => item.productCategory === "Health Care"
          );
          const essentials = [
            ...HomeDecor,
            ...KitchenAppliances,
            ...HealthCare,
          ];
          setProducts(essentials);
          break;

        case "NewStyles":
          const Accessories = allProductsData.filter(
            (item) => item.productCategory === "Accessories"
          );
          const handbagss = allProductsData.filter(
            (item) => item.productCategory === "Handbags"
          );
          const Watchess = allProductsData.filter(
            (item) => item.productCategory === "Watches"
          );
          const Footwear = allProductsData.filter(
            (item) => item.productCategory === "Footwear"
          );
          const Electronics = allProductsData.filter(
            (item) => item.productCategory === "Electronics"
          );
          const NewStyles = [
            ...Accessories,
            ...Footwear,
            ...Electronics,
            ...handbagss,
            ...Watchess,
          ];
          setProducts(NewStyles);
          break;
        default:
          const defaulttProducts = allProductsData.filter(
            (item) => item.productCategory === params.name
          );
          setProducts(defaulttProducts);
          break;
      }
    }
  }, [params.name,allProductsData]);

  return (
    <>
      <Header />
      <div className="container CategoryPage">
        <div className="row d-flex">
          <div className="col col-12 ">
            <h3 className="h3">{params.name}</h3>
            <div className="container">
              <div className="row">
                {products.length > 0 ? (
                  products.map((item, index) => (
                    <Card key={index} item={item} />
                  ))
                ) : (
                  <>Unable to fetch data please retry...</>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
