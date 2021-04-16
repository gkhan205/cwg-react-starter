import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRoute = withRouter(({ component: Component, isLoggedIn, ...rest }) => {
  const componentCheck = props => {
    if (isLoggedIn) {
      return <Component {...props} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      );
    }
  };

  return <Route {...rest} render={props => componentCheck(props)} />;
});

export default PrivateRoute;
