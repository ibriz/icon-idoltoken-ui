import { take, takeLatest, fork, call, put, select } from 'redux-saga/effects'; // Individual exports for testing export default function*
// defaultSaga() { // See example in containers/HomePage/saga.js }

import { LOCATION_CHANGE, push} from "react-router-redux";

import Api from 'utils/Api';
import {makeSelectToken} from 'containers/App/selectors';

import * as types from './constants';
import * as actions from './actions';
import { API_BASE } from '../App/constants';

function* redirectOnSuccess() {
    yield take(types.TOKEN_TRANSFER_SUCCESS);
    //executed on successful action
    yield put(push("/wallet"));
}

function* tokenTransferService(action) {
    const token = yield select(makeSelectToken());
    const {payload, payload:{fromAddress,tokenType,toAddress,tokenId}} = action;
    const successWatcher = yield fork(redirectOnSuccess);
    yield fork(
        Api.get(
            `${API_BASE}iconmain/transfer?fromAddress=${fromAddress}&toAddress=${toAddress}&tokenType=${tokenType}&tokenId=${tokenId}`,
            actions.tokenTransferSuccess,
            actions.tokenTransferFailure,
            payload,
            token
        )
    );
    yield take([LOCATION_CHANGE, types.TOKEN_TRANSFER_FAILURE]);
    yield cancel(successWatcher);
}

// Individual exports for testing
export default function* defaultSaga() {
    yield takeLatest(types.TOKEN_TRANSFER_REQUEST, tokenTransferService);
}