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
import { Image, Button, Icon } from 'semantic-ui-react';



/* eslint-disable react/prefer-stateless-function */
export class IconDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.match.params.id ? this.props.match.params.id : ''
    }, () => {
      this.props.getIconDetail()
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

        {successResponse && successResponse.toJS().BonusBucks && successResponse.toJS().BonusBucks.map((item, index) => {
          return this.renderCeleb(item)
        })}
        {successResponse && successResponse.toJS().CelebrityValues && successResponse.toJS().CelebrityValues.map((item, index) => {
          return this.renderCeleb(item)
        })}
      </div>
    );
  }

  renderCeleb = (item) => {
    const { id } = this.state;
    if (item.celebId == id) {
      return (


        <div className="ui container text" key={item.celebId}>
          <br />
          <br />
          <h1>
            Icon Name
        </h1>
          <Image src={`https://celebritybucks.com/images/celebs/full/${item.celebId}.jpg`} />

          <label>Age:</label>21<br />
          <label>Gender:</label>M<br />
          {/*               
          <label class="idolLabel">Ipfs Handle:</label>0xabcde12346<br />
          <label class="idolLabel">Token Owner:</label>hx65f6e18d378b57612a28f72acb97021eaa82aa5a<br /> */}

          <Button primary onClick={this.onBuyIcon}>
            BUY (${item.price} )
          </Button>
        </div>
      );
    }
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
  getIconDetail: () => dispatch(getIconDetailRequest())
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
