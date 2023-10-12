import React, { useEffect, useState } from "react";
import HomeTop from "./HomeTop";
import "./SCSS/Home.scss";
import HomeMiddle1 from "./HomeMiddle1";
import HomeMiddle2 from "./HomeMiddle2";
import HomeMiddle3 from "./HomeMiddle3";
import HomeMiddle4 from "./HomeMiddle4";
import ProductsForYou from "./ProductsForYou";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsDataStart,
  userIsLogginnedStart,
  verifyUserStart,
} from "../Redux/action";
import Error from "./Error";

export default function Home() {
  const dispatch = useDispatch();
  const verifiedUser = useSelector((state) => state.verifiedUser);
  const errorMessage = useSelector((state) => state.errorMessage);
  useEffect(() => {
    if (
      errorMessage ===
      "Unable to fetch Product's Data! Please try again after sometime!"
    ) {
      setInterval(() => {
        window.location.reload();
      }, 5000);
    }
  }, [errorMessage]);
  //jw token
  const jwtoken = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (jwtoken) {
      dispatch(verifyUserStart(jwtoken.token));
    }
  }, []);
  useEffect(() => {
    if (verifiedUser.hasOwnProperty("authorise")) {
      if (verifiedUser.authorise) {
        dispatch(userIsLogginnedStart(true));
        toast.success("LoggedIn SuccessFully!", {
          theme: "dark",
          autoClose: 7000,
          position: "top-center",
          draggable: true,
          pauseOnHover: true,
        });
      }
    }
  }, [verifiedUser]);

  const allProductsData = useSelector((state) => state.allProductsData);
  // console.log(allProductsData);

  const [allProducts, setAllProducts] = useState({});
  useEffect(() => {
    dispatch(getAllProductsDataStart());
  }, []);
  useEffect(() => {
    if (allProductsData.length > 0) {
      setAllProducts(allProductsData);
    }
  }, [allProductsData]);
  return (
    <>
      <Header />
      <HomeTop />

      <h1 id="homeH1">
        <span>---------</span> Top Categories to choose from{" "}
        <span>---------</span>
      </h1>
      <HomeMiddle1 />
      <HomeMiddle2 />
      <HomeMiddle3 />
      <HomeMiddle4 />
      {errorMessage ===
      "Unable to fetch Product's Data! Please try again after sometime!" ? (
        <Error errorMessage={errorMessage} />
      ) : (
        <ProductsForYou allProducts={allProducts} />
      )}
      <ToastContainer />
      <Footer />
    </>
  );
}
