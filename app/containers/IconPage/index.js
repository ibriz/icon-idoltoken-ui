/**
 *
 * IconPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import makeSelectIconPage from './selectors';
import {
  makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectSuccess
} from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class IconPage extends React.Component {
  state = {};
  render() {
    const {} = this.state;
    const {} = this.props;
    return (
      <div>
        <Helmet>
          <title>IconPage</title>
          <meta name="description" content="Description of IconPage" />
        </Helmet>
        <h1>
          This is Icon Page
        </h1>
      </div>
    );
  }
}

IconPage.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
  successResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse(),
});

const mapDispatchToProps = (dispatch) => ({
  
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'iconPage', reducer });
const withSaga = injectSaga({ key: 'iconPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(IconPage);