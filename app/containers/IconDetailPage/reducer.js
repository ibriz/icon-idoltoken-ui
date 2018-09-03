/*
 *
 * IconDetailPage reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

const initialState = fromJS({
  iconDetailRequesting: false,
  iconDetailResponse: {},
  error: '',
  success: false
});

function iconDetailPageReducer(state = initialState, action) {
  switch (action.type) {
    case types.DEFAULT_ACTION:
      return state;
      case types.GET_ICON_DETAIL_REQUEST:
      return state.merge({
        iconDetailRequesting : true,
        iconDetailResponse:{},
        success: false
      });
    case types.GET_ICON_DETAIL_SUCCESS:
      return state.merge({
        iconDetailRequesting : false,
        iconDetailResponse: fromJS(action.response),
        success: true
      });
    case types.GET_ICON_DETAIL_FAILURE:
      return state.merge({
        iconDetailRequesting : false,
        iconDetailResponse: {},
        success: false
      });
    default:
      return state;
  }
}

export default iconDetailPageReducer;
