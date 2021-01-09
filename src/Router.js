import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import AppLanding from './Components/landingPage';
import RecipeList from './Components/recipe_list';
import EditMenu from './Components/edit_menu';
import EditSpecials from './Components/edit_specials';
import RecipeDetail from './Components/recipe_detail';

// import RecipeDetail from './Components/recipe_detail_view';

const Routing = () => {
    return (
      <Router>
        <Switch key="root">
          <Route exact path="/" component={AppLanding} />
          <Route exact path="/RecipeList" component={RecipeList} />
          <Route exact path="/EditMenu" component={EditMenu} />
          <Route exact path="/EditSpecials" component={EditSpecials} />
          <Route exact path="/RecipeDetail" component={RecipeDetail} />
        </Switch>
      </Router>
    );
};

export default Routing;
