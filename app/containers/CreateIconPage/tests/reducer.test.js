import { fromJS } from 'immutable';
import createIconPageReducer from '../reducer';

describe('createIconPageReducer', () => {
  it('returns the initial state', () => {
    expect(createIconPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
