import * as actionTypes from '../constants/StoreConstants';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case actionTypes.GET_AUTH:
      return state;
    default:
      return state;
  }
};

export default AuthReducer;
