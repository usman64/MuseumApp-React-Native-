import {
  REQUEST_PUPPETS_FAILED,
  REQUEST_PUPPETS_PENDING,
  REQUEST_PUPPETS_SUCCESS
} from './types';
import axios from 'axios';

export const requestAllPuppets = () => (dispatch) => {
  dispatch({ type: REQUEST_PUPPETS_PENDING });
  fetch('https://glacial-beyond-08798.herokuapp.com/allpuppets')
    .then((Response) => Response.json())
    .then((data) => dispatch({ type: REQUEST_PUPPETS_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: REQUEST_PUPPETS_FAILED, payload: err }));
};
