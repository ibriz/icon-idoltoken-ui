import { fromJS } from 'immutable';
import myWalletPageReducer from '../reducer';

describe('myWalletPageReducer', () => {
  it('returns the initial state', () => {
    expect(myWalletPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
