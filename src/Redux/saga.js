import { put, takeLatest } from "redux-saga/effects";
import {
  CREATE_USER_START,
  EDIT_USER_START,
  GET_ALL_PRODUCTS_DATA_START,
  GET_ONE_PRODUCT_DATA_START,
  LOGIN_USER_START,
  SEARCH_START,
  USER_IS_LOGINNED_START,
  VERIFY_USER_START,
} from "./constants";
import {
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
  searchError,
  searchSuccess,
  userIsLogginnedError,
  userIsLogginnedSuccess,
  verifyUserError,
  verifyUserSuccess,
} from "./action";
import {
  createUser,
  editUser,
  getAllProductsData,
  getOneProductsData,
  loginUser,
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
    }
  } catch (error) {
    yield put(getAllProductsDataError(error.message));
  }
}
function* getOneProductsDataSaga({payload}) {
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
    }
  } catch (error) {
    yield put(getOneProductDataError(error.message));
  }
}

function* searchSaga({payload}){
  try {
    yield put(searchSuccess(payload));
  } catch (error) {
    yield put(searchError(error.message));
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
  yield takeLatest(SEARCH_START,searchSaga);
}

export default Saga;
