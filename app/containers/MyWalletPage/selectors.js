
import { createSelector } from 'reselect';

/**
 * Direct selector to the myWalletPage state domain
 */
const selectDomain = (state) => state.get('myWalletPage');

/**
 * Other specific selectors
 */
const makeSelectSuccess = () => createSelector(selectDomain, (state) => state.get('success'));
const makeSelectIconResponse = () => createSelector(selectDomain, (state) => state.get('iconResponse'));
const makeSelectError = () => createSelector(selectDomain, (state) => state.get('error'));
const makeSelectIconRequesting = () => createSelector(selectDomain, (state) => state.get('iconRequesting'));

export {
  makeSelectSuccess,
  makeSelectIconResponse,
  makeSelectIconRequesting,
  makeSelectError,
};
