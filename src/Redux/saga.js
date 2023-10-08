import { put, takeLatest } from "redux-saga/effects";
import {
  ADD_ADDRESS_START,
  ADD_TO_CART_START,
  CREATE_USER_START,
  EDIT_USER_START,
  GET_ALL_PRODUCTS_DATA_START,
  GET_ONE_PRODUCT_DATA_START,
  LOGIN_USER_START,
  PLACE_ORDER_START,
  REMOVE_FROM_CART_START,
  SEARCH_START,
  SET_PRODUCTS_FOR_CHECKOUT_START,
  SET_QUANTITY_START,
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
  getAllProductsDataError,
  getAllProductsDataSuccess,
  getOneProductDataError,
  getOneProductDataSuccess,
  loginUserError,
  loginUserSuccess,
  removeFromCartError,
  removeFromCartSuccess,
  searchError,
  searchSuccess,
  setProductsForCheckoutError,
  setProductsForCheckoutSuccess,
  setQuantityError,
  setQuantitySuccess,
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
  getAllProductsData,
  getOneProductsData,
  loginUser,
  placeOrder,
  removeFromCart,
  setQuantityy,
  verifyUser,
} from "./service";

function* createUserSaga({ payload }) {
  try {
    const res = yield createUser(payload);
    // console.log(res)
    yield put(createUserSuccess(res.data));
  } catch (error) {
    yield put(createUserError(error.message));
  }
}

function* verifyUserSaga({ payload }) {
  try {
    const ress = yield verifyUser(payload);
    // console.log(ress)
    yield put(verifyUserSuccess(ress));
  } catch (error) {
    yield put(verifyUserError(error.message));
  }
}

function* loginUserSaga({ payload }) {
  try {
    const ress = yield loginUser(payload);
    // console.log(ress)
    yield put(loginUserSuccess(ress));
  } catch (error) {
    yield put(loginUserError(error.message));
  }
}

function* editUserSaga({ payload }) {
  try {
    const ress = yield editUser(payload);
    // console.log(ress);
    yield put(editUserSuccess(ress));
  } catch (error) {
    yield put(editUserError(error.message));
  }
}

function* userIsLoginnedSaga({ payload }) {
  try {
    yield put(userIsLogginnedSuccess(payload));
  } catch (error) {
    yield put(userIsLogginnedError(error.message));
  }
}

function* getAllProductsDataSaga() {
  try {
    const ress = yield getAllProductsData();
    if (ress.hasOwnProperty("DataFound")) {
      switch (ress.DataFound) {
        case true:
          yield put(getAllProductsDataSuccess(ress.data));
          break;
        case false:
          throw Error("Unable To Fetch Data, Please Retry");
      }
    } else {
      throw Error("Unable To Fetch Data, Please Retry");
    }
  } catch (error) {
    yield put(getAllProductsDataError(error.message));
  }
}
function* getOneProductsDataSaga({ payload }) {
  try {
    const ress = yield getOneProductsData(payload);
    if (ress.hasOwnProperty("DataFound")) {
      switch (ress.DataFound) {
        case true:
          yield put(getOneProductDataSuccess(ress.data));
          break;
        case false:
          throw Error("Unable To Fetch Data, Please Retry");
      }
    } else {
      throw Error("Unable To Fetch Data, Please Retry");
    }
  } catch (error) {
    yield put(getOneProductDataError(error.message));
  }
}

function* searchSaga({ payload }) {
  try {
    yield put(searchSuccess(payload));
  } catch (error) {
    yield put(searchError(error.message));
  }
}

function* addToCartSaga({ payload }) {
  try {
    const res = yield addToCart(payload);
    if (res.hasOwnProperty("added")) {
      switch (res.added) {
        case true:
          yield put(addToCartSuccess(res));
          break;
        case false:
          if (res.hasOwnProperty("alreadyInCart")) {
            throw Error("Product Is already in your Cart...");
          } else if (res.hasOwnProperty("someOtherError")) {
            throw Error(
              "Something went wrong while adding this product to your cart... Please try again..."
            );
          }
          break;
      }
    } else {
      throw Error(
        "Something went wrong while adding this product to your cart... Please try again..."
      );
    }
  } catch (error) {
    yield put(addToCartError(error.message));
  }
}

function* removeFromCArtSaga({ payload }) {
  try {
    const res = yield removeFromCart(payload);
    if (res.hasOwnProperty("removed")) {
      switch (res.removed) {
        case true:
          yield put(removeFromCartSuccess(res));
          break;
        case false:
          if (res.hasOwnProperty("someOtherError")) {
            throw Error(
              "Something went wrong while removing this product from your cart... Please try again..."
            );
          } else {
            throw Error(
              "Something went wrong while removing this product from your cart... Please try again..."
            );
          }
      }
    } else {
      throw Error(
        "Something went wrong while removing this product from your cart... Please try again..."
      );
    }
  } catch (error) {
    yield put(removeFromCartError(error.message));
  }
}

function* setQuantitySaga({ payload }) {
  try {
    const res = yield setQuantityy(payload);
    if (res.hasOwnProperty("quantityUpdated")) {
      switch (res.quantityUpdated) {
        case true:
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
    yield put(setQuantityError(error.message));
  }
}


function* setProductsForCheckoutSaga({payload}){
  try {
    yield put(setProductsForCheckoutSuccess(payload));
  } catch (error) {
    yield put(setProductsForCheckoutError(error.message));
  }
}


function* addAddressSaga({payload}){
  try {
    const res = yield addAddress(payload);
    if(res.hasOwnProperty('addressAdded')){
      switch (res.addressAdded) {
        case true:
          yield put(addAddressSuccess(res));
          break;
        case false:
          if(res.hasOwnProperty('someOtherError')){
            throw Error('Something went wrong while adding your address... Please try again!');
          }else{
            throw Error('Something went wrong while adding your address... Please try again!');
          }
        }
      }else{
        throw Error('Something went wrong while adding your address... Please try again!');
    }
  } catch (error) {
    yield put(addAddressError(error.message));
  }
};

function* placeOrderSaga({payload}){
  try {
    const res = yield placeOrder(payload);
    console.log(res);
  } catch (error) {
    
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
  yield takeLatest(ADD_ADDRESS_START,addAddressSaga);

  //placing order
  yield takeLatest(PLACE_ORDER_START,placeOrderSaga);
}

export default Saga;
