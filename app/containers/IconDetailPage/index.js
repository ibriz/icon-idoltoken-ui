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
  makeSelectDetailResponse
} from './selectors';


import {
  getIconDetailRequest,
} from './actions';
import { Image, Button, Table, Label } from 'semantic-ui-react';
import defaultIdol from 'assets/default.jpg';

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
    const { tokenId } = this.state;
      return (
        <div className="ui container text">
          <br />
          <br />
          <h1>
            {item.name}
          </h1>
          <Image src={defaultIdol} />

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
                <Table.Cell><Label ribbon>IFPS Handle:</Label> </Table.Cell>
                <Table.Cell>{item.ipfs_handle}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          {/*               
          <label class="idolLabel">Ipfs Handle:</label>0xabcde12346<br />
          <label class="idolLabel">Token Owner:</label>hx65f6e18d378b57612a28f72acb97021eaa82aa5a<br /> */}

          <Button primary onClick={this.onBuyIcon}>
            Transfer
          </Button>
        </div>
      );
  }

  onBuyIcon = (e, d) => {
    console.log('clicked');

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
});

const mapDispatchToProps = (dispatch) => ({
  getIconDetail: (tokenId) => dispatch(getIconDetailRequest(tokenId))
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
