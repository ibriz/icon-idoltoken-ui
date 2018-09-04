/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import Toaster from 'components/Toaster';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from '../LoginPage/Loadable';
import AdminDashboard from '../Dashboard/Admin';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GuestRoute from 'components/Routes/GuestRoute';
import UserRoute from 'components/Routes/UserRoute';
import IconPage from 'containers/IconPage/Loadable';
import IconDetailPage from 'containers/IconDetailPage/Loadable';
import UserDetailPage from 'containers/UserDetailPage/Loadable';
import CreateIconPage from 'containers/CreateIconPage/Loadable';
import MyWalletPage from 'containers/MyWalletPage/Loadable';
import TransferTokenPage from 'containers/TransferTokenPage/Loadable';

import {
  makeSelectDialog,
  makeSelectLocation,
  makeSelectError,
  makeSelectResponse,
} from './selectors';

import saga from './saga';

const App = props => {
  let message;
  const { location, dialog, errorResponse, successResponse } = props;
  if (successResponse) {
    message = <Toaster message={successResponse} success />;
  }
  if (errorResponse) {
    message = <Toaster message={errorResponse} error />;
  }
  return (
    <div>
      <Helmet
        titleTemplate="%s - IDOL TOKEN"
        defaultTitle="IDOL TOKEN"
      >
        <meta name="description" content="A ICON Token application" />
      </Helmet>
      <Header />
      {message}
      {dialog && dialog.size > 0 && dialog.toJS()}
      <Switch>
        <Route exact path="/" component={IconPage} />
        <Route path="/icon/detail/:id" component={IconDetailPage} />
        <Route path="/token/create" component={CreateIconPage} />
        <Route path="/wallet" component={MyWalletPage} />
        <Route path="/transfer/token" component={TransferTokenPage} />

        <GuestRoute
          exact
          location={location}
          path="/login"
          component={LoginPage}
        />
        <UserRoute
          location={location}
          path="/admin/dashboard"
          component={AdminDashboard}
        />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
  dialog: PropTypes.object,
  errorResponse: PropTypes.string.isRequired,
  successResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dialog: makeSelectDialog(),
  location: makeSelectLocation(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse(),
});

const withSaga = injectSaga({ key: 'global', saga });
const withConnect = connect(mapStateToProps);

export default compose(
  withSaga,
  withConnect,
)(App);
