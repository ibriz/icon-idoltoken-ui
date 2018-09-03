/*
 *
 * IconPage actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const goTo = action(types.GO_TO, 'id');

export const getIconListRequest = action(types.GET_ICON_LIST_REQUEST, 'payload');
export const getIconListSuccess = action(types.GET_ICON_LIST_SUCCESS, 'response');
export const getIconListFailure = action(types.GET_ICON_LIST_FAILURE, 'error');
 
