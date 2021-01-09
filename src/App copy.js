import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { persistor, store } from './store';
import Router from './Router';
import Recipe from './Components/recipe_list_view';
import recipe_data from './recipe_data.json';
import specials_data from './specials_data.json';

class App extends Component {

  state = {
    recipes: [], 
    specials:[],
    apiRoot: 'http://localhost:3001'
  }

  connectRecipes(){
    this.setState({ recipes: recipe_data },
      console.log(`recipes: ${this.state.recipes}`)
      )


    // fetch('http://localhost:3001/recipes')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({ recipes: data },
    //     console.log(`recipes: ${this.state.recipes}`)
    //     )
    // })
    // .catch(console.log)
  }
  connectSpecials(){
    this.setState({ specials: specials_data },
      console.log(`specials: ${this.state.specials}`)
      )

    // fetch('http://localhost:3001/specials')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({ specials: data },
    //     console.log(`specials: ${this.state.specials}`)
    //     )
    // })
    // .catch(console.log)
  }

  componentDidMount() {
  this.connectRecipes();
  this.connectSpecials();   
  }

  render(){
  return (
   <div>
       {/* <Link
            to='/linkShare'
            className="icon"
            // style={styles.icon}
          //onClick={() => console.log('SearchClicked')} //Actions.Search()
          ></Link>
  
    <Recipe recipes={this.state.recipes} apiRoot={this.state.apiRoot} /> */}
    </div>
  );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
