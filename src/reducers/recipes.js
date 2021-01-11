import _ from 'lodash';
import {
  FETCH_RECIPE,
  FETCH_RECIPES,
  CREATE_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, ..._.mapKeys(action.payload, 'uuid') };
    case FETCH_RECIPE:
      return { ...state, [action.payload.uuid]: action.payload };
    case CREATE_RECIPE:
      return { ...state, [action.payload.uuid]: action.payload };
    case EDIT_RECIPE:
      return { ...state, [action.payload.uuid]: action.payload };
    case DELETE_RECIPE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
