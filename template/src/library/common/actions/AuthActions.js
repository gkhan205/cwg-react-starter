import * as actionTypes from '../constants/StoreConstants';

export const setAuth = user => dispatch => {
  dispatch({ type: actionTypes.SET_AUTH, payload: user });
};

export const getAuth = () => dispatch => {
  dispatch({ type: actionTypes.GET_AUTH });
};
