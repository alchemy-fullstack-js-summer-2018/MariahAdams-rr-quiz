import { COLORS_LOAD, COLORS_ADD } from './reducers';

const colors = ['green', 'red', 'purple'];

export const loadColors = () => {
  return {
    type: COLORS_LOAD,
    payload: colors
  };
};

export const addColor = color => {
  return {
    type: COLORS_ADD,
    payload: color
  };
};