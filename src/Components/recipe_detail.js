import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import Header from "./header";

// const Recipe = ({ this.props.user.recipes, apiRoot }) => {
class RecipeDetail extends Component {
  render() {
    const recipes = this.props.user.recipeDetail;
    const apiRoot = this.props.user.updateAPIRoot;
    const directions = recipes.directions;
    const styles = {
      cookingInstructions: {
        maxWidth: window.visualViewport.width * 0.6,
        textAlign: "left",
        marginRight: "auto",
        marginLeft: "auto",
      },
    };
    return (
      <div>
        <Header />
        <center
          style={{
            position: "sticky",
            top: 56,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "#fff",
            paddingBottom: 5,
            borderBottom: "solid 1px black",
          }}
        >
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
            <Table striped={true} bordered hover >
              {/* <ol type='1'> */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Cooking Instructions</th>
                </tr>
              </thead>
              <tbody>
              {directions.map((directions, index) => (
                // <li>{directions.instructions}</li>
              
                <tr key={index}>
                  <td>{index}</td>
                  <td>{directions.instructions}</td>
                </tr>
             
              ))}
              </tbody>
              {/* </ol> */}

             
          
               
              </Table>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">
              Recipe Posted: {recipes.postDate}{" "}
            </h6>
          </div>
          <p></p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(RecipeDetail);
