/*
 *
 * IconDetailPage reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';
import * as mainTypes from '../App/constants';

const initialState = fromJS({
  iconDetailRequesting: false,
  iconDetailResponse: {},
  imageRequesting : false,
  imageResponse:{},
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
    case mainTypes.FETCH_IMAGE_REQUEST:
      return state.merge({
        imageRequesting : true,
        imageResponse:{},
        error: '',
        success: false
      });
    case types.FETCH_IMAGE_SUCCESS:
      return state.merge({
        imageRequesting : false,
        imageResponse: fromJS(action.response),
        error: '',
        success: true
      });
    case types.FETCH_IMAGE_FAILURE:
      return state.merge({
        imageRequesting : false,
        imageResponse: {},
        error: 'Image fetch error',
        success: false
      });
    default:
      return state;
  }
}

export default iconDetailPageReducer;
