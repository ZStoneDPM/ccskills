import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AppLanding from "./components/landingPage";
import RecipeList from "./components/recipe_list";
import RecipeCreate from "./components/recipes/RecipeCreate";
import RecipeEdit from "./components/recipes/RecipeEdit";
import RecipeDelete from "./components/recipes/RecipeDelete";
import RecipeShow from "./components/recipes/RecipeShow";
import EditRecipes from "./components/recipes/RecipeList";
import RecipeDetail from "./components/recipe_detail";

import EditSpecials from "./components/specials/SpecialList";
import SpecialCreate from "./components/specials/SpecialCreate";
import SpecialEdit from "./components/specials/SpecialEdit";
import SpecialDelete from "./components/specials/SpecialDelete";

import gMap from "./components/map";
import BlankMap from "./components/map";
import Header from "../src/components/header";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch key="root">
        <Route exact path="/" component={AppLanding} />
        <Route exact path="/RecipeList" component={RecipeList} />
        <Route exact path="/RecipeDetail" component={RecipeDetail} />
        <Route exact path="/map/:lat/:lon" component={gMap} />
        <Route exact path="/map" component={BlankMap} />
        
        <Route exact path="/EditRecipes" component={EditRecipes} />
        <Route path="/recipe/new" exact component={RecipeCreate} />
        <Route path="/recipes/edit/:id" exact component={RecipeEdit} />
        <Route path="/recipe/delete/:id" exact component={RecipeDelete} />
        <Route path="/recipe/:id" exact component={RecipeShow} />

        <Route exact path="/editSpecials" component={EditSpecials} />
        <Route path="/special/new" exact component={SpecialCreate} />
        <Route path="/specials/edit/:id" exact component={SpecialEdit} />
        <Route path="/special/delete/:id" exact component={SpecialDelete} />
      </Switch>
    </Router>
  );
};

export default Routing;
