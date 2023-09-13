import {
  CREATE_USER_ERROR,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  VERIFY_USER_SUCCESS,
} from "./constants";

const initialStates = {
  //create user res--
  createUserRes: {},
  //verified user
  verifiedUser: {
    authorise:false
  },
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
       verifiedUser:action.payload
      };

    case CREATE_USER_ERROR:
      return {};

    default:
      return state;
  }
};

export default reducer;
