import { COLORS_LOAD/* , COLORS_ADD */ } from './reducers';
import { loadColors } from './actions';

describe('Colors AC', () => {

  it('creates an action that loads colors', () => {
    const colors = ['green', 'red', 'purple'];
    const { type, payload } = loadColors(colors);
    expect(type).toBe(COLORS_LOAD);
    expect(payload).toEqual(colors);
  });

});