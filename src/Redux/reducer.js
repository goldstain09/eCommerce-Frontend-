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
  REMOVE_EDIT_DATA_ERROR,
  REMOVE_EDIT_DATA_START,
  REMOVE_EDIT_DATA_SUCCESS,
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
  USER_IS_LOGINNED_SUCCESS,
  VERIFY_USER_ERROR,
  VERIFY_USER_START,
  VERIFY_USER_SUCCESS,
} from "./constants";

const initialStates = {
  //create user res--
  createUserRes: {},
  createUserLoading: false,
  createUserError: "",

  //verified user & check that user have jwt or not if not then it will show login or signup
  verifiedUser: {},
  verifiedUserLoading: false,
  verifiedUserError: "",

  //if user's login data is correct then in this all data of user is set but is not thenin this there is authories false sett
  userIsLogin: {},
  userIsLoginLoading: false,
  userIsLoginError: "",

  //edited success & token
  editSuccess: {},
  editUserSuccessLoading: false,
  editUserError: "",

  // for user is loggined or not
  userIsLoginned: false,
  userIsLoginnedError: "",

  //all products data
  allProductsData: [],
  allProductsDataLoading: false,
  allProductsDataError: "",

  //current product
  currentProduct: {},
  productsPageLoading: false,
  productsPageError: "",

  //searched products
  searchedProductName: "",
  searchedProductLoading: false,
  searchedProductError: "",

  // quantity added successfully response
  quantityAddedLoading: false,
  quantityAddedError: "",

  //item removed from cart response
  productRemovedLoading: false,
  productRemovedError: "",
  addToCartLoading: false, // becoz in response of add to cart i updated verified user response so....
  addToCArtError: "",

  //checkout products
  forCheckoutProduct: [],
  forCheckoutProductLoading: false,
  forCheckoutProductError: "",

  //add address response
  addAddressRes: {},
  addAddressLoading: false,
  addAddressError: "",

  // order is placed reponse
  orderPlacedResponse: {},
  orderPlacedLoading: false,
  orderPlacedError: "",

  //getting seller data response
  getSellerShopDataRes: {},
  getSellerShopDataLoading: false,
  getSellerShopDataError: "",

  // followed response
  followSellerRes: {},
  followSellerLoading: false,
  followSellerError: "",
  // unfollowed response
  unfollowSellerRes: {},
  unfollowSellerloading: false,
  unfollowSellerError: "",
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        createUserLoading: true,
        createUserError: "",
      };
    case CREATE_USER_SUCCESS:
      if (action.payload.hasOwnProperty("token")) {
        localStorage.setItem(
          "token",
          JSON.stringify({ token: action.payload.token })
        );
        // console.log({ ...action.payload, accountCreated: true });
        return {
          ...state,
          createUserRes: { token: action.payload.token },
          verifiedUser: action.payload,
          createUserLoading: false,
          createUserError: "",
        };
      } else {
        return {
          ...state,
          createUserRes: action.payload,
          createUserLoading: false,
          createUserError: "",
        };
      }
    case CREATE_USER_ERROR:
      return {
        ...state,
        createUserLoading: false,
        createUserError: action.payload,
      };
    // --------------------------------------------------------

    case VERIFY_USER_START:
      return {
        ...state,
        verifiedUserLoading: true,
        verifiedUserError: "",
      };
    case VERIFY_USER_SUCCESS:
      // console.log({ ...action.payload, Logginned: true });
      return {
        ...state,
        verifiedUser:action.payload,
        verifiedUserLoading: false,
        verifiedUserError: "",
      };
    case VERIFY_USER_ERROR:
      return {
        ...state,
        verifiedUserLoading: false,
        verifiedUserError: action.payload,
      };
    // --------------------------------------------------------

    case LOGIN_USER_START:
      return {
        ...state,
        userIsLoginLoading: true,
        userIsLoginError: "",
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userIsLogin: action.payload,
        verifiedUser:action.payload,
        userIsLoginLoading: false,
        userIsLoginError: "",
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        userIsLoginLoading: false,
        userIsLoginError: action.payload,
      };
    // ---------------------------------------------------------

    case LOGOUT_USER_START:
      return {
        ...state,
        verifiedUserLoading: true,
        verifiedUserError: "",
      };
    case LOGOUT_USER_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        userIsLoginned: false,
        verifiedUser:{ logout: true },
        userIsLogin:{},
        verifiedUserLoading: false,
        verifiedUserError: "",
      };
    case LOGOUT_USER_ERROR:
      return {
        ...state,
        verifiedUserLoading: false,
        verifiedUserError: action.payload,
      };
    // ---------------------------------------------------------

    case EDIT_USER_START:
      return {
        ...state,
        editUserSuccessLoading: true,
        editUserError: "",
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        editSuccess: action.payload,
        verifiedUser:action.payload,
        editUserSuccessLoading: false,
        editUserError: "",
      };
    case EDIT_USER_ERROR:
      return {
        ...state,
        editUserSuccessLoading: false,
        editUserError: action.payload,
      };
    // ----------------------------------------------------------
    
    case USER_IS_LOGINNED_SUCCESS:
      return {
        ...state,
        userIsLoginned: action.payload,
        userIsLoginnedError: "",
      };
    case USER_IS_LOGINNED_ERROR:
      return {
        ...state,
        userIsLoginnedError: action.payload,
      };
    // --------------------------------------------------------

    //products
    case GET_ALL_PRODUCTS_DATA_START:
      return {
        ...state,
        allProductsDataLoading: true,
        allProductsDataError: "",
      };
    case GET_ALL_PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        allProductsData: action.payload,
        allProductsDataLoading: false,
        allProductsDataError: "",
      };
    case GET_ALL_PRODUCTS_DATA_ERROR:
      return {
        ...state,
        allProductsDataLoading: false,
        allProductsDataError: action.payload,
      };
    // ---------------------------------------------------------

    case GET_ONE_PRODUCT_DATA_START:
      return {
        ...state,
        productsPageLoading: true,
        productsPageError: "",
      };
    case GET_ONE_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        currentProduct: action.payload,
        productsPageLoading: false,
        productsPageError: "",
      };
    case GET_ONE_PRODUCT_DATA_ERROR:
      return {
        ...state,
        productsPageLoading: false,
        productsPageError: action.payload,
      };
    // ---------------------------------------------------------

    //search
    case SEARCH_START:
      return {
        ...state,
        searchedProductLoading: true,
        searchedProductError: "",
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchedProductName: action.payload,
        searchedProductLoading: false,
        searchedProductError: "",
      };
    case SEARCH_ERROR:
      return {
        ...state,
        searchedProductLoading: false,
        searchedProductError: action.payload,
      };
    // ---------------------------------------------------------

    //add to cart
    case ADD_TO_CART_START:
      return {
        ...state,
        addToCartLoading: true,
        addToCArtError: "",
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        verifiedUser: action.payload,
        addToCartLoading: false,
        addToCArtError: "",
      };
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        addToCartLoading: false,
        addToCArtError: action.payload,
      };
    // -----------------------------------------------------------

    // quantity added
    case SET_QUANTITY_START:
      return {
        ...state,
        quantityAddedLoading: true,
        quantityAddedError: "",
      };
    case SET_QUANTITY_SUCCESS:
      return {
        ...state,
        verifiedUser: action.payload,
        quantityAddedLoading: false,
        quantityAddedError: "",
      };
    case SET_QUANTITY_ERROR:
      return {
        ...state,
        quantityAddedLoading: false,
        quantityAddedError: action.payload,
      };
    // -----------------------------------------------------------

    case REMOVE_FROM_CART_START:
      return {
        ...state,
        productRemovedLoading: true,
        productRemovedError: "",
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        verifiedUser: action.payload,
        productRemovedLoading: false,
        productRemovedError: "",
      };
    case REMOVE_FROM_CART_ERROR:
      return {
        ...state,
        productRemovedLoading: false,
        productRemovedError: action.payload,
      };
    // -----------------------------------------------------------

    case SET_PRODUCTS_FOR_CHECKOUT_START:
      return {
        ...state,
        forCheckoutProductLoading: true,
        forCheckoutProductError: "",
      };
    case SET_PRODUCTS_FOR_CHECKOUT_SUCCESS:
      return {
        ...state,
        forCheckoutProduct: action.payload,
        forCheckoutProductLoading: false,
        forCheckoutProductError: "",
      };
    case SET_PRODUCTS_FOR_CHECKOUT_ERROR:
      return {
        ...state,
        forCheckoutProductLoading: false,
        forCheckoutProductError: action.payload,
      };
    // -----------------------------------------------------------

    case ADD_ADDRESS_START:
      return {
        ...state,
        addAddressLoading: true,
        addAddressError: "",
      };
    case ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        addAddressRes: action.payload,
        addAddressLoading: false,
        addAddressError: "",
      };
    case ADD_ADDRESS_ERROR:
      return {
        ...state,
        addAddressLoading: false,
        addAddressError: action.payload,
      };
    // ------------------------------------------------------------

    case PLACE_ORDER_START:
      return {
        ...state,
        orderPlacedLoading: true,
        orderPlacedError: "",
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        orderPlacedResponse: action.payload,
        orderPlacedLoading: false,
        orderPlacedError: "",
      };
    case PLACE_ORDER_ERROR:
      return {
        ...state,
        orderPlacedLoading: false,
        orderPlacedError: action.payload,
      };
    // -------------------------------------------------------------

    case GET_SELLER_SHOP_DATA_START:
      return {
        ...state,
        getSellerShopDataLoading: true,
        getSellerShopDataError: "",
      };
    case GET_SELLER_SHOP_DATA_SUCCESS:
      return {
        ...state,
        getSellerShopDataRes: action.payload,
        getSellerShopDataLoading: false,
        getSellerShopDataError: "",
      };
    case GET_SELLER_SHOP_DATA_ERROR:
      return {
        ...state,
        getSellerShopDataLoading: false,
        getSellerShopDataError: action.payload,
      };
    // --------------------------------------------------------------

    case FOLLOW_SELLER_START:
      return {
        ...state,
        followSellerLoading: true,
        followSellerError: "",
      };
    case FOLLOW_SELLER_SUCCESS:
      return {
        ...state,
        followSellerRes: action.payload,
        followSellerLoading: false,
        followSellerError: "",
      };
    case FOLLOW_SELLER_ERROR:
      return {
        ...state,
        followSellerLoading: false,
        followSellerError: action.payload,
      };
    // ------------------------------------------------------------------
    case UNFOLLOW_SELLER_START:
      return {
        ...state,
        unfollowSellerloading: true,
        unfollowSellerError: "",
      };
    case UNFOLLOW_SELLER_SUCCESS:
      return {
        ...state,
        unfollowSellerRes: action.payload,
        unfollowSellerloading: false,
        unfollowSellerError: "",
      };
    case UNFOLLOW_SELLER_ERROR:
      return {
        ...state,
        unfollowSellerloading: false,
        unfollowSellerError: action.payload,
      };
    // ------------------------------------------------------------------

    default:
      return state;
  }
};

export default reducer;

// eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbGwuY29tIiwiaWF0IjoxNjk0Njk4NzM5fQ.Z3sihXV1N3Y4pXb6NXDtMI6qzBShqA1ITXHEYEx-L2w99QO9rZX2Pc8GVHWKiO_TjPCpKeBiuDIztNc_kyr3nZML47PlYSAao8-NVCqCqePrkOmtqqTPFZpJMGnxnfdqorABj66KMWZOSgbq_VM6oGXWOUvxWgWWQwvbVW_MHUGrrGcyyAA54reku-R1QDPw4INKJDbUFMlFqAAQGX1mCoLjtkm65OEOySoYTcFlCWMPd6LMcTweFsbtdxJvyJ2MADrj1pwuPwL6XGXvNtZU22u81suNzKI3kIiIMziNXr1DsLitXWUpqGdWazyuF74Zx8Vy_miKeGoFvIbcgpqqRw
