import recipes from '../components/apis/recipes';
import specials from '../components/apis/specials';
import history from '../history';
import {
  CREATE_RECIPE,
  FETCH_RECIPES,
  FETCH_RECIPE,
  FETCH_SPECIALS,
  DELETE_RECIPE,
  EDIT_RECIPE
} from './types';

export const createRecipe = formValues => async (dispatch) => {
  const response = await recipes.post('/recipes', { ...formValues });

  dispatch({ type: CREATE_RECIPE, payload: response.data });
  history.push('/');
  window.location = `${window.location.origin}/editMenu`;
};

export const fetchRecipes = () => async dispatch => {
  const response = await recipes.get('/recipes');

  dispatch({ type: FETCH_RECIPES, payload: response.data },
    console.log(response)
    );
};

export const fetchSpecials = () => async dispatch => {
  const response = await specials.get('/specials');

  dispatch({ type: FETCH_SPECIALS, payload: response.data },
    console.log(response)
    );
};

export const fetchRecipe = id => async dispatch => {
  const response = await recipes.get(`/recipes/${id}`);

  dispatch({ type: FETCH_RECIPE, payload: response.data });
};

export const editRecipe = (id, formValues) => async dispatch => {
  const response = await recipes.patch(`/recipe/${id}`, formValues);

  dispatch({ type: EDIT_RECIPE, payload: response.data });
  history.push('/');
  window.location = `${window.location.origin}/editMenu`;
};

export const deleteRecipe = uuid => async dispatch => {
  await recipes.delete(`/recipes/${uuid}`);

  dispatch({ type: DELETE_RECIPE, payload: uuid });
  history.push('/editMenu');
  window.location = `${window.location.origin}/editMenu`;
};
