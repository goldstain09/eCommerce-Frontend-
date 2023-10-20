import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import shop from "../Media/shop.jpg";
import { useParams } from "react-router-dom";
import "./SCSS/ShopPage.scss";
import {
  followSellerStart,
  getAllProductsDataStart,
  getSellerShopDataStart,
  unfollowSellerStart,
  userIsLogginnedStart,
  verifyUserStart,
} from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Loading from "./Loading";
import Error from "./Error";
import { BeatLoader } from "react-spinners";

export default function ShopPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const sellerId = params.sellerId;
  const [sellerShopData, setSellerShopData] = useState({});
  const [followers, setfollowers] = useState(0);
  const [UserIsNotFollowing, setUserIsNotFollowing] = useState(true);
  const userIsLoginned = useSelector((state) => state.userIsLoginned);
  const verifiedUser = useSelector((state) => state.verifiedUser);
  const followSellerLoading = useSelector((state) => state.followSellerLoading);
  const followSellerError = useSelector((state) => state.followSellerError);
  const unfollowSellerloading = useSelector(
    (state) => state.unfollowSellerloading
  );
  const unfollowSellerError = useSelector((state) => state.unfollowSellerError);
  const getSellerShopDataRes = useSelector(
    (state) => state.getSellerShopDataRes
  );
  const getSellerShopDataLoading = useSelector(
    (state) => state.getSellerShopDataLoading
  );
  const getSellerShopDataError = useSelector(
    (state) => state.getSellerShopDataError
  );
  //jw token --- user verification
  const jwtoken = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    dispatch(getAllProductsDataStart());
    if (jwtoken) {
      dispatch(verifyUserStart(jwtoken.token));
    }
    if (sellerId) {
      dispatch(
        getSellerShopDataStart({
          sellerId: sellerId,
        })
      );
    }
  }, []);
  useEffect(() => {
    if (verifiedUser.hasOwnProperty("authorise")) {
      if (verifiedUser.authorise) {
        dispatch(userIsLogginnedStart(true));
        if (
          verifiedUser.followingSellers.every(
            (item) => item.sellerId !== sellerId
          )
        ) {
          // if user didnot following this seller this section will execute--
          setUserIsNotFollowing(true);
        } else {
          setUserIsNotFollowing(false);
        }
      }
    }
  }, [verifiedUser]);
  useEffect(() => {
    if (getSellerShopDataRes.hasOwnProperty("ShopName")) {
      setSellerShopData(getSellerShopDataRes);
      setfollowers(getSellerShopDataRes.sellerFollowers.length);
    }
  }, [getSellerShopDataRes]);

  if (getSellerShopDataLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  } else if (getSellerShopDataError !== "") {
    return (
      <>
        <Error errorMessage={getSellerShopDataError} />
      </>
    );
  } else if (followSellerError !== "") {
    return (
      <>
        <Error errorMessage={followSellerError} />
      </>
    );
  } else if (unfollowSellerError !== "") {
    return (
      <>
        <Error errorMessage={unfollowSellerError} />
      </>
    );
  }
  return (
    <>
      <Header ShopPage={true} />
      <div className="container ShopPage">
        <div className="row d-flex border-bottom pb-5">
          <div className="col col-12 shopImagediv">
            <img src={shop} alt="Shop" className="w-100" />
          </div>
          <div className="col col-1 shopLogodiv">
            <img src={shop} alt="Shop" className="w-100" />
          </div>
          {sellerShopData.hasOwnProperty("ShopName") ? (
            <div className="col col-11 shopInfodiv">
              <div className="row d-flex">
                <div className="col col-6">
                  <h3 className="card-title">{sellerShopData.ShopName}</h3>
                </div>
                <div className="col col-6">
                  <h4 className="card-text">Owner: {sellerShopData.Owner}</h4>
                </div>
              </div>
              <div className="row d-flex">
                <div className="col col-3">
                  <h3 className="card-title">
                    Products: {sellerShopData.sellerProducts.length}
                  </h3>
                </div>
                <div className="col col-3">
                  <h3 className="card-title d-flex">
                    Followers:{" "}
                    {followSellerLoading || unfollowSellerloading ? (
                      <>
                        ---
                      </>
                    ) : (
                      followers
                    )}
                  </h3>
                </div>
                <div className="col col-6 followbtndiv">
                  {followSellerLoading || unfollowSellerloading ? (
                    <>
                      {" "}
                      <button className="loadbtn btn btn-primary">
                        <BeatLoader color="#5c0431" className="loader"/>
                      </button>
                    </>
                  ) : UserIsNotFollowing ? (
                    <button
                      className="btn-primary btn follow"
                      onClick={() => {
                        if (userIsLoginned) {
                          const jwtoken = JSON.parse(
                            localStorage.getItem("token")
                          );
                          dispatch(
                            followSellerStart({
                              userName: verifiedUser.userName,
                              userId: verifiedUser.id,
                              userToken: jwtoken.token,
                              sellerId: sellerId,
                            })
                          );
                          setUserIsNotFollowing(false);
                          setfollowers(followers + 1);
                        }
                      }}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      className="btn-outline-primary btn unfollow"
                      onClick={() => {
                        if (userIsLoginned) {
                          const jwtoken = JSON.parse(
                            localStorage.getItem("token")
                          );
                          dispatch(
                            unfollowSellerStart({
                              userId: verifiedUser.id,
                              userToken: jwtoken.token,
                              sellerId: sellerId,
                            })
                          );
                          setUserIsNotFollowing(true);
                          setfollowers(followers - 1);
                        }
                      }}
                    >
                      Unfollow
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="col col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
              <h3 className="card-title">Shop Name</h3>
            </div>
          )}
        </div>
        <div className="row d-flex shopproducts">
          <h3 className="card-title">Products:</h3>
          {sellerShopData.hasOwnProperty("sellerProducts") &&
          sellerShopData.sellerProducts.length > 0 ? (
            sellerShopData.sellerProducts.map((item, index) => (
              <Card item={item} key={index} />
            ))
          ) : (
            <>
              <h1>Seller has No Products in Their Shop...</h1>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
