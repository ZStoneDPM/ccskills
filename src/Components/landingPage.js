import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Carousel } from "react-bootstrap";
import {
  updateRecipesData,
  updateSpecalsData,
  updateAPIRoot,
  updateRecipeDetail,
} from "../reducers/user";
import Header from "./header";
import recipe_data from "../recipe_data.json";
import specials_data from "../specials_data.json";

class App extends Component {
  state = {
    apiRoot: "http://localhost:3001",
  };
  viewRecipe(value){
    this.props.dispatch(updateRecipeDetail(this.props.user.updateRecipesData[value]));
    window.location = `${window.location.origin}/RecipeDetail`;
    // console.log('item: '+JSON.stringify(this.props.user.updateRecipesData[value]));
  }



  //   connectRecipes(){

  //     this.setState({ recipes: recipe_data },
  //       console.log(`recipes: ${this.state.recipes}`)
  //       )

  //     // fetch('http://localhost:3001/recipes')
  //     // .then(res => res.json())
  //     // .then((data) => {
    // this.props.dispatch(updateRecipesData(data));
  //     // })
  //     // .catch(console.log)
  //   }
  //   connectSpecials(){
  //     this.setState({ specials: specials_data },
  //       console.log(`specials: ${this.state.specials}`)
  //       )

  componentDidMount() {
    this.props.dispatch(updateSpecalsData(specials_data));
    this.props.dispatch(updateRecipesData(recipe_data));
    this.props.dispatch(updateAPIRoot(this.state.apiRoot));

    //   this.connectRecipes();
    //   this.connectSpecials();
  }

  render() {
    const recipes = this.props.user.updateRecipesData;
    const apiRoot = this.props.user.updateAPIRoot;

    const styles = {
      Carousel: {
        maxWidth: window.visualViewport.width * .5,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 30,
      },
      frame: {
        backgroundColor: 'grey',
        paddingBottom: 30,
        transition: 'all 0.3s ease-out',
      },
      carouselItem: {
        backgroundSize: 'contain'
      }
    }

    return (
    <React.Fragment>
    <Header />
    <div style={styles.frame}>
<div style={styles.Carousel}>

    <Carousel>
    {recipes.map((recipes, index) => (
  <Carousel.Item interval={2500} style={styles.carouselItem} key={recipes.uuid}>
    <img
      className={`d-block w-100 ${styles.carouselItem}`}
      src={`${apiRoot}${recipes.images.full}`}
      alt={`${index} slide`}
    />
    <Carousel.Caption>
      <h3>{recipes.title}</h3>
      <p>{recipes.description}</p>
      <Button
      className="btn btn-primary"
      type="button"
      onClick={()=>this.viewRecipe(index)} 
      >View Recipe</Button>
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
});

export default connect(mapStateToProps)(App);
