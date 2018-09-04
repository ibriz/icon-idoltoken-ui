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
  makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectSuccess
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Form, Button, Input, Dropdown } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export class CreateIconPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
  
  render() {
    const {gender} = this.state;
    const {} = this.props;
    return (
      <div>
        <Helmet>
          <title>CreateIconPage</title>
          <meta name="description" content="Description of CreateIconPage" />
        </Helmet>
        <Form>

           <Form.Field>
            <label>Owner's Address:</label>
            <label>hx65f6e18d378b57612a28f72acb97021eaa82aa5a</label>
          </Form.Field>
          {/* <Form.Field>
            <label>SCORE Address (Current):</label>
            <label>cx0bce5bfe899c4beec7ea93f2000e16351191017e</label>
          </Form.Field> */}
          <Form.Field>
            <label>Token Symbol (Current):</label>
            <label>IDOL</label>
          </Form.Field>
          <Form.Field>
            <label>First Name:</label>
            <Input placeholder="First Name" type="text" name="name" fluid/>
          </Form.Field>
          <Form.Field>
            <label>Age:</label>
            <Input placeholder='Age' type="number" name="age" fluid/>
          </Form.Field>
          <Form.Field>
            <label>Gender:</label>
            <Dropdown options={gender} placeholder="Select Gender" name="gender" fluid/>
          </Form.Field>
          <Form.Field>
            <label>IPFS Handle:</label>
            <Input placeholder='IPFS Handle' type="text" name="ipfs_handle" fluid/>
          </Form.Field>
          <Button type='submit' onClick={this.onCreateTokenSubmit}>Create Idol Token</Button>
        </Form>
      </div>
    );
  }

  onCreateTokenSubmit = (event, data) => {
    console.log('onCreateTokenSubmit clicked!');
  }


}

CreateIconPage.propTypes = {
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

const withReducer = injectReducer({ key: 'createIconPage', reducer });
const withSaga = injectSaga({ key: 'createIconPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(CreateIconPage);
