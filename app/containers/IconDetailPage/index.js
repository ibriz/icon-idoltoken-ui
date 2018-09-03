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
  constructor(props){
    super(props);
    this.state = {
      id:''
    };
  }

  componentDidMount(){
    this.setState({
      id : this.props.match.params.id ? this.props.match.params.id : '' 
    },()=>{
      this.props.getIconDetail()
    })
  }

render() {
    const {successResponse} = this.props;
    return (
      <div>
        <Helmet>
          <title>IconDetailPage</title>
          <meta name="description" content="Description of IconDetailPage" />
        </Helmet>
        <h1>
          This is Icon Detail Page
        </h1>
        {successResponse && successResponse.toJS().BonusBucks && successResponse.toJS().BonusBucks.map((item, index)=>{
          return this.renderCeleb(item) 
        })}
        {successResponse && successResponse.toJS().CelebrityValues && successResponse.toJS().CelebrityValues.map((item, index)=>{
          return this.renderCeleb(item) 
        })}
      </div>
    );
  }

  renderCeleb = (item) => {
    const {id} = this.state;
    if(item.celebId == id){
      return (
        <div key={item.celebId}>
          <Image src={`https://celebritybucks.com/images/celebs/full/${item.celebId}.jpg`} />

          <Button onClick={this.onBuyIcon}>
            BUY ( <Icon name='dollar' /> {item.price} )
          </Button>
        </div>
      );
    }
  }

  onBuyIcon = (e,d) => {
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
