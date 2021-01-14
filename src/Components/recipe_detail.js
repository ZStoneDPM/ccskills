import React, { Component } from "react";
import { Table, ListGroup, Card, Alert, Button } from "react-bootstrap";
import { updateMarker } from "../reducers/user";
import { connect } from "react-redux";
import { fetchRecipe, fetchSpecials } from "../actions";

class RecipeDetail extends Component {
  state = {
    specials: this.props.fetchSpecials(),
    recipes: this.props.fetchRecipes(),
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchRecipe(id);
  }

  viewMap(geo) {
    console.log(geo);
    //update state
    this.props.dispatch(updateMarker(geo));
    window.location = `${window.location.origin}/map`;
    //go to page
  }

  checkMatch(ingredientUUID) {
    const specials = this.props.user.updateSpecialsData;
    return specials.map((specials, index) =>
      specials.ingredientId === ingredientUUID ? ( //if matched
        <Alert key={index} variant="info">
          {specials.title} {specials.type} {specials.text}
          {specials.type === "local" ? (
            <Button
              style={{ marginLeft: 20 }}
              onClick={() => this.viewMap(specials.geo)}
            >
              View Location {/* or Get Directions if adding address mapping*/}
            </Button>
          ) : specials.type === "event" ? (
            <Button
              style={{ marginLeft: 20 }}
              onClick={() => this.viewMap(specials.geo)}
            >
              View Location
            </Button>
          ) : (
            ""
          )}
        </Alert>
      ) : (
        ""
      )
    );

    // console.log(match)
  }

  render() {
    const recipes = this.props.user.recipeDetail;
    const apiRoot = this.props.user.updateAPIRoot;
    const directions = recipes.directions;
    const ingredients = recipes.ingredients;
    const ingredientCount = Object.keys(ingredients).length;

    const styles = {
      cookingInstructions: {
        maxWidth: window.visualViewport.width * 0.6,
        textAlign: "left",
        marginRight: "auto",
        marginLeft: "auto",
      },
      topTitle: {
        position: "sticky",
        top: 56,
        left: 0,
        right: 0,
        zIndex: 99,
        background: "#fff",
        paddingBottom: 5,
        borderBottom: "solid 1px black",
      },
    };
    return (
      <React.Fragment>
        <center style={styles.topTitle}>
          <h1>Recipe Detail</h1>
        </center>

        <div className="card text-center" key={recipes.uuid}>
          <div className="card-body">
            <h5 className="card-title">{recipes.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {recipes.description}
            </h6>
            <p className="card-img">
              <img
                alt={recipes.title}
                src={`${apiRoot}${recipes.images.medium}`}
              />
            </p>
            <h6 className="card-subtitle mb-2 text-muted">
              Serves: {recipes.servings} / Prep-time: {recipes.prepTime} /
              Cook-time: {recipes.cookTime}
            </h6>
            <div style={styles.cookingInstructions}>
              <Card>
                <Card.Body>
                  <h5 style={{ paddingLeft: 40, lineHeight: 2 }}>
                    Ingredients (Total: {ingredientCount})
                  </h5>
                  <ListGroup>
                    {ingredients.map((ingredients, index) => (
                      <ListGroup.Item key={index}>
                        {ingredients.amount} {ingredients.measurement}{" "}
                        {ingredients.name} {this.checkMatch(ingredients.uuid)}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>

              <Table striped={true} bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Cooking Instructions</th>
                  </tr>
                </thead>
                <tbody>
                  {directions.map((directions, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{directions.instructions}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">
              Originally Posted: {recipes.postDate} || Last Edited:{" "}
              {recipes.editDate}{" "}
            </h6>
          </div>
          <p></p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipe: state.recipes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchRecipe, fetchSpecials })(
  RecipeDetail
);
