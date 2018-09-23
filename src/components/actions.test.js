import { COLORS_LOAD, COLORS_ADD } from './reducers';
import { loadColors, addColor } from './actions';

describe('Colors AC', () => {

  it('creates an action that loads colors', () => {
    const colors = ['green', 'red', 'purple'];
    const { type, payload } = loadColors(colors);
    expect(type).toBe(COLORS_LOAD);
    expect(payload).toEqual(colors);
  });

  it('creates an actions that adds a color', () => {
    const color = 'blue';
    const { type, payload } = addColor(color);
    expect(type).toBe(COLORS_ADD);
    expect(payload).toEqual(color);
  });

});