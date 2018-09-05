/*
 *
 * TransferTokenPage actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const tokenTransferRequest = action(types.TOKEN_TRANSFER_REQUEST, 'payload');
export const tokenTransferSuccess = action(types.TOKEN_TRANSFER_SUCCESS, 'response');
export const tokenTransferFailure = action(types.TOKEN_TRANSFER_FAILURE, 'error');