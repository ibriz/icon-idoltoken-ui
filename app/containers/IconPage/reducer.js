/*
 *
 * IconPage reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

const initialState = fromJS({
  iconRequesting: false,
  iconResponse: {},
  error: '',
  success: false
});

function iconPageReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ICON_LIST_REQUEST:
      return state.merge({
        iconRequesting : true,
        iconResponse:{},
        success: false
      });
    case types.GET_ICON_LIST_SUCCESS:
      return state.merge({
        iconRequesting : false,
        iconResponse: fromJS(action.response),
        success: true
      });
    case types.GET_ICON_LIST_FAILURE:
      return state.merge({
        iconRequesting : false,
        iconResponse: {},
        success: false
      });
    default:
      return state;
  }
}

export default iconPageReducer;
