const validate = values => {
    const errors = {}
    if(!values.title) {
      errors.title = 'Required'
    }
    if(!values.description) {
        errors.description = 'Required'
      }
      if(!values.servings) {
        errors.servings = 'Required'
      }
      if(!values.prepTime) {
        errors.prepTime = 'Required'
      }    
      if(!values.cookTime) {
        errors.cookTime = 'Required'
      }
    if (!values.recipes || !values.recipes.length) {
      errors.recipes = { _error: 'At least one recipe must be entered' }
    } else {
      const recipesArrayErrors = []
      values.recipes.forEach((recipe, recipeIndex) => {
        const recipeErrors = {}
        if (!recipe || !recipe.firstName) {
          recipeErrors.firstName = 'Required'
          recipesArrayErrors[recipeIndex] = recipeErrors
        }
        if (!recipe || !recipe.lastName) {
          recipeErrors.lastName = 'Required'
          recipesArrayErrors[recipeIndex] = recipeErrors
        }
        if (recipe && recipe.ingredients && recipe.ingredients.length) {
          const ingredientArrayErrors = []
          recipe.ingredients.forEach((ingredient, ingredientIndex) => {
            if (!ingredient || !ingredient.length) {
              ingredientArrayErrors[ingredientIndex] =  'Required'
            }
          })
          if(ingredientArrayErrors.length) {
            recipeErrors.ingredients = ingredientArrayErrors
            recipesArrayErrors[recipeIndex] = recipeErrors
          }
          // if (recipe.ingredients.length > 5) {
          //   if(!recipeErrors.ingredients) {
          //     recipeErrors.ingredients = []
          //   }
          //   recipeErrors.ingredients._error = 'No more than five ingredients allowed'
          //   recipesArrayErrors[recipeIndex] = recipeErrors
          // }
        }
      })
      if(recipesArrayErrors.length) {
        errors.recipes = recipesArrayErrors
      }
    }
    return errors
  }
  
  export default validate