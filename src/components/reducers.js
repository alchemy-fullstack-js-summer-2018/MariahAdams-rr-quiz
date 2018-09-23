export const COLORS_LOAD = 'COLORS_LOAD';

export function colors(state = [], { type, payload }) {
  switch(type) {
    case COLORS_LOAD:
      return payload;
    default: 
      return state;
  }
}