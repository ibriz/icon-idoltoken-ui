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


import { Icon, Grid } from 'semantic-ui-react';
import loader from 'assets/img/loader.svg';

import {
  makeSelectIconResponse,
  makeSelectError,
  makeSelectIconRequesting,
  makeSelectSuccess,
  makeSelectImageRequesting,
  makeSelectImageResponse
} from './selectors';
import { makeSelectCurrentAddress } from '../App/selectors';

import {
  getIconListRequest,
} from './actions';
import IconList from '../../components/IconList';
import { goTo, fetchImageRequest } from '../App/actions';
import MostPopular from './MostPopular';
import RecentlyAdded from './RecentlyAdded';

/* eslint-disable react/prefer-stateless-function */
export class IconPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAddress:"",
      images:{}
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
    if(nextProps.successIconResponse != this.props.successIconResponse && nextProps.successIconResponse.size > 0){
      let ipfsArr=[];
      let resp = nextProps.successIconResponse.toJS(),
          { tokenList } = resp;

      for ( let item in tokenList ){
        ipfsArr.push(tokenList[item].ipfs_handle);
      }
      for ( let item in ipfsArr ){
        this.props.fetchImage(ipfsArr[item])
      }
    }
    if(this.props.imageResponse !== nextProps.imageResponse && nextProps.imageResponse.size > 0) {
      const { ipfsHash, fileByte } = nextProps.imageResponse.toJS();
      this.setState({
        images:{
          ...this.state.images,
          [ipfsHash] : fileByte
        }
      })
    }
    
  }

  render() {
    const { images } = this.state;
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
            <IconList 
              resp={successIconResponse}
              goTo={this.goTo}
              images={images} 
            />
            <br />
            <br />
            <br />
            <Grid columns="2">
              <MostPopular
                images={images} 
              />
              <RecentlyAdded
                images={images} 
                />
            </Grid>
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
  currentAddress : makeSelectCurrentAddress(),
  imageRequesting :makeSelectImageRequesting(),
  imageResponse :makeSelectImageResponse()
});

const mapDispatchToProps = (dispatch) => ({
  getIconList: (address) => dispatch(getIconListRequest(address)),
  fetchImage: (ipfs) => dispatch(fetchImageRequest(ipfs)),
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
