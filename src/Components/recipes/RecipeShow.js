import React from 'react';
import { Table, ListGroup, Card, Alert, Button } from "react-bootstrap";
import { updateMarker } from "../../reducers/user";
import { connect } from "react-redux";
import { fetchRecipe, fetchSpecials } from '../../actions';
import noImage from '../../assets/noimage.jpeg';

class RecipeShow extends React.Component {
  state={
    specials: this.props.fetchSpecials()
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchRecipe(id);
    this.props.fetchSpecials();
  }
  getLat(arr){
    var lat = arr.match(/([^,]*),(.*)/);
    // console.log(`lat: ${lat[1]}`)
    return lat[1];
}
  getLon(arr){
    var lon = arr.match(/([^,]*),(.*)/);
    // console.log(`lon: ${lon[2]}`)
    return lon[2];
}
  viewMap(geo) {
    
    console.log(geo);

    window.location = `${window.location.origin}/map/${this.getLat(geo)}/${this.getLon(geo)}`;
    //go to page
  }
  checkMatch(ingredientUUID) {
    const specials = this.props.specials;
    console.log('item: '+JSON.stringify(specials));
    
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
  }


  ifHasImage(){
    const apiRoot = 'http://localhost:3001';
    const recipes = this.props.recipe;
    if(recipes.hasOwnProperty('images')){
      return `${apiRoot}${recipes.images.medium}`;
    } else {
      return `${window.location.origin}${noImage}`
    }
  }

  render() {
    if (!this.props.recipe) {
      return <div>Loading...</div>;
    }
  
    const directions = this.props.recipe.directions;
    const countIngredients = this.props.recipe.ingredients;
    const ingredientCount = Object.keys(countIngredients).length;
    const specials = this.props.specials;
    console.log('item: '+JSON.stringify(specials));

    const { uuid, title, description, prepTime, servings, cookTime, ingredients,
     editDate, postDate } = this.props.recipe;
    const styles = {
      cookingInstructions: {
        maxWidth: window.visualViewport.width * 0.6,
        textAlign: "left",
        marginRight: "auto",
        marginLeft: "auto",
      },
      topTitle: {
        position: "sticky",
        top: 49,
        left: 0,
        right: 0,
        zIndex: 99,
        background: "#fff",
        paddingBottom: 5,
        borderBottom: "solid 1px black",
      },
    };
    return (
      <div>
        {/* <h1>{title}</h1>
        <h5>{description}</h5> */}

        <React.Fragment>
        <center style={styles.topTitle}>
          <h1>Recipe Detail</h1>
        </center>

        <div className="card text-center" key={uuid}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {description}
            </h6>
            <p className="card-img">
              <img
                alt={title}
                src={this.ifHasImage()}
              />
            </p>
            <h6 className="card-subtitle mb-2 text-muted">
              Serves: {servings} / Prep-time: {prepTime} /
              Cook-time: {cookTime}
            </h6>
            <div style={styles.cookingInstructions}>
              <Card>
                <Card.Body>
                  <h5 style={{ textAlign: 'center' }}>
                    Ingredients (Total: {ingredientCount})
                  </h5>
                  <ListGroup>
                    {ingredients.map((ingredients, index) => (
                      <ListGroup.Item key={index}>
                        {ingredients.amount} {ingredients.measurement}{" "}
                      {ingredients.name}    {this.checkMatch(ingredients.uuid)}
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
              Originally Posted: {postDate} || Last Edited:{" "}
              {editDate}{" "}
            </h6>
          </div>
          <p></p>
        </div>
      </React.Fragment>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return { recipe: state.recipes[ownProps.match.params.id] };
// };

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  recipes: Object.values(state.recipes),
  specials: Object.values(state.specials),
  recipe: state.recipes[ownProps.match.params.id],
  
});

export default connect(
  mapStateToProps,
  { fetchRecipe, fetchSpecials, updateMarker }
)(RecipeShow);
