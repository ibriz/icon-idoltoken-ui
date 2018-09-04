/**
 *
 * MyWalletPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
// import makeSelectMyWalletPage from './selectors';
import {
  makeSelectIconRequesting, makeSelectError, makeSelectIconResponse, makeSelectSuccess
} from './selectors';
import messages from './messages';
import WalletInfo from './WalletInfo';
import { makeSelectCurrentAddress } from '../App/selectors';

import {
  getIconListRequest,
} from './actions';
import { Icon } from 'semantic-ui-react';
import { goTo } from '../App/actions';

/* eslint-disable react/prefer-stateless-function */
export class MyWalletPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accountInfo:{},
      currentAddress:""
    }
  }
  componentDidMount(){
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
      console.log('56');
      const {currentAddress} = this.state;
        this.props.getIconList(currentAddress);
      })
    }
  }

  render() {
    const {currentAddress} = this.state;
    const {
      isRequesting,
      successIconResponse,
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>MyWalletPage</title>
          <meta name="description" content="Description of MyWalletPage" />
        </Helmet>
        {isRequesting &&
          <Icon src={`../../assets/img/loader.svg`} />
        }
        {!isRequesting &&
          <WalletInfo 
            walletInfo={successIconResponse}
            currentAddress = {currentAddress}
            goTo = {this.goTo}  
          />
        }
      </div>
    );
  }

  goTo = (id) => {
    this.props.goTo(`/icon/detail/${id}`);
  }
}


MyWalletPage.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectIconRequesting(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successIconResponse: makeSelectIconResponse(),
  currentAddress: makeSelectCurrentAddress()
});

const mapDispatchToProps = (dispatch) => ({
  getIconList: (address) => dispatch(getIconListRequest(address)),
  goTo: (id) => dispatch(goTo(id)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'myWalletPage', reducer });
const withSaga = injectSaga({ key: 'myWalletPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MyWalletPage);
