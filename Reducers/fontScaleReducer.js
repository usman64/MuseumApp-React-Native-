import { CHANGE_FONT_SCALE } from '../Actions/types';

const initialFontScaleState = {
  fontScalefactor: 1
};

export const changeFont = (state = initialFontScaleState, action) => {
  switch (action.type) {
    case 'CHANGE_FONT_SCALE':
      return Object.assign({}, state, { fontScalefactor: action.payload });
    default:
      return state;
  }
};
