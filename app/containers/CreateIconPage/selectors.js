
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
const makeSelectImageResponse = () => createSelector(selectDomain, (state) => state.get('imageResponse'));
const makeSelectImageRequesting = () => createSelector(selectDomain, (state) => state.get('imageRequesting'));

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectRequesting,
  makeSelectError,
  makeSelectImageResponse,
  makeSelectImageRequesting
};
