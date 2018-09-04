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
import { Form, Button, Input, Dropdown } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export class TransferTokenPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenTypes: [
        {
          text: 'IDOL',
          value: 'IDOL',
          id: 1,
        }
      ]
    };
  }
  state = {};
  render() {
    const { tokenTypes } = this.state;
    const { } = this.props;
    return (
      <div className="ui container text">
        <Helmet>
          <title>Transfer Idol Token</title>
          <meta name="description" content="Description of TransferTokenPage" fluid />
        </Helmet>
        <br />
        <br />
        <h1>Transfer Token</h1>
        <Form>
          <Form.Field>
            <label>Owner's Address:</label>
            <Input placeholder="Owner's Address" type="text" name="fromAddress" fluid />
          </Form.Field>
          <Form.Field>
            <label>Token Type:</label>
            <Dropdown search selection options={tokenTypes} placeholder="Token Type" name="tokenType" fluid />
          </Form.Field>
          <Form.Field>
            <label>To Address:</label>
            <Input placeholder="To Address" type="text" name="toAddress" fluid />
          </Form.Field>
          <Form.Field>
            <label>TokenId:</label>
            <Input placeholder="Token ID" type="text" name="tokenId" fluid />
          </Form.Field>

          <Button primary type='submit' onClick={this.onTransferTokenSubmit}>Transfer Idol Token</Button>
        </Form>
      </div>
    );
  }

  onTransferTokenSubmit = (event, data) => {
    console.log('onTransferTokenSubmit clicked!');
  }
}

TransferTokenPage.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
  successResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse(),
});

const mapDispatchToProps = (dispatch) => ({

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
