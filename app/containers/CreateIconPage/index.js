/**
 *
 * CreateIconPage
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
// import makeSelectCreateIconPage from './selectors';
import {
  makeSelectRequesting,
  makeSelectError,
  makeSelectResponse,
  makeSelectSuccess,
  makeSelectImageResponse,
  makeSelectImageRequesting
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { makeSelectCurrentAddress } from '../App/selectors';
import { goTo, postImageRequest } from './actions';
import CreateForm from './CreateForm';
import { createTokenRequest } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class CreateIconPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payload:{name: "", ipfs_handle: "", age: "", gender: "", tokenType: "IDOL"},
      image: {},
      errors:{},
      gender: [
        {
          text: 'Male',
          value: 'M',
          id: 1,
        },
        {
          text: 'Female',
          value: 'F',
          id: 2,
        },
        {
          text: 'Other',
          value: 'O',
          id: 3,
        }
      ]
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.successResponse != this.props.successResponse && nextProps.successResponse.size > 0 ) {
      this.setState({
        payload:{name: "", ipfs_handle: "", age: "", gender: ""}
      })
      this.goTo();
    }
    if(nextProps.imageResponse != this.props.imageResponse && nextProps.imageResponse.size > 0 ) {
      const { ipfsHash } = nextProps.imageResponse.toJS();
      this.setState({
        payload: {
          ...this.state.payload,
          ipfs_handle: ipfsHash
        }
      })
    }
  }

  goTo = () => {
    this.props.goTo('/wallet')
  }

  validate = () => {
    const { payload } = this.state;
    let errors = {};
    for (let load in payload) {
      if(payload[load].length < 1)
        errors[load] = 'Can\'t be empty';
    }
    return errors;
  }

  onCreateTokenSubmit = (event, data) => {
    const errors = this.validate();

    this.setState({errors},()=>{
      if( Object.keys(errors).length == 0){
        let payload = this.state.payload;
        const { currentAddress } = this.props;
        payload.address = currentAddress;
        this.props.createToken(payload);
      }  
    });
  }

  onFormChange = (event, data) => {
    if(data.name != "ipfs_handle"){
      this.setState({
        payload: { 
          ...this.state.payload,
          [data.name] : data.value
        }
      })
    }
  }

  onImageChange = (event) => {
    this.setState({
      image: event.target.files
    });
  }

  onImageSubmitButtonClicked = (event, data) => {
    const { image } = this.state;
    if(image.length == 1){
      this.props.postImage(image[0]);
    }
  }

  render() {
    const { gender, payload, image } = this.state;
    const { currentAddress, isRequesting } = this.props;
    
    return (
      <div className="ui container text">
        <Helmet>
          <title>Create Token</title>
          <meta name="description" content="Description of CreateIconPage" />
        </Helmet>

        <br />
        <br />
        <h1>Create Idol Token</h1>
        <CreateForm 
          payload ={payload}
          gender={gender} 
          image = {image}
          currentAddress={currentAddress} 
          goTo={this.goTo}
          onCreateTokenSubmit={this.onCreateTokenSubmit}
          onImageSubmitButtonClicked={this.onImageSubmitButtonClicked}
          onFormChange = {this.onFormChange}
          isRequesting = {isRequesting}
          onImageChange = {this.onImageChange}
        />
      </div>
    );
  }

}

CreateIconPage.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse(),
  currentAddress : makeSelectCurrentAddress(),
  imageResponse: makeSelectImageResponse(),
  imageRequesting: makeSelectImageRequesting(),
});

const mapDispatchToProps = (dispatch) => ({
  createToken : (payload) => dispatch(createTokenRequest(payload)),
  postImage: (image) => dispatch(postImageRequest(image)),
  goTo : (path) => dispatch(goTo(path)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'createIconPage', reducer });
const withSaga = injectSaga({ key: 'createIconPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(CreateIconPage);
