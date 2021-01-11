import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe, deleteRecipe } from '../../actions';

class RecipeDelete extends React.Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteRecipe(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/editMenu" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.recipe) {
      return 'Are you sure you want to delete this recipe?';
    }

    return `Are you sure you want to delete the recipe with title: ${
      this.props.recipe.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Recipe"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => window.location = `${window.location.origin}/editMenu`}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipe: state.recipes[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchRecipe, deleteRecipe }
)(RecipeDelete);
