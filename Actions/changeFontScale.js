import { CHANGE_FONT_SCALE } from './types';

export const changeFontScale = (factor) => ({
  type: CHANGE_FONT_SCALE,
  factor
});
