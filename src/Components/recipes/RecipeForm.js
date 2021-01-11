import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from 'react-router-dom';
import './semantic.css';

class RecipeForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
    window.location = `${window.location.origin}/editMenu`;
  };

  render() {
      // console.log(new Date().toLocaleString().replace(',',''));
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <Field
          name="servings"
          component={this.renderInput}
          label="Enter Servings"
        />
        <Field
          name="prepTime"
          component={this.renderInput}
          label="Enter Preparation Time"
        />
        <Field
          name="cookTime"
          component={this.renderInput}
          label="Enter Cook Time"
        />
        <input type="hidden" name="postDate" value={new Date().toLocaleString().replace(',','')} />
        <Field
          name="ingredients"
          component={this.renderInput}
          label="Enter Ingredients"
        />
        <Field
          name="directions"
          component={this.renderInput}
          label="Enter Directions"
        />
        <button className="ui button primary">Submit</button>
        <Link to="/editMenu" className="ui button">
          Cancel
        </Link>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "recipeForm",
  validate,
})(RecipeForm);
