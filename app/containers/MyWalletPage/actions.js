/*
 *
 * MyWalletPage actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const defaultAction = action(types.DEFAULT_ACTION);

export const getIconListRequest = action(types.GET_ICON_LIST_REQUEST, 'payload');
export const getIconListSuccess = action(types.GET_ICON_LIST_SUCCESS, 'response');
export const getIconListFailure = action(types.GET_ICON_LIST_FAILURE, 'error');
 
export const fetchImageSuccess = action(types.FETCH_IMAGE_SUCCESS,'response');
export const fetchImageFailure = action(types.FETCH_IMAGE_FAILURE, 'error');
