import { TOGGLE_TRANSLATION } from '../Actions/types';

export const toggleTranslation = (state = 1, action) => {
    switch (action.type) {
        case 'TOGGLE_TRANSLATION':
            console.log("state",state)
            return !state;
        default:
            return state;
    }
};
