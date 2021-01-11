import _ from 'lodash';
import {
  FETCH_SPECIAL,
  FETCH_SPECIALS,
  CREATE_SPECIAL,
  EDIT_SPECIAL,
  DELETE_SPECIAL
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SPECIALS:
      return { ...state, ..._.mapKeys(action.payload, 'uuid') };
    case FETCH_SPECIAL:
      return { ...state, [action.payload.uuid]: action.payload };
    case CREATE_SPECIAL:
      return { ...state, [action.payload.uuid]: action.payload };
    case EDIT_SPECIAL:
      return { ...state, [action.payload.uuid]: action.payload };
    case DELETE_SPECIAL:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
