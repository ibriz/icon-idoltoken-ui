/**
 *
 * TransferTokenPage
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
// import makeSelectTransferTokenPage from './selectors';
import {
  makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectSuccess
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import TransferTokenForm from './TransferTokenForm';
import { goTo } from '../App/actions';
import { makeSelectCurrentAddress, makeSelectAddresses } from '../App/selectors';
import { tokenTransferRequest } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class TransferTokenPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        fromAddress:this.props.currentAddress,
        tokenType:"",
        toAddress:"",
        tokenId:"",
      },
      tokenTypes: [
        {
          text: 'IDOL',
          value: 'IDOL',
          id: 1,
        }
      ]
    };
  }
  componentDidMount(){
    this.setState({
      formData:{
        ...this.state.formData,
        tokenId: this.props.match.params.tokenId ? this.props.match.params.tokenId : ''
      }
    })
  }
  
  componentWillReceiveProps(nextProps) {
    if(this.props.currentAddress != nextProps.currentAddress && nextProps.currentAddress != '') {
      this.setState({
        formData: {
          ...this.state.formData,
          fromAddress: nextProps.currentAddress
        }
      })
    }
  }

  render() {
    const { tokenTypes, formData } = this.state;
    const { isRequesting, currentAddress, addresses } = this.props;
    let addressObject = [],
        simpleAddrsess = addresses.toJS();
    for(let i in simpleAddrsess){
      addressObject.push({key:simpleAddrsess[i]+"_"+i, text:simpleAddrsess[i], value:simpleAddrsess[i]})
    }
     
    return (
      <div className="ui container text">
        <Helmet>
          <title>Transfer Idol Token</title>
          <meta name="description" content="Description of TransferTokenPage" fluid />
        </Helmet>
        <br />
        <br />
        <h1>Transfer Idol</h1>
        <TransferTokenForm 
          tokenTypes = { tokenTypes }
          formData={formData}
          onTransferTokenSubmit = { this.onTransferTokenSubmit }
          goTo = {this.goBack}
          isRequesting ={isRequesting}
          onTransferTokenChange = {this.onTransferTokenChange}
          currentAddress={currentAddress}
          addressObject= {addressObject}
        />
      </div>
    );
  }

  onTransferTokenChange = (event, data) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [data.name] : data.value
      }
    },()=>{
      console.log(this.state.formData);
      
    })
  }

  onTransferTokenSubmit = () => {
    const { formData } = this.state;
    this.props.tokenTransfer(formData);
  }

  goBack = () => {
    this.props.goTo('/wallet')
  }
}

TransferTokenPage.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
  successResponse: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse(),
  currentAddress: makeSelectCurrentAddress(),
  addresses: makeSelectAddresses()
});

const mapDispatchToProps = (dispatch) => ({
  goTo : (path) => dispatch(goTo(path)),
  tokenTransfer: (payload) => dispatch(tokenTransferRequest(payload)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'transferTokenPage', reducer });
const withSaga = injectSaga({ key: 'transferTokenPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(TransferTokenPage);
