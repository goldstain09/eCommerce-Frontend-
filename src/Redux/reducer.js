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

const initialStates = {
  //Loadings & errors
  loading: false,
  productsPageLoading: false,
  errorMessage: "",

  //create user res--
  createUserRes: {},
  //verified user & check that user have jwt or not if not then it will show login or signup
  verifiedUser: {},
  //if user's login data is correct then in this all data of user is set but is not thenin this there is authories false sett
  userIsLogin: {},
  //edited success & token
  editSuccess: {},
  // for user is loggined or not
  userIsLoginned: false,

  //all products data
  allProductsData: [],
  //current product
  currentProduct: {},

  //searched products
  searchedProductName: "",

  // quantity added successfully response
  quantityAdded: {},
  //item removed from cart response
  productRemovedRes: {},

  //checkout products
  forCheckoutProduct: [],

  //add address response
  addAddressRes: {},

  // order is placed reponse
  orderPlacedResponse: {},

  //getting seller data response
  getSellerShopDataRes: {},

  // followed response
  followSellerRes: {},
  // unfollowed response
  unfollowSellerRes: {},
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case CREATE_USER_START:
    case VERIFY_USER_START:
    case LOGIN_USER_START:
    case EDIT_USER_START:
    case GET_ALL_PRODUCTS_DATA_START:
    case SEARCH_START:
    case ADD_TO_CART_START:
    case REMOVE_FROM_CART_START:
    case SET_QUANTITY_START:
    case SET_PRODUCTS_FOR_CHECKOUT_START:
    case ADD_ADDRESS_START:
    case PLACE_ORDER_START:
    case GET_SELLER_SHOP_DATA_START:
    case FOLLOW_SELLER_START:
    case UNFOLLOW_SELLER_START:
      return {
        ...state,
        loading: true,
        errorMessage: "",
      };
    case GET_ONE_PRODUCT_DATA_START:
      return {
        ...state,
        productsPageLoading: true,
      };

    case CREATE_USER_SUCCESS:
      if (action.payload.hasOwnProperty("token")) {
        localStorage.setItem("token", JSON.stringify(action.payload));
      }
      return {
        ...state,
        createUserRes: action.payload,
        loading: false,
        errorMessage: "",
      };

    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        verifiedUser: action.payload,
        loading: false,
        errorMessage: "",
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userIsLogin: action.payload,
        loading: false,
        errorMessage: "",
      };

    case EDIT_USER_SUCCESS:
      return {
        ...state,
        editSuccess: action.payload,
        loading: false,
        errorMessage: "",
      };

    case USER_IS_LOGINNED_SUCCESS:
      return {
        ...state,
        userIsLoginned: action.payload,
        loading: false,
        errorMessage: "",
      };

    //products
    case GET_ALL_PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        allProductsData: action.payload,
        loading: false,
        errorMessage: "",
      };
    case GET_ONE_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        currentProduct: action.payload,
        productsPageLoading: false,
        errorMessage: "",
      };

    //search
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchedProductName: action.payload,
        loading: false,
        errorMessage: "",
      };

    //add to cart
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        verifiedUser: action.payload,
        loading: false,
        errorMessage: "",
      };

    // quantity added
    case SET_QUANTITY_SUCCESS:
      return {
        ...state,
        quantityAdded: action.payload,
        loading: false,
        errorMessage: "",
      };

    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        productRemovedRes: action.payload,
        loading: false,
        errorMessage: "",
      };

    case SET_PRODUCTS_FOR_CHECKOUT_SUCCESS:
      return {
        ...state,
        forCheckoutProduct: action.payload,
        loading: false,
        errorMessage: "",
      };

    case ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        addAddressRes: action.payload,
        loading: false,
        errorMessage: "",
      };

    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        orderPlacedResponse: action.payload,
        loading: false,
        errorMessage: "",
      };

    case GET_SELLER_SHOP_DATA_SUCCESS:
      return {
        ...state,
        getSellerShopDataRes: action.payload,
        loading: false,
        errorMessage: "",
      };

    case FOLLOW_SELLER_SUCCESS:
      return {
        ...state,
        followSellerRes: action.payload,
        loading: false,
        errorMessage: "",
      };

    case UNFOLLOW_SELLER_SUCCESS:
      return {
        ...state,
        unfollowSellerRes: action.payload,
        loading: false,
        errorMessage: "",
      };

    case CREATE_USER_ERROR:
    case VERIFY_USER_ERROR:
    case LOGIN_USER_ERROR:
    case EDIT_USER_ERROR:
    case USER_IS_LOGINNED_ERROR:
    case GET_ALL_PRODUCTS_DATA_ERROR:
    case GET_ONE_PRODUCT_DATA_ERROR:
    case SEARCH_ERROR:
    case ADD_TO_CART_ERROR:
    case REMOVE_FROM_CART_ERROR:
    case SET_QUANTITY_ERROR:
    case SET_PRODUCTS_FOR_CHECKOUT_ERROR:
    case ADD_ADDRESS_ERROR:
    case PLACE_ORDER_ERROR:
    case GET_SELLER_SHOP_DATA_ERROR:
    case FOLLOW_SELLER_ERROR:
    case UNFOLLOW_SELLER_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

// eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbGwuY29tIiwiaWF0IjoxNjk0Njk4NzM5fQ.Z3sihXV1N3Y4pXb6NXDtMI6qzBShqA1ITXHEYEx-L2w99QO9rZX2Pc8GVHWKiO_TjPCpKeBiuDIztNc_kyr3nZML47PlYSAao8-NVCqCqePrkOmtqqTPFZpJMGnxnfdqorABj66KMWZOSgbq_VM6oGXWOUvxWgWWQwvbVW_MHUGrrGcyyAA54reku-R1QDPw4INKJDbUFMlFqAAQGX1mCoLjtkm65OEOySoYTcFlCWMPd6LMcTweFsbtdxJvyJ2MADrj1pwuPwL6XGXvNtZU22u81suNzKI3kIiIMziNXr1DsLitXWUpqGdWazyuF74Zx8Vy_miKeGoFvIbcgpqqRw
