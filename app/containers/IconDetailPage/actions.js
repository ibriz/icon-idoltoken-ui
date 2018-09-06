/*
 *
 * IconDetailPage actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const defaultAction = action(types.DEFAULT_ACTION);

export const getIconDetailRequest = action(types.GET_ICON_DETAIL_REQUEST, 'tokenId');
export const getIconDetailSuccess = action(types.GET_ICON_DETAIL_SUCCESS, 'response');
export const getIconDetailFailure = action(types.GET_ICON_DETAIL_FAILURE, 'error');

export const fetchImageSuccess = action(types.FETCH_IMAGE_SUCCESS,'response');
export const fetchImageFailure = action(types.FETCH_IMAGE_FAILURE, 'error');
