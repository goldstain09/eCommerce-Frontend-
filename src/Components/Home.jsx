import React, { useEffect, useState } from "react";
import HomeTop from "./HomeTop";
import "./SCSS/Home.scss";
import HomeMiddle1 from "./HomeMiddle1";
import HomeMiddle2 from "./HomeMiddle2";
import HomeMiddle3 from "./HomeMiddle3";
import HomeMiddle4 from "./HomeMiddle4";
import ProductsForYou from "./ProductsForYou";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAllProductsDataStart,
  userIsLogginnedStart,
  verifyUserStart,
} from "../Redux/action";
import Loading from "./Loading";
import Error from "./Error";

export default function Home() {
  const dispatch = useDispatch();
  const verifiedUser = useSelector((state) => state.verifiedUser);
  const allProductsData = useSelector((state) => state.allProductsData);
  const allProductsDataError = useSelector(
    (state) => state.allProductsDataError
  );
  const allProductsDataLoading = useSelector(
    (state) => state.allProductsDataLoading
  );
  const [allProducts, setAllProducts] = useState({});

  //jw token
  const jwtoken = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    dispatch(getAllProductsDataStart());
    if (jwtoken) {
      dispatch(verifyUserStart(jwtoken.token));
    }
  }, []);
  useEffect(() => {
    if (verifiedUser.hasOwnProperty("authorise")) {
      if (verifiedUser.authorise) {
        dispatch(userIsLogginnedStart(true));
        if (verifiedUser.hasOwnProperty("accountCreated")) {
          toast.success("Your Accound is ready!", { theme: "dark" });
        }
        if (verifiedUser.hasOwnProperty("LoggedIn")) {
          toast.success("LoggedIn SuccessFully!", { theme: "dark" });
        }
      }
    }
  }, [verifiedUser]);
  useEffect(() => {
    if (allProductsData.length > 0) {
      const shuffledArray = [...allProductsData].sort(() => Math.random() - 0.5);
      setAllProducts(shuffledArray);
    }
  }, [allProductsData]);

  if (allProductsDataLoading) {
    return (
      <>
        <Header />
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
      <Header />
      <HomeTop />
      <HomeMiddle1 />
      <HomeMiddle2 />
      <HomeMiddle3 />
      <HomeMiddle4 />
      <ProductsForYou allProducts={allProducts} />
      <Footer />
      <ToastContainer />
    </>
  );
}

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// toast.success("LoggedIn SuccessFully!", {
//   theme: "dark",
//   autoClose: 7000,
//   position: "top-center",
//   draggable: true,
//   pauseOnHover: true,
// });
