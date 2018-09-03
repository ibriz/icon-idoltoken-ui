
import { createSelector } from 'reselect';

/**
 * Direct selector to the iconDetailPage state domain
 */
const selectDomain = (state) => state.get('iconDetailPage');

/**
 * Other specific selectors
 */
const makeSelectSuccess = () => createSelector(selectDomain, (state) => state.get('success'));
const makeSelectDetailResponse = () => createSelector(selectDomain, (state) => state.get('iconDetailResponse'));
const makeSelectError = () => createSelector(selectDomain, (state) => state.get('error'));
const makeSelectDetailRequesting = () => createSelector(selectDomain, (state) => state.get('iconDetailRequesting'));

export {
  makeSelectSuccess,
  makeSelectDetailResponse,
  makeSelectDetailRequesting,
  makeSelectError,
};
