import { combineReducers } from 'redux';

import AuthReducer from 'library/common/reducers/AuthReducer';

export default combineReducers({
  authReducer: AuthReducer,
});
