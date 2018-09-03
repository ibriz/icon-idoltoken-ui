import { fromJS } from 'immutable';
import iconPageReducer from '../reducer';

describe('iconPageReducer', () => {
  it('returns the initial state', () => {
    expect(iconPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
