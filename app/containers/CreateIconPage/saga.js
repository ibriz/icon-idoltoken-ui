import { take, takeLatest, fork, call, put, select, cancel } from 'redux-saga/effects'; // Individual exports for testing export default function*
// defaultSaga() { // See example in containers/HomePage/saga.js }

import { LOCATION_CHANGE, push} from "react-router-redux";

import Api from 'utils/Api';
import * as types from './constants';
import * as actions from './actions';
import { API_BASE } from '../App/constants';

function* createTokenService(action) {
    const {payload:{address, name, ipfs_handle, age, gender, tokenType}} = action;
    yield fork(
      Api.post(
        `${API_BASE}iconmain/createIdolToken`,
        actions.createTokenSuccess,
        actions.createTokenFailure,
        action['payload'],
        action['payload']
      ),
    );
}

function* goto(action) {
  yield put(push(action.id));
}

function* postImageService(action) {
    const {payload} = action;
    yield fork(
        Api.multipartPost(
            `${API_BASE}iconmain/uploadImage`,
            actions.postImageSuccess,
            actions.postImageFailure,
            payload,
            payload
        )
    );
}

// Individual exports for testing
export default function* defaultSaga() {
    yield takeLatest(types.CREATE_TOKEN_REQUEST, createTokenService);
    yield takeLatest(types.POST_IMAGE_REQUEST, postImageService);
    yield takeLatest(types.GOTO, goto);
}
