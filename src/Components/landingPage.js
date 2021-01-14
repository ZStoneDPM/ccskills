import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchRecipes, fetchSpecials } from "../actions";
import noImage from "../assets/noimage.jpeg";

class LandingPage extends Component {
  state = {
    apiRoot: "http://localhost:3001",
    recipes: this.props.fetchRecipes(),
    specials: this.props.fetchSpecials(),
  };

  componentDidMount() {
    this.props.fetchRecipes();
    this.props.fetchSpecials();
  }

  ifHasImage(index) {
    const apiRoot = "http://localhost:3001";
    const recipes = this.props.recipes[index];
    if (recipes.hasOwnProperty("images")) {
      return `${apiRoot}${recipes.images.full}`;
    } else {
      return `${window.location.origin}${noImage}`;
    }
  }

  render() {
    // const recipes = this.props.recipes;
    // console.log('item: '+JSON.stringify(this.props.recipes));

    const styles = {
      Carousel: {
        maxWidth: window.visualViewport.width * 0.6,
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 30,
      },
      frame: {
        backgroundColor: "grey",
        paddingBottom: 30,
        transition: "all 0.3s ease-out",
      },
      carouselItem: {
        backgroundSize: "contain",
      },
      carouselImage: {
        height: window.visualViewport.width * 0.6 * 0.6,
      },
    };

    return (
      <React.Fragment>
        <div style={styles.frame}>
          <div style={styles.Carousel}>
            <Carousel>
              {this.props.recipes.map((recipe, index) => (
                <Carousel.Item
                  interval={2500}
                  style={styles.carouselItem}
                  key={recipe.uuid}
                >
                  <img
                    className={"d-block w-100"}
                    style={styles.carouselImage}
                    src={`${this.ifHasImage(index)}` /*recipe.images.full */}
                    alt={`${index} slide`}
                  />
                  <Carousel.Caption>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <Link to={`/recipe/${recipe.uuid}`} className="header">
                      <Button className="btn btn-primary" type="button">
                        View Recipe
                      </Button>
                    </Link>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  recipes: Object.values(state.recipes),
  specials: Object.values(state.specials),
});

export default connect(mapStateToProps, { fetchRecipes, fetchSpecials })(
  LandingPage
);
