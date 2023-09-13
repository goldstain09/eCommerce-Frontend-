import {
  CREATE_USER_ERROR,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  VERIFY_USER_SUCCESS,
} from "./constants";

const initialStates = {
  //create user res--
  createUserRes: {},
  //verified user & check that user have jwt or not if not then it will show login or signup
  verifiedUser: {
    authorise: false,
  },
  //if user's login data is correct then in this all data of user is set but is not thenin this there is authories false sett
  userIsLogin: {},
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

    case CREATE_USER_ERROR:
      return {};

    default:
      return state;
  }
};

export default reducer;
