import { delay, put, takeLatest } from "redux-saga/effects";
import {
  ADD_ADDRESS_START,
  ADD_TO_CART_START,
  CREATE_USER_START,
  EDIT_USER_START,
  FOLLOW_SELLER_START,
  GET_ALL_PRODUCTS_DATA_START,
  GET_ONE_PRODUCT_DATA_START,
  GET_SELLER_SHOP_DATA_START,
  LOGIN_USER_START,
  PLACE_ORDER_START,
  REMOVE_FROM_CART_START,
  SEARCH_START,
  SET_PRODUCTS_FOR_CHECKOUT_START,
  SET_QUANTITY_START,
  UNFOLLOW_SELLER_START,
  USER_IS_LOGINNED_START,
  VERIFY_USER_START,
} from "./constants";
import {
  addAddressError,
  addAddressSuccess,
  addToCartError,
  addToCartSuccess,
  createUserError,
  createUserSuccess,
  editUserError,
  editUserSuccess,
  followSellerError,
  followSellerSuccess,
  getAllProductsDataError,
  getAllProductsDataSuccess,
  getOneProductDataError,
  getOneProductDataSuccess,
  getSellerShopDataError,
  getSellerShopDataSuccess,
  loginUserError,
  loginUserSuccess,
  placeOrderError,
  placeOrderSuccess,
  removeFromCartError,
  removeFromCartSuccess,
  searchError,
  searchSuccess,
  setProductsForCheckoutError,
  setProductsForCheckoutSuccess,
  setQuantityError,
  setQuantitySuccess,
  unfollowSellerError,
  unfollowSellerSuccess,
  userIsLogginnedError,
  userIsLogginnedSuccess,
  verifyUserError,
  verifyUserSuccess,
} from "./action";
import {
  addAddress,
  addToCart,
  createUser,
  editUser,
  followSeller,
  getAllProductsData,
  getOneProductsData,
  getSellerShopData,
  loginUser,
  placeOrder,
  removeFromCart,
  setQuantityy,
  unfollowSeller,
  verifyUser,
} from "./service";

function* createUserSaga({ payload }) {
  try {
    const res = yield createUser(payload);
    // console.log(res)
    yield delay(2000);
    yield put(createUserSuccess(res.data));
  } catch (error) {
    yield delay(2000);
    yield put(createUserError(error.message));
  }
}

function* verifyUserSaga({ payload }) {
  try {
    const ress = yield verifyUser(payload);
    // console.log(ress)
    yield delay(1000);
    yield put(verifyUserSuccess(ress));
  } catch (error) {
    yield delay(1000);
    yield put(verifyUserError(error.message));
  }
}

function* loginUserSaga({ payload }) {
  try {
    const ress = yield loginUser(payload);
    // console.log(ress)
    yield delay(2000);
    yield put(loginUserSuccess(ress));
  } catch (error) {
    yield delay(2000);
    yield put(loginUserError(error.message));
  }
}

function* editUserSaga({ payload }) {
  try {
    const ress = yield editUser(payload);
    // console.log(ress);
    yield delay(2000);
    yield put(editUserSuccess(ress));
  } catch (error) {
    yield delay(2000);
    yield put(editUserError(error.message));
  }
}

function* userIsLoginnedSaga({ payload }) {
  try {
    yield delay(0);
    yield put(userIsLogginnedSuccess(payload));
  } catch (error) {
    yield delay(0);
    yield put(userIsLogginnedError(error.message));
  }
}

function* getAllProductsDataSaga() {
  try {
    // throw Error("Unable to fetch Product's Data! Please try again after sometime!");
    const ress = yield getAllProductsData();
    if (ress.hasOwnProperty("DataFound")) {
      switch (ress.DataFound) {
        case true:
          yield delay(1500);
          yield put(getAllProductsDataSuccess(ress.data));
          break;
        case false:
          throw Error(
            "Unable to fetch Product's Data! Please try again after sometime!"
          );
      }
    } else {
      throw Error(
        "Unable to fetch Product's Data! Please try again after sometime!"
      );
    }
  } catch (error) {
    yield delay(2000);
    yield put(getAllProductsDataError(error.message));
  }
}
function* getOneProductsDataSaga({ payload }) {
  try {
    const ress = yield getOneProductsData(payload);
    if (ress.hasOwnProperty("DataFound")) {
      switch (ress.DataFound) {
        case true:
          yield delay(1000);
          yield put(getOneProductDataSuccess(ress.data));
          break;
        case false:
          throw Error(
            "Unable to fetch Product Data! Please try again after sometime!"
          );
      }
    } else {
      throw Error(
        "Unable to fetch Product Data! Please try again after sometime!"
      );
    }
  } catch (error) {
    yield delay(2000);
    yield put(getOneProductDataError(error.message));
  }
}

function* searchSaga({ payload }) {
  try {
    yield delay(1000);
    yield put(searchSuccess(payload));
  } catch (error) {
    yield delay(2000);
    yield put(searchError(error.message));
  }
}

function* addToCartSaga({ payload }) {
  try {
    const res = yield addToCart(payload);
    if (res.hasOwnProperty("added")) {
      switch (res.added) {
        case true:
          yield delay(1000);
          yield put(addToCartSuccess(res));
          break;
        case false:
          if (res.hasOwnProperty("alreadyInCart")) {
            throw Error("Product Is already in your Cart...");
          } else if (res.hasOwnProperty("someOtherError")) {
            throw Error(
              "Something went wrong while adding this product to your cart! Please try again after sometime!"
            );
          }
          break;
      }
    } else {
      throw Error(
        "Something went wrong while adding this product to your cart! Please try again after sometime!"
      );
    }
  } catch (error) {
    yield delay(1000);
    yield put(addToCartError(error.message));
  }
}

function* removeFromCArtSaga({ payload }) {
  try {
    const res = yield removeFromCart(payload);
    if (res.hasOwnProperty("removed")) {
      switch (res.removed) {
        case true:
          yield delay(1000);
          yield put(removeFromCartSuccess(res));
          break;
        case false:
          if (res.hasOwnProperty("someOtherError")) {
            throw Error(
              "Something went wrong while removing this product from your cart! Please try again after sometime!"
            );
          } else {
            throw Error(
              "Something went wrong while removing this product from your cart! Please try again after sometime!"
            );
          }
      }
    } else {
      throw Error(
        "Something went wrong while removing this product from your cart! Please try again after sometime!"
      );
    }
  } catch (error) {
    yield delay(1000);
    yield put(removeFromCartError(error.message));
  }
}

function* setQuantitySaga({ payload }) {
  try {
    const res = yield setQuantityy(payload);
    if (res.hasOwnProperty("quantityUpdated")) {
      switch (res.quantityUpdated) {
        case true:
          yield delay(1000);
          yield put(setQuantitySuccess(res));
          break;
        case false:
          if (res.hasOwnProperty("someOtherError")) {
            throw Error(
              "Something went Wrong while editing the quantity of your product, please try again..."
            );
          } else {
            throw Error(
              "Something went Wrong while editing the quantity of your product, please try again..."
            );
          }
      }
    }
  } catch (error) {
    yield delay(1000);
    yield put(setQuantityError(error.message));
  }
}

function* setProductsForCheckoutSaga({ payload }) {
  try {
    yield delay(3000);
    yield put(setProductsForCheckoutSuccess(payload));
  } catch (error) {
    yield delay(3000);
    yield put(setProductsForCheckoutError(error.message));
  }
}

function* addAddressSaga({ payload }) {
  try {
    const res = yield addAddress(payload);
    if (res.hasOwnProperty("addressAdded")) {
      switch (res.addressAdded) {
        case true:
          yield delay(1000);
          yield put(addAddressSuccess(res));
          break;
        case false:
          if (res.hasOwnProperty("someOtherError")) {
            throw Error(
              "Something went wrong while adding your address! Please try again after sometime!"
            );
          } else {
            throw Error(
              "Something went wrong while adding your address! Please try again after sometime!"
            );
          }
      }
    } else {
      throw Error(
        "Something went wrong while adding your address! Please try again after sometime!"
      );
    }
  } catch (error) {
    yield delay(2000);
    yield put(addAddressError(error.message));
  }
}

function* placeOrderSaga({ payload }) {
  try {
    const res = yield placeOrder(payload);
    if (res.hasOwnProperty("orderPlaced")) {
      switch (res.orderPlaced) {
        case true:
          yield delay(3000);
          yield put(placeOrderSuccess(res));
          break;
        case false:
          if (res.hasOwnProperty("someOtherError")) {
            throw Error(
              "Something went wrong while placing your order! Please try again after sometime!"
            );
          } else {
            throw Error(
              "Something went wrong while placing your order! Please try again after sometime!"
            );
          }
      }
    } else {
      throw Error(
        "Something went wrong while placing your order! Please try again after sometime!"
      );
    }
  } catch (error) {
    yield delay(4000);
    yield put(placeOrderError(error.message));
  }
}

function* getSellerShopDataSaga({ payload }) {
  try {
    const res = yield getSellerShopData(payload);
    if (res.hasOwnProperty("sellerFound")) {
      switch (res.sellerFound) {
        case true:
          yield delay(1000);
          yield put(getSellerShopDataSuccess(res));
          break;
        case false:
          if (res.hasOwnProperty("someOtherError")) {
            throw Error(
              "Unable to fetch Seller's Shop Data! Please try again after sometime!"
            );
          } else {
            throw Error(
              "Unable to fetch Seller's Shop Data! Please try again after sometime!"
            );
          }
      }
    } else {
      throw Error(
        "Unable to fetch Seller's Shop Data! Please try again after sometime!"
      );
    }
  } catch (error) {
    yield delay(2000);
    yield put(getSellerShopDataError(error.message));
  }
}

function* followSellerSaga({ payload }) {
  try {
    const res = yield followSeller(payload);
    if (res.hasOwnProperty("followed")) {
      switch (res.followed) {
        case true:
          yield delay(1000);
          yield put(followSellerSuccess(res));
          break;
        case false:
          if (res.hasOwnProperty("someOtherError")) {
            throw Error(
              "Something went wrong while Following this Shop! Please try again after sometime!"
            );
          } else {
            throw Error(
              "Something went wrong while Following this Shop! Please try again after sometime!"
            );
          }
      }
    } else {
      throw Error(
        "Something went wrong while Following this Shop! Please try again after sometime!"
      );
    }
  } catch (error) {
    yield delay(1000);
    yield put(followSellerError(error.message));
  }
}

function* unfollowSellerSaga({ payload }) {
  try {
    const res = yield unfollowSeller(payload);
    if (res.hasOwnProperty("unfollowedSeller")) {
      switch (res.unfollowedSeller) {
        case true:
          yield delay(1000);
          yield put(unfollowSellerSuccess(res));
          break;

        case false:
          if (res.hasOwnProperty("someOtherError")) {
            throw Error(
              "Something went wrong while Unfollowing this Shop! Please try again after sometime!"
            );
          } else {
            throw Error(
              "Something went wrong while Unfollowing this Shop! Please try again after sometime!"
            );
          }
      }
    } else {
      throw Error(
        "Something went wrong while Unfollowing this Shop! Please try again after sometime!"
      );
    }
  } catch (error) {
    yield delay(1000);
    yield put(unfollowSellerError(error.message));
  }
}

function* Saga() {
  //users
  yield takeLatest(CREATE_USER_START, createUserSaga);
  yield takeLatest(VERIFY_USER_START, verifyUserSaga);
  yield takeLatest(LOGIN_USER_START, loginUserSaga);
  yield takeLatest(EDIT_USER_START, editUserSaga);
  yield takeLatest(USER_IS_LOGINNED_START, userIsLoginnedSaga);

  // products
  yield takeLatest(GET_ALL_PRODUCTS_DATA_START, getAllProductsDataSaga);
  yield takeLatest(GET_ONE_PRODUCT_DATA_START, getOneProductsDataSaga);

  //search
  yield takeLatest(SEARCH_START, searchSaga);

  //add to cart
  yield takeLatest(ADD_TO_CART_START, addToCartSaga);
  //remove from cart
  yield takeLatest(REMOVE_FROM_CART_START, removeFromCArtSaga);
  // set quantity
  yield takeLatest(SET_QUANTITY_START, setQuantitySaga);

  //set product for checkout
  yield takeLatest(SET_PRODUCTS_FOR_CHECKOUT_START, setProductsForCheckoutSaga);

  //add user address
  yield takeLatest(ADD_ADDRESS_START, addAddressSaga);

  //placing order
  yield takeLatest(PLACE_ORDER_START, placeOrderSaga);

  //getting seller shop data
  yield takeLatest(GET_SELLER_SHOP_DATA_START, getSellerShopDataSaga);

  // for follow and unfollow a seller
  yield takeLatest(FOLLOW_SELLER_START, followSellerSaga);
  yield takeLatest(UNFOLLOW_SELLER_START, unfollowSellerSaga);
}

export default Saga;
