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


import { Label, Icon } from 'semantic-ui-react';
import loader from 'assets/img/loader.svg';

import {
  makeSelectIconResponse,
  makeSelectError,
  makeSelectIconRequesting,
  makeSelectSuccess
} from './selectors';
import { makeSelectCurrentAddress } from '../App/selectors';

import {
  getIconListRequest,
} from './actions';
import IconList from '../../components/IconList';
import { goTo } from '../App/actions';

/* eslint-disable react/prefer-stateless-function */
export class IconPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAddress:""
    };
  }

  componentDidMount() {
    const { currentAddress } = this.props;
    if(currentAddress !== '') {
      this.props.getIconList(currentAddress);
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.currentAddress !== nextProps.currentAddress) {
      this.setState({
        currentAddress: nextProps.currentAddress
      },()=>{
        const {currentAddress} = this.state;
        this.props.getIconList(currentAddress);
      })
    }
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
          <Icon src={loader} />
        }
        {!isRequesting &&
          <div style={{ textAlign: 'center' }}>
          <br />
          <br />
          <br />
          <h1>
            Featured Idols
            </h1>
          <span className="caption">who is ordering services listed in contract</span>
          <br />
          <br />
            <IconList resp={successIconResponse} goTo={this.goTo} />
          </div>

        }
      </div>
    );
  }
  goTo = (id) => {
    this.props.goTo(`/icon/detail/${id}`);
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
  currentAddress : makeSelectCurrentAddress()
});

const mapDispatchToProps = (dispatch) => ({
  getIconList: (address) => dispatch(getIconListRequest(address)),
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
