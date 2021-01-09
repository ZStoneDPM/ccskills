import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  updateRecipeDetail
} from "../reducers/user";
import Header from "./header";
 
// const Recipe = ({ this.props.user.recipes, apiRoot }) => {
  class Recipe extends Component {
      viewRecipe(value){
        this.props.dispatch(updateRecipeDetail(this.props.user.updateRecipesData[value]));
        window.location = `${window.location.origin}/RecipeDetail`;
        // console.log('item: '+JSON.stringify(this.props.user.updateRecipesData[value]));
      }
      
    render(){
      const recipes = this.props.user.updateRecipesData;
      const apiRoot = this.props.user.updateAPIRoot;
      // console.log(`test1: ${this.props.user.updateRecipesData}`)
  return (
    <div>
      <Header />
      <center style={{position: 'sticky', top:56,left:0,right:0, zIndex: 99, background: '#fff', paddingBottom: 5, borderBottom: 'solid 1px black'}}>
        <h1>Recipe List</h1>
      </center>
      {recipes.map((recipes, index) => (
        <div className="card text-center" key={recipes.uuid}>
          <div className="card-body">
            <h5 className="card-title">{recipes.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {recipes.description}
            </h6>
            <p className="card-img">
              <img
                alt={recipes.title}
                src={`${apiRoot}${recipes.images.small}`}
              />
            </p>
            <h6 className="card-subtitle mb-2 text-muted">
            Serves: {recipes.servings} / Prep-time: {recipes.prepTime} / Cook-time: {recipes.cookTime}
            </h6>
          </div>
          <p>
            <button
              className="btn btn-primary"
              type="button"
              onClick={()=>this.viewRecipe(index)}     
            >
              View Recipe
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};
  }

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Recipe);

