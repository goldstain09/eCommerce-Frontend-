import {
  ADD_ADDRESS_ERROR,
  ADD_ADDRESS_START,
  ADD_ADDRESS_SUCCESS,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_START,
  ADD_TO_CART_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  EDIT_USER_ERROR,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  FOLLOW_SELLER_ERROR,
  FOLLOW_SELLER_START,
  FOLLOW_SELLER_SUCCESS,
  GET_ALL_PRODUCTS_DATA_ERROR,
  GET_ALL_PRODUCTS_DATA_START,
  GET_ALL_PRODUCTS_DATA_SUCCESS,
  GET_ONE_PRODUCT_DATA_ERROR,
  GET_ONE_PRODUCT_DATA_START,
  GET_ONE_PRODUCT_DATA_SUCCESS,
  GET_SELLER_SHOP_DATA_ERROR,
  GET_SELLER_SHOP_DATA_START,
  GET_SELLER_SHOP_DATA_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_START,
  PLACE_ORDER_SUCCESS,
  REMOVE_FROM_CART_ERROR,
  REMOVE_FROM_CART_START,
  REMOVE_FROM_CART_SUCCESS,
  SEARCH_ERROR,
  SEARCH_START,
  SEARCH_SUCCESS,
  SET_PRODUCTS_FOR_CHECKOUT_ERROR,
  SET_PRODUCTS_FOR_CHECKOUT_START,
  SET_PRODUCTS_FOR_CHECKOUT_SUCCESS,
  SET_QUANTITY_ERROR,
  SET_QUANTITY_START,
  SET_QUANTITY_SUCCESS,
  UNFOLLOW_SELLER_ERROR,
  UNFOLLOW_SELLER_START,
  UNFOLLOW_SELLER_SUCCESS,
  USER_IS_LOGINNED_ERROR,
  USER_IS_LOGINNED_START,
  USER_IS_LOGINNED_SUCCESS,
  VERIFY_USER_ERROR,
  VERIFY_USER_START,
  VERIFY_USER_SUCCESS,
} from "./constants";

// create user
export const createUserStart = (userData) => ({
  type: CREATE_USER_START,
  payload: userData,
});
export const createUserSuccess = (res) => ({
  type: CREATE_USER_SUCCESS,
  payload: res,
});
export const createUserError = (error) => ({
  type: CREATE_USER_ERROR,
  payload: error,
});

//verifying user --(with jwt )
export const verifyUserStart = (data) => ({
  type: VERIFY_USER_START,
  payload: data,
});
export const verifyUserSuccess = (data) => ({
  type: VERIFY_USER_SUCCESS,
  payload: data,
});
export const verifyUserError = (error) => ({
  type: VERIFY_USER_ERROR,
  payload: error,
});

//Logining user
export const loginUserStart = (data) => ({
  type: LOGIN_USER_START,
  payload: data,
});
export const loginUserSuccess = (data) => ({
  type: LOGIN_USER_SUCCESS,
  payload: data,
});
export const loginUserError = (error) => ({
  type: LOGIN_USER_ERROR,
  payload: error,
});

//Logout user
export const logoutUserStart = () => ({
  type: LOGOUT_USER_START,
});
export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});
export const logoutUserError = (error) => ({
  type: LOGOUT_USER_ERROR,
  payload: error,
});

//for editing user details
export const editUserStart = (data) => ({
  type: EDIT_USER_START,
  payload: data,
});
export const editUserSuccess = (data) => ({
  type: EDIT_USER_SUCCESS,
  payload: data,
});
export const editUserError = (error) => ({
  type: EDIT_USER_ERROR,
  payload: error,
});

//for user is logined or not
export const userIsLogginnedStart = (data) => ({
  type: USER_IS_LOGINNED_START,
  payload: data,
});
export const userIsLogginnedSuccess = (data) => ({
  type: USER_IS_LOGINNED_SUCCESS,
  payload: data,
});
export const userIsLogginnedError = (error) => ({
  type: USER_IS_LOGINNED_ERROR,
  payload: error,
});

//for GETTING ALL PRODUCTS DATA
export const getAllProductsDataStart = () => ({
  type: GET_ALL_PRODUCTS_DATA_START,
});
export const getAllProductsDataSuccess = (data) => ({
  type: GET_ALL_PRODUCTS_DATA_SUCCESS,
  payload: data,
});
export const getAllProductsDataError = (error) => ({
  type: GET_ALL_PRODUCTS_DATA_ERROR,
  payload: error,
});

//for GETTING ONE PRODUCTS DATA
export const getOneProductDataStart = (data) => ({
  type: GET_ONE_PRODUCT_DATA_START,
  payload: data,
});
export const getOneProductDataSuccess = (data) => ({
  type: GET_ONE_PRODUCT_DATA_SUCCESS,
  payload: data,
});
export const getOneProductDataError = (error) => ({
  type: GET_ONE_PRODUCT_DATA_ERROR,
  payload: error,
});

//for SEARCH
export const searchStart = (data) => ({
  type: SEARCH_START,
  payload: data,
});
export const searchSuccess = (data) => ({
  type: SEARCH_SUCCESS,
  payload: data,
});
export const searchError = (error) => ({
  type: SEARCH_ERROR,
  payload: error,
});

//for add to cart
export const addToCartStart = (data) => ({
  type: ADD_TO_CART_START,
  payload: data,
});
export const addToCartSuccess = (data) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: data,
});
export const addToCartError = (error) => ({
  type: ADD_TO_CART_ERROR,
  payload: error,
});

//for REMOVE FROM cart
export const removeFromCartStart = (data) => ({
  type: REMOVE_FROM_CART_START,
  payload: data,
});
export const removeFromCartSuccess = (data) => ({
  type: REMOVE_FROM_CART_SUCCESS,
  payload: data,
});
export const removeFromCartError = (error) => ({
  type: REMOVE_FROM_CART_ERROR,
  payload: error,
});

//for SET NEW QUANTITY OF ANY PRODUCT
export const setQuantityStart = (data) => ({
  type: SET_QUANTITY_START,
  payload: data,
});
export const setQuantitySuccess = (data) => ({
  type: SET_QUANTITY_SUCCESS,
  payload: data,
});
export const setQuantityError = (error) => ({
  type: SET_QUANTITY_ERROR,
  payload: error,
});

//for SET product for checkout
export const setProductsForCheckoutStart = (data) => ({
  type: SET_PRODUCTS_FOR_CHECKOUT_START,
  payload: data,
});
export const setProductsForCheckoutSuccess = (data) => ({
  type: SET_PRODUCTS_FOR_CHECKOUT_SUCCESS,
  payload: data,
});
export const setProductsForCheckoutError = (error) => ({
  type: SET_PRODUCTS_FOR_CHECKOUT_ERROR,
  payload: error,
});

//for ADDING USER ADDRESS
export const addAddressStart = (data) => ({
  type: ADD_ADDRESS_START,
  payload: data,
});
export const addAddressSuccess = (data) => ({
  type: ADD_ADDRESS_SUCCESS,
  payload: data,
});
export const addAddressError = (error) => ({
  type: ADD_ADDRESS_ERROR,
  payload: error,
});

//for PLACING ORDER
export const placeOrderStart = (data) => ({
  type: PLACE_ORDER_START,
  payload: data,
});
export const placeOrderSuccess = (data) => ({
  type: PLACE_ORDER_SUCCESS,
  payload: data,
});
export const placeOrderError = (error) => ({
  type: PLACE_ORDER_ERROR,
  payload: error,
});

//for GETTING SELLER SHOP DATA
export const getSellerShopDataStart = (data) => ({
  type: GET_SELLER_SHOP_DATA_START,
  payload: data,
});
export const getSellerShopDataSuccess = (data) => ({
  type: GET_SELLER_SHOP_DATA_SUCCESS,
  payload: data,
});
export const getSellerShopDataError = (error) => ({
  type: GET_SELLER_SHOP_DATA_ERROR,
  payload: error,
});

//for FOLLOW A SELLER
export const followSellerStart = (data) => ({
  type: FOLLOW_SELLER_START,
  payload: data,
});
export const followSellerSuccess = (data) => ({
  type: FOLLOW_SELLER_SUCCESS,
  payload: data,
});
export const followSellerError = (error) => ({
  type: FOLLOW_SELLER_ERROR,
  payload: error,
});

//for unfollow a seller
export const unfollowSellerStart = (data) => ({
  type: UNFOLLOW_SELLER_START,
  payload: data,
});
export const unfollowSellerSuccess = (data) => ({
  type: UNFOLLOW_SELLER_SUCCESS,
  payload: data,
});
export const unfollowSellerError = (error) => ({
  type: UNFOLLOW_SELLER_ERROR,
  payload: error,
});
