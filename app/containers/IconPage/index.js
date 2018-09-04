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
import reducer from './reducer';
import saga from './saga';

import IconList from './IconList';
import { Label, Icon } from 'semantic-ui-react';

import {
  makeSelectIconResponse,
  makeSelectError,
  makeSelectIconRequesting,
  makeSelectSuccess
} from './selectors';

import {
  goTo,
  getIconListRequest,
} from './actions';

/* eslint-disable react/prefer-stateless-function */
export class IconPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getIconList();
  }

  render() {
    const { } = this.state;
    const {
      isRequesting,
      successIconResponse,
    } = this.props;
    return (
      <div className="ui container">
        <Helmet>
          <title>IconPage</title>
          <meta name="description" content="Description of IconPage" />
        </Helmet>

        {isRequesting &&
          <Icon src={`../../assets/img/loader.svg`} />
        }
        {!isRequesting &&
          <IconList resp={successIconResponse} goTo={this.goTo} />
        }
      </div>
    );
  }
  goTo = (id) => {
    this.props.goTo(id);
  }
}

IconPage.propTypes = {
  isIconRequesting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isIconRequesting: makeSelectIconRequesting(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successIconResponse: makeSelectIconResponse(),
});

const mapDispatchToProps = (dispatch) => ({
  getIconList: () => dispatch(getIconListRequest()),
  goTo: (id) => dispatch(goTo(id))
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
