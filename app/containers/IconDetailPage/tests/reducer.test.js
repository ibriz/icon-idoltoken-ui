import { fromJS } from 'immutable';
import iconDetailPageReducer from '../reducer';

describe('iconDetailPageReducer', () => {
  it('returns the initial state', () => {
    expect(iconDetailPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
