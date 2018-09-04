/*
 *
 * CreateIconPage reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

const initialState = fromJS({
  createRequesting: false,
  createResponse: {},
  error: '',
  success: false
});

function createIconPageReducer(state = initialState, action = {type: ''}) {
  switch (action.type) {
    case types.CREATE_TOKEN_REQUEST:
      return state.merge({
        createRequesting: true,
        createResponse: {},
        error: '',
        success: false
      });
    case types.CREATE_TOKEN_SUCCESS:
      return state.merge({
        createRequesting: false,
        createResponse: fromJS(action.response),
        error: '',
        success: true
      });
    case types.CREATE_TOKEN_FAILURE:
      return state.merge({
        createRequesting: false,
        createResponse: {},
        error: 'Some error occured',
        success: false
      });
    default:
      return state;
  }
}

export default createIconPageReducer;
