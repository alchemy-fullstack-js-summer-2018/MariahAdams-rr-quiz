import { colors, COLORS_LOAD, COLORS_ADD, selectedColor, SELECT_COLOR } from './reducers';

describe('color reducers', () => {

  describe('colors', () => {

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

  describe('selectedColor', () => {

    it('defaults to white', () => {
      const state = selectedColor('white', {});
      expect(state).toBe('white');
    });

    it('holds string name of currently selected color', () => {
      const color = 'blue';
      const state = selectedColor('', {
        type: SELECT_COLOR,
        payload: color
      });
      expect(state).toBe(color);
    });

  });

});