import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../../actions';

class RecipeList extends React.Component {
  state={
    recipes: this.props.fetchRecipes()
  }
  componentDidMount() {
    this.props.fetchRecipes();
    // console.log(this.props.fetchRecipes())
  }

  renderAdmin(recipe) {
      return (
        <div className="right floated content">
          <Link to={`/recipe/edit/${recipe.uuid}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/recipe/delete/${recipe.uuid}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
   
  }

  renderList() {
    return this.props.recipes.map(recipe => {
      return (
        <div className="item" key={recipe.uuid}>
          {this.renderAdmin(recipe)}
          <i className="large middle aligned icon camera" />
          <div className="content">
          <Link to={`/recipe/${recipe.uuid}`} className="header">
              {recipe.title}
            </Link>
            <div className="description">{recipe.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    // if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/recipe/new" className="ui button primary">
            Create Recipe
          </Link>
        </div>
      );
    // }
  }

  render() {
    return (
      <div style={{width: window.visualViewport.width * .8, marginRight: 'auto', marginLeft: 'auto'}}>
        <h2>Recipes</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: Object.values(state.recipes)
  };
};

export default connect(mapStateToProps, { fetchRecipes })(RecipeList);
