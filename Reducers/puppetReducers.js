import {
  REQUEST_PUPPETS_FAILED,
  REQUEST_PUPPETS_PENDING,
  REQUEST_PUPPETS_SUCCESS
} from '../Actions/types';

const initialPuppetState = {
  puppets: [],
  isPending: false,
  error: ''
};

export const requestAllPuppets = (state = initialPuppetState, action = {}) => {
  switch (action.type) {
    case REQUEST_PUPPETS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_PUPPETS_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        puppets: action.payload
      });
    case REQUEST_PUPPETS_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        error: action.payload
      });
    default:
      return state;
  }
};
