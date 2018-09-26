/*
 *
 * CreateIconPage actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const goTo = action(types.GOTO, 'id');
export const createTokenRequest = action(types.CREATE_TOKEN_REQUEST, 'payload');
export const createTokenSuccess = action(types.CREATE_TOKEN_SUCCESS, 'response');
export const createTokenFailure = action(types.CREATE_TOKEN_FAILURE, 'error');

export const postImageRequest = action(types.POST_IMAGE_REQUEST, 'payload');
export const postImageSuccess = action(types.POST_IMAGE_SUCCESS, 'response');
export const postImageFailure = action(types.POST_IMAGE_FAILURE, 'error');