import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe, editRecipe } from '../../actions';
import RecipeForm from './RecipeForm';

class RecipeEdit extends React.Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editRecipe(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.recipe) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{width: window.visualViewport.width * .8, marginRight: 'auto', marginLeft: 'auto'}}>
        <h3>Edit a Recipe</h3>
        <RecipeForm
          initialValues={_.pick(this.props.recipe, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { recipe: state.recipes };
};

export default connect(mapStateToProps,{ fetchRecipe, editRecipe })(RecipeEdit);
