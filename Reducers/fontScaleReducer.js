import { CHANGE_FONT_SCALE } from '../Actions/types';

export const changeFont = (state = 1, action) => {
  switch (action.type) {
    case 'CHANGE_FONT_SCALE':
      return action.factor;
    default:
      console.log('in default');
      return state;
  }
};
