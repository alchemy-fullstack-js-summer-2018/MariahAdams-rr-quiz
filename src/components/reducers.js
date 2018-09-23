export const COLORS_LOAD = 'COLORS_LOAD';
export const COLORS_ADD = 'COLORS_ADD';

export function colors(state = [], { type, payload }) {
  switch(type) {
    case COLORS_LOAD:
      return payload;
    case COLORS_ADD:
      return [...state, payload];
    default: 
      return state;
  }
}

export function selectedColor(state = 'white', { type }) {
  switch(type) {
    default:
      return state;
  }
}