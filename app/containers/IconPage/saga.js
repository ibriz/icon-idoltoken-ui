import { take, takeLatest, fork, call, put, select } from 'redux-saga/effects'; // Individual exports for testing export default function*
// defaultSaga() { // See example in containers/HomePage/saga.js }

import { LOCATION_CHANGE, push} from "react-router-redux";

import Api from 'utils/Api';
import {makeSelectToken} from 'containers/App/selectors';

import * as types from './constants';
import * as actions from './actions';
import { CELEBS_API_BASE } from '../App/constants';

function* getIconListService() {
    yield fork(
        Api.get(
            `${CELEBS_API_BASE}developers/export/JSON?limit=20`,
            actions.getIconListSuccess,
            actions.getIconListFailure
        )
    );
}

function* goTo(action) {
    yield put(push(`/icon/detail/${action.id}`));
}

// Individual exports for testing
export default function* defaultSaga() {
    yield takeLatest(types.GET_ICON_LIST_REQUEST, getIconListService);
    yield takeLatest(types.GO_TO, goTo);
}