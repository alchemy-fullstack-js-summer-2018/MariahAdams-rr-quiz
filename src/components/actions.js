import { COLORS_LOAD, COLORS_ADD, SELECT_COLOR } from './reducers';

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

export const selectColor = color => {
  return {
    type: SELECT_COLOR,
    payload: color
  };
};