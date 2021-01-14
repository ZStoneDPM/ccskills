import recipes from '../components/apis/recipes';
import specials from '../components/apis/specials';
// import history from '../history';
import {
  CREATE_RECIPE,
  FETCH_RECIPES,
  FETCH_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
  CREATE_SPECIAL,
  FETCH_SPECIALS,
  FETCH_SPECIAL,
  DELETE_SPECIAL,
  EDIT_SPECIAL
} from './types';

export const createRecipe = formValues => async (dispatch) => {
  const response = await recipes.post('/recipes', { ...formValues });

  dispatch({ type: CREATE_RECIPE, payload: response.data });
  // history.push('/');
  window.location = `${window.location.origin}/editRecipes`;
};

export const fetchRecipes = () => async dispatch => {
  const response = await recipes.get('/recipes');

  dispatch({ type: FETCH_RECIPES, payload: response.data },
    console.log(response)
    );
};

export const fetchRecipe = id => async dispatch => {
  const response = await recipes.get(`/recipes/${id}`);

  dispatch({ type: FETCH_RECIPE, payload: response.data });
};

export const editRecipe = (id, formValues) => async dispatch => {
  const response = await recipes.patch(`/recipes/${id}`, formValues);

  dispatch({ type: EDIT_RECIPE, payload: response.data });
  // history.push('/');
  window.location = `${window.location.origin}/editRecipes`;
};

export const deleteRecipe = uuid => async dispatch => {
  await recipes.delete(`/recipes/${uuid}`);

  dispatch({ type: DELETE_RECIPE, payload: uuid });
  // history.push('/editRecipes');
  window.location = `${window.location.origin}/editRecipes`;
};







//specials
export const createSpecial = formValues => async (dispatch) => {
  const response = await specials.post('/specials', { ...formValues });

  dispatch({ type: CREATE_SPECIAL, payload: response.data });
  // history.push('/');
  window.location = `${window.location.origin}/editSpecials`;
};

export const fetchSpecials = () => async dispatch => {
  const response = await specials.get('/specials');

  dispatch({ type: FETCH_SPECIALS, payload: response.data },
    console.log(response)
    );
};

export const fetchSpecial = id => async dispatch => {
  const response = await specials.get(`/specials/${id}`);

  dispatch({ type: FETCH_SPECIAL, payload: response.data });
};

export const editSpecial = (id, formValues) => async dispatch => {
  const response = await specials.patch(`/specials/${id}`, formValues);

  dispatch({ type: EDIT_SPECIAL, payload: response.data });
  // history.push('/');
  window.location = `${window.location.origin}/editSpecials`;
};

export const deleteSpecial = uuid => async dispatch => {
  await specials.delete(`/specials/${uuid}`);

  dispatch({ type: DELETE_SPECIAL, payload: uuid });
  // history.push('/editMenu');
  window.location = `${window.location.origin}/editSpecials`;
};
