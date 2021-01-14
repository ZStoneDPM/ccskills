import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../actions";
import noImage from "../assets/noimage.jpeg";

class Recipe extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }
  ifHasImage(index) {
    const apiRoot = "http://localhost:3001";
    const recipes = this.props.recipes[index];
    if (recipes.hasOwnProperty("images")) {
      return `${apiRoot}${recipes.images.small}`;
    } else {
      return `${window.location.origin}${noImage}`;
    }
  }
  render() {
    return (
      <React.Fragment>
        <center
          style={{
            position: "sticky",
            top: 49,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "#fff",
            paddingBottom: 5,
            borderBottom: "solid 1px black",
          }}
        >
          <h1>Recipe List</h1>
        </center>
        {this.props.recipes.map((recipe, index) => (
          <div className="card text-center" key={recipe.uuid}>
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {recipe.description}
              </h6>
              <p className="card-img">
                <img
                  alt={recipe.title}
                  src={`${this.ifHasImage(index)}` /*recipe.images.full */}
                />
              </p>
              <h6 className="card-subtitle mb-2 text-muted">
                Serves: {recipe.servings} / Prep-time: {recipe.prepTime} /
                Cook-time: {recipe.cookTime}
              </h6>
            </div>
            <p>
              <Link to={`/recipe/${recipe.uuid}`} className="header">
                <Button className="btn btn-primary" type="button">
                  View Recipe
                </Button>
              </Link>
            </p>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  recipes: Object.values(state.recipes),
});

export default connect(mapStateToProps, { fetchRecipes })(Recipe);
