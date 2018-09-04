
import { createSelector } from 'reselect';

/**
 * Direct selector to the createIconPage state domain
 */
const selectDomain = (state) => state.get('createIconPage');

/**
 * Other specific selectors
 */
const makeSelectSuccess = () => createSelector(selectDomain, (state) => state.get('success'));
const makeSelectResponse = () => createSelector(selectDomain, (state) => state.get('createResponse'));
const makeSelectError = () => createSelector(selectDomain, (state) => state.get('error'));
const makeSelectRequesting = () => createSelector(selectDomain, (state) => state.get('createRequesting'));

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectRequesting,
  makeSelectError,
};
