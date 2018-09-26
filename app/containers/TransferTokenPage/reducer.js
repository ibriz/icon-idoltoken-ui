/*
 *
 * TransferTokenPage reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

const initialState = fromJS({
  requesting: false,
  response: '',
  error: '',
  success: false
});

function transferTokenPageReducer(state = initialState, action = {type: ''}) {
  switch (action.type) {
    case types.TOKEN_TRANSFER_REQUEST:
      return state.merge({
        requesting: true,
        response: {},
        error:'',
        success: false
      });
    case types.TOKEN_TRANSFER_SUCCESS:
      return state.merge({
        requesting: false,
        response: fromJS(action.response),
        error:'',
        success: true
      });
    case types.TOKEN_TRANSFER_FAILURE:
      return state.merge({
        requesting: false,
        response: {},
        error:'Token transfer failed',
        success: false
      });
    default:
      return state;
  }
}

export default transferTokenPageReducer;
