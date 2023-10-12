import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import shop from "../Media/shop.jpg";
import { useParams } from "react-router-dom";
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

export default function ShopPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const sellerId = params.sellerId;
  const [sellerShopData, setSellerShopData] = useState({});
  const [UserIsNotFollowing, setUserIsNotFollowing] = useState(true);
  const userIsLoginned = useSelector((state) => state.userIsLoginned);
  const verifiedUser = useSelector((state) => state.verifiedUser);
  const getSellerShopDataRes = useSelector(
    (state) => state.getSellerShopDataRes
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
    }
  }, [getSellerShopDataRes]);

  return (
    <>
      <Header />
      <div className="container mt-5 pt-5">
        <div className="row d-flex mt-5 pt-5">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <img src={shop} alt="" className="w-100" />
          </div>
          <div className="col col-1"></div>
          {sellerShopData.hasOwnProperty("ShopName") ? (
            <div className="col col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
              <div className="row d-flex">
                <div className="col col-6">
                  <h3 className="card-title">{sellerShopData.ShopName}</h3>
                </div>
                <div className="col col-6">
                  <h4 className="card-text">Owner: {sellerShopData.Owner}</h4>
                </div>
              </div>
              <div className="row d-flex">
                <div className="col col-6">
                  <h3 className="card-title">
                    Followers: {sellerShopData.sellerFollowers.length}
                  </h3>
                </div>
                <div className="col col-6">
                  {UserIsNotFollowing ? (
                    <button
                      className="btn-primary btn"
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
                        }
                      }}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      className="btn-outline-primary btn"
                      onClick={() => {
                        if (userIsLoginned) {
                          const jwtoken = JSON.parse(
                            localStorage.getItem("token")
                          );
                          dispatch(unfollowSellerStart({
                              userId: verifiedUser.id,
                              userToken: jwtoken.token,
                              sellerId: sellerId,
                          }));
                          setUserIsNotFollowing(true);
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
        <div className="row d-flex mt-5">
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
