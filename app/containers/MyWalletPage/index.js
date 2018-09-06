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
  makeSelectIconRequesting, makeSelectError, makeSelectIconResponse, makeSelectSuccess, makeSelectImageResponse
} from './selectors';
import messages from './messages';
import WalletInfo from './WalletInfo';
import { makeSelectCurrentAddress, makeSelectAddresses } from '../App/selectors';

import {
  getIconListRequest,
} from './actions';
import { Icon } from 'semantic-ui-react';
import { goTo, fetchImageRequest } from '../App/actions';

/* eslint-disable react/prefer-stateless-function */
export class MyWalletPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accountInfo:{},
      images:{},
      currentAddress:""
    }
  }
  componentDidMount(){
    const { currentAddress } = this.props;
    if(currentAddress !== '') {
      this.setState({
        currentAddress: currentAddress
      },()=>{
        this.props.getIconList(currentAddress);
      })
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
    if(nextProps.successIconResponse != this.props.successIconResponse && nextProps.successIconResponse.size > 0){
      let ipfsArr={};
      let resp = nextProps.successIconResponse.toJS(),
          { tokenList } = resp;

      for ( let item in tokenList ){
        ipfsArr[tokenList[item].ipfs_handle] = '';
      }
      if(Object.keys(ipfsArr).length > 0){
        this.setState({
          images: ipfsArr
        },()=>{
          this.props.fetchImage(Object.keys(ipfsArr)[0]);
        })
      }
    }
    if(this.props.imageResponse !== nextProps.imageResponse && nextProps.imageResponse.size > 0) {
      const { ipfsHash, fileByte } = nextProps.imageResponse.toJS();
      this.setState({
        images:{
          ...this.state.images,
          [ipfsHash] : fileByte
        }
      },()=>{
        for (let hash in this.state.images){
          if(this.state.images[hash] == ''){
            this.props.fetchImage(hash);
            return;
          }
        }
      })
    }
  }

  render() {
    const { currentAddress, images } = this.state;
    const {
      addresses,
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
            addresses = {addresses}
            onCreateButtonsClick = {this.onCreateButtonsClick}  
            images={images} 
            />
        }
      </div>
    );
  }

  goTo = (id) => {
    this.props.goTo(`/icon/detail/${id}`);
  }

  onCreateButtonsClick = (link) => {
    this.props.goTo(link);
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
  currentAddress: makeSelectCurrentAddress(),
  addresses : makeSelectAddresses(),
  imageResponse :makeSelectImageResponse()
});

const mapDispatchToProps = (dispatch) => ({
  getIconList: (address) => dispatch(getIconListRequest(address)),
  fetchImage: (ipfs) => dispatch(fetchImageRequest(ipfs)),
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
