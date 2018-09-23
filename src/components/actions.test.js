import { COLORS_LOAD, COLORS_ADD, SELECT_COLOR } from './reducers';
import { loadColors, addColor, selectColor } from './actions';

describe('Colors AC', () => {

  it('creates an action that loads colors', () => {
    const colors = ['green', 'red', 'purple'];
    const { type, payload } = loadColors(colors);
    expect(type).toBe(COLORS_LOAD);
    expect(payload).toEqual(colors);
  });

  it('creates an action that adds a color', () => {
    const color = 'blue';
    const { type, payload } = addColor(color);
    expect(type).toBe(COLORS_ADD);
    expect(payload).toEqual(color);
  });

  it('creates an action that selects a color', () => {
    const color = 'lilac';
    const { type, payload } = selectColor(color);
    expect(type).toBe(SELECT_COLOR);
    expect(payload).toBe(color);
  });

});