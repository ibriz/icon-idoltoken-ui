/*
 *
 * MyWalletPage reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';
import * as mainTypes from '../App/constants';

const initialState = fromJS({
  iconRequesting: false,
  iconResponse: {},
  imageRequesting : false,
  imageResponse:{},
  error: '',
  success: false
});

function myWalletPageReducer(state = initialState, action = {type: ''}) {
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

export default myWalletPageReducer;
