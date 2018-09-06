/**
 *
 * IconDetailPage
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

import {
  makeSelectError,
  makeSelectSuccess,
  makeSelectDetailRequesting,
  makeSelectDetailResponse,
  makeSelectImageResponse
} from './selectors';


import {
  getIconDetailRequest,
} from './actions';
import { Image, Button, Table, Label } from 'semantic-ui-react';
import defaultIdol from 'assets/default.jpg';
import { goTo, fetchImageRequest } from '../App/actions';

/* eslint-disable react/prefer-stateless-function */
export class IconDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenId: ''
    };
  }

  componentDidMount() {
    this.setState({
      tokenId: this.props.match.params.id ? this.props.match.params.id : ''
    }, () => {
      const { tokenId } = this.state;
      this.props.getIconDetail(tokenId);
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.successResponse != this.props.successResponse && nextProps.successResponse.size > 0){
      let resp = nextProps.successResponse.toJS(),
          { ipfs_handle } = resp;
        this.props.fetchImage(ipfs_handle)
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
    const { successResponse } = this.props;
    return (
      <div className="ui container text">
        <Helmet>
          <title>IconDetailPage</title>
          <meta name="description" content="Description of IconDetailPage" />
        </Helmet>
        {successResponse && successResponse.size > 0 &&
          this.renderCeleb(successResponse.toJS())
        }
      </div>
    );
  }

  renderCeleb = (item) => {
    const { tokenId, images } = this.state;
    console.log('images',images);
    
      return (
        <div className="ui container text">
          <br />
          <br />
          <h1>
            {item.name}
          </h1>
          {images && Object.keys(images).includes(item.ipfs_handle) && images[item.ipfs_handle] != '' &&
            <img src={`data:image/jpg;base64,${images[item.ipfs_handle]}`} style={{width:'100%'}} />
          }
          {typeof(images) == 'undefined' &&
            <Image src={defaultIdol} style={{width:'100%'}}/>
          }

          <Table celled compact>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon><label className="idolLabel">Token Address:</label></Label>
                </Table.Cell>
                <Table.Cell>{item.address}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Label ribbon>Age:</Label></Table.Cell>
                <Table.Cell>{item.age}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> <Label ribbon>Gender:</Label></Table.Cell>
                <Table.Cell>{item.gender}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Label ribbon>Token Type:</Label> </Table.Cell>
                <Table.Cell>{item.tokenType}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Label ribbon>Price:</Label> </Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          {/*               
          <label class="idolLabel">Ipfs Handle:</label>0xabcde12346<br />
          <label class="idolLabel">Token Owner:</label>hx65f6e18d378b57612a28f72acb97021eaa82aa5a<br /> */}

          <Button primary onClick={()=> this.onBuyIcon(item.ipfs_handle)}>
            Transfer
          </Button>
        </div>
      );
  }

  onBuyIcon = (ipfs_handle) => {
    this.props.goTo(`/transfer/token/${ipfs_handle}`);
  }

}

IconDetailPage.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectDetailRequesting(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectDetailResponse(),
  imageResponse: makeSelectImageResponse()
});

const mapDispatchToProps = (dispatch) => ({
  getIconDetail: (tokenId) => dispatch(getIconDetailRequest(tokenId)),
  fetchImage: (ipfs) => dispatch(fetchImageRequest(ipfs)),
  goTo:(url) => dispatch(goTo(url)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'iconDetailPage', reducer });
const withSaga = injectSaga({ key: 'iconDetailPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(IconDetailPage);
