import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import AppLanding from './components/landingPage';
import RecipeList from './components/recipe_list';
import RecipeCreate from './components/recipes/RecipeCreate';
import RecipeEdit from './components/recipes/RecipeEdit';
import RecipeDelete from './components/recipes/RecipeDelete';
import RecipeShow from './components/recipes/RecipeShow';
import EditMenu from './components/recipes/RecipeList';
import RecipeDetail from './components/recipe_detail';
import gMap from './components/map';
import Header from '../src/components/header';

// import RecipeDetail from './components/recipe_detail_view';

const Routing = () => {
    return (
      <Router>
        <Header />
        <Switch key="root">
          <Route exact path="/" component={AppLanding} />
          <Route exact path="/RecipeList" component={RecipeList} />
          <Route exact path="/RecipeDetail" component={RecipeDetail} />
          <Route exact path="/map/:lat/:lon" component={gMap} />
          <Route exact path="/EditMenu" component={EditMenu} />
          <Route path="/recipe/new" exact component={RecipeCreate} />
          <Route path="/recipe/edit/:id" exact component={RecipeEdit} />
          <Route path="/recipe/delete/:id" exact component={RecipeDelete} />
          <Route path="/recipe/:id" exact component={RecipeShow} />
        </Switch>
      </Router>
    );
};

export default Routing;
