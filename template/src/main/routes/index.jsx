import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter, Switch, useLocation } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('modules/Home'));
const Dashboard = lazy(() => import('modules/Dashboard'));

const Routes = ({ isLoggedIn }) => {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/bookings' } };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          if (isLoggedIn && from) {
            return <Redirect to={from} />;
          } else {
            return <Home />;
          }
        }}
      />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

const mapStateToProps = ({ authReducer }) => {
  return {
    isLoggedIn: authReducer.isLoggedIn,
  };
};

export default withRouter(connect(mapStateToProps)(Routes));
