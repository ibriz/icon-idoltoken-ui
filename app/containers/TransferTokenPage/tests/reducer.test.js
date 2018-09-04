import { fromJS } from 'immutable';
import transferTokenPageReducer from '../reducer';

describe('transferTokenPageReducer', () => {
  it('returns the initial state', () => {
    expect(transferTokenPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
