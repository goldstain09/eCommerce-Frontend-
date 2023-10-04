import {
  CREATE_USER_ERROR,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  EDIT_USER_SUCCESS,
  GET_ALL_PRODUCTS_DATA_SUCCESS,
  GET_ONE_PRODUCT_DATA_SUCCESS,
  LOGIN_USER_SUCCESS,
  SEARCH_SUCCESS,
  USER_IS_LOGINNED_SUCCESS,
  VERIFY_USER_SUCCESS,
} from "./constants";

const initialStates = {
  //create user res--
  createUserRes: {},
  //verified user & check that user have jwt or not if not then it will show login or signup
  verifiedUser: {},
  //if user's login data is correct then in this all data of user is set but is not thenin this there is authories false sett
  userIsLogin: {},
  //edited success & token
  editSuccess:{},
  // for user is loggined or not
  userIsLogin:false,

  //all products data 
  allProductsData:[],
  //current product
  currentProduct:{},

  //searched products
  searchedProductName:''
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    // case CREATE_USER_START:
    //   return;

    case CREATE_USER_SUCCESS:
      if (action.payload.hasOwnProperty("keyValue")) {
      } else {
        localStorage.setItem("token", JSON.stringify(action.payload));
      }
      return {
        ...state,
        createUserRes: action.payload,
      };

    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        verifiedUser: action.payload,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userIsLogin: action.payload,
      };

    case EDIT_USER_SUCCESS:
      return {
        ...state,
        editSuccess:action.payload
      };

    case USER_IS_LOGINNED_SUCCESS:
      return {
        ...state,
        userIsLogin:action.payload
      }

    //products 
    case GET_ALL_PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        allProductsData:action.payload
      }
    case GET_ONE_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        currentProduct:action.payload
      }
    
    //search 
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchedProductName:action.payload
      }

    default:
      return state;
  }
};

export default reducer;

// eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbGwuY29tIiwiaWF0IjoxNjk0Njk4NzM5fQ.Z3sihXV1N3Y4pXb6NXDtMI6qzBShqA1ITXHEYEx-L2w99QO9rZX2Pc8GVHWKiO_TjPCpKeBiuDIztNc_kyr3nZML47PlYSAao8-NVCqCqePrkOmtqqTPFZpJMGnxnfdqorABj66KMWZOSgbq_VM6oGXWOUvxWgWWQwvbVW_MHUGrrGcyyAA54reku-R1QDPw4INKJDbUFMlFqAAQGX1mCoLjtkm65OEOySoYTcFlCWMPd6LMcTweFsbtdxJvyJ2MADrj1pwuPwL6XGXvNtZU22u81suNzKI3kIiIMziNXr1DsLitXWUpqGdWazyuF74Zx8Vy_miKeGoFvIbcgpqqRw
