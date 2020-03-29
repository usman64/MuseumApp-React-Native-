import { TOGGLE_TRANSLATION } from '../Actions/types';

//lang1 = English
const initialTranslationState = {
  lang1_toggle: false
};

export const toggleTranslation = (state = initialTranslationState, action) => {
  switch (action.type) {
    case 'TOGGLE_TRANSLATION':
      return Object.assign({}, state, { lang1_toggle: !state.lang1_toggle });
    default:
      return state;
  }
};
