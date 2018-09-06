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
  imageRequesting: false,
  imageResponse: {},
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
        error: 'Create token error occured',
        success: false
      });

    case types.POST_IMAGE_REQUEST:
      return state.merge({
        imageRequesting: true,
        imageResponse: {},
        error: '',
        success: false
      });
    case types.POST_IMAGE_SUCCESS:
      return state.merge({
        imageRequesting: false,
        imageResponse: fromJS(action.response),
        error: '',
        success: true
      });
    case types.POST_IMAGE_FAILURE:
      return state.merge({
        imageRequesting: false,
        imageResponse: {},
        error: 'Some error occured',
        success: false
      });
    default:
      return state;
  }
}

export default createIconPageReducer;
