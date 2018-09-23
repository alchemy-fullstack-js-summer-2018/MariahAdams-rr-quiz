import { colors } from './reducers';

describe('color reducers', () => {

  it('defaults to an empty array', () => {
    const state = colors(undefined, {});
    expect(state).toEqual([]);
  });
});