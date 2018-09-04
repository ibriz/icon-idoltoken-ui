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