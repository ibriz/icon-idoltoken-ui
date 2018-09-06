import { take, takeLatest, fork, call, put, select } from 'redux-saga/effects'; // Individual exports for testing export default function*
// defaultSaga() { // See example in containers/HomePage/saga.js }

import { LOCATION_CHANGE, push} from "react-router-redux";

import Api from 'utils/Api';
import {makeSelectToken} from 'containers/App/selectors';

import * as types from './constants';
import * as actions from './actions';
import { API_BASE, FETCH_IMAGE_REQUEST } from '../App/constants';

function* getIconDetailService(action) {
    yield fork(
        Api.get(
            `${API_BASE}iconmain/checkTokenDetails?&tokenType=IDOL&tokenId=${action.tokenId}`,
            actions.getIconDetailSuccess,
            actions.getIconDetailFailure
        )
    );
}

function* fetchImageRequest(action) {
    yield fork(
        Api.get(
            `${API_BASE}iconmain/showImage?hash=${action.payload}`,
            actions.fetchImageSuccess,
            actions.fetchImageFailure
        )
    );
}
// Individual exports for testing
export default function* defaultSaga() {
    yield takeLatest(types.GET_ICON_DETAIL_REQUEST, getIconDetailService);
    yield takeLatest(FETCH_IMAGE_REQUEST, fetchImageRequest);
}