import { colors, COLORS_LOAD, COLORS_ADD } from './reducers';

describe('color reducers', () => {

  const color = ['green', 'red'];

  it('defaults to an empty array', () => {
    const state = colors(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads colors', () => {
    const state = colors([], {
      type: COLORS_LOAD,
      payload: color
    });
    expect(state).toEqual(color);
  });

  it('adds a color', () => {
    const state = colors([], {
      type: COLORS_ADD,
      payload: 'orange'
    });
    expect(state).toEqual(['orange']);
  });

});