/*
 *
 * IconDetailPage actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const defaultAction = action(types.DEFAULT_ACTION);

export const getIconDetailRequest = action(types.GET_ICON_DETAIL_REQUEST, 'payload');
export const getIconDetailSuccess = action(types.GET_ICON_DETAIL_SUCCESS, 'response');
export const getIconDetailFailure = action(types.GET_ICON_DETAIL_FAILURE, 'error');
 
