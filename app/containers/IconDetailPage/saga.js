import { take, takeLatest, fork, call, put, select } from 'redux-saga/effects'; // Individual exports for testing export default function*
// defaultSaga() { // See example in containers/HomePage/saga.js }

import { LOCATION_CHANGE, push} from "react-router-redux";

import Api from 'utils/Api';
import {makeSelectToken} from 'containers/App/selectors';

import * as types from './constants';
import * as actions from './actions';
import { CELEBS_API_BASE } from '../App/constants';

function* getIconDetailService() {
    yield fork(
        Api.get(
            `${CELEBS_API_BASE}developers/export/JSON?limit=20`,
            actions.getIconDetailSuccess,
            actions.getIconDetailFailure
        )
    );
}

// Individual exports for testing
export default function* defaultSaga() {
    yield takeLatest(types.GET_ICON_DETAIL_REQUEST, getIconDetailService);
}