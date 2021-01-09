export const UPDATE_RECIPE_DATA = "UPDATE_RECIPE_DATA";
export const UPDATE_SPECIALS_DATA = "UPDATE_SPECIALS_DATA";
export const UPDATE_API_ROOT = "UPDATE_API_ROOT";
export const UPDATE_RECIPE_DETAIL = "UPDATE_RECIPE_DETAIL";

export const updateRecipesData = updateRecipesData => ({
  type: UPDATE_RECIPE_DATA,
  updateRecipesData
});
export const updateSpecalsData = updateSpecalsData => ({
  type: UPDATE_SPECIALS_DATA,
  updateSpecalsData
});
export const updateAPIRoot = updateAPIRoot => ({
  type: UPDATE_API_ROOT,
  updateAPIRoot
});
export const updateRecipeDetail = recipeDetail => ({
  type: UPDATE_RECIPE_DETAIL,
  recipeDetail
});

const initialState = { 
  updateRecipeData: [],
  updateSpecialsData: [],
  apiRoot: '',
  recipeDetail: ''
   };

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_RECIPE_DATA:
      return {
        ...state,
        updateRecipesData: action.updateRecipesData,
        rehydrated: false
      };
    case UPDATE_SPECIALS_DATA:
      return {
        ...state,
        updateSpecalsData: action.updateSpecalsData,
        rehydrated: false
      };
      case UPDATE_API_ROOT:
        return {
          ...state,
          updateAPIRoot: action.updateAPIRoot,
          rehydrated: false
        };
        case UPDATE_RECIPE_DETAIL:
          return {
            ...state,
            recipeDetail: action.recipeDetail,
            rehydrated: false
          };
    default:
      return state;
  }
};
