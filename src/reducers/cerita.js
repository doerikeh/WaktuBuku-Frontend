import _ from 'lodash';
import {
  GET_CERITA,
  GET_CERITAS,
  ADD_CERITA,
  EDIT_CERITA
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CERITA:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case GET_CERITAS:
    case ADD_CERITA:
    case EDIT_CERITA:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};
