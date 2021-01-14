import React from "react";
import { Field, reduxForm, FieldArray } from "redux-form";

import "./semantic.css";
import validate from "./validate";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

// const renderSpecials = ({ fields, meta: { touched, error, submitFailed } }) => (
//   <div>
//     <label>Has Special</label>

//     <div>
//       {/* {fields.map((recipe, index) => ( */}
//       <Field name={`ingredientId`} component="select">
//         <option value="">None</option>
//         <option value="62798278-2fbc-4c31-98de-b7959c191688">Event</option>
//         <option value="3d810ba9-7e4e-48aa-b2e9-7918e38b358d">Local</option>
//         <option value="aa1ff525-4190-4a66-8d12-3f383a752b55">Promocode</option>
//         <option value="77ae45d7-659b-4cb5-a4ea-07f00e442974">Sale</option>
//       </Field>
//       {/* ))} */}
//     </div>
//   </div>
// );

const renderRecipes = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Ingredient
      </button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((recipe, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        />
        <h4>Ingredient #{index + 1}</h4>
        <Field
          name={`${recipe}.amount`}
          type="text"
          component={renderField}
          label="Amount"
        />
        <Field
          name={`${recipe}.measurement`}
          type="text"
          component={renderField}
          label="Measurement"
        />
        <Field
          name={`${recipe}.name`}
          type="text"
          component={renderField}
          label="Ingredient Name"
        />
        {/* <FieldArray
          name="ingredientsId"
          component={renderSpecials}
          key={index}
        /> */}
      </li>
    ))}
  </ul>
);
const renderDirections = ({
  fields,
  meta: { touched, error, submitFailed },
}) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Directions
      </button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((recipe, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Step"
          onClick={() => fields.remove(index)}
        />
        <h4>Step #{index + 1}</h4>
        <Field
          name={`${recipe}.instructions`}
          type="text"
          component={renderField}
          label="Step Description"
        />
        <Field
          name={`${recipe}.optional`}
          type="checkbox"
          component={renderField}
          label="Check if required"
        />
      </li>
    ))}
  </ul>
);

const FieldArraysForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Recipe Name"
      />
      <Field
        name="description"
        type="text"
        component={renderField}
        label="Description"
      />
      <Field
        name="servings"
        type="text"
        component={renderField}
        label="Servings"
      />
      <Field
        name="prepTime"
        type="text"
        component={renderField}
        label="Prep-time"
      />
      <Field
        name="cookTime"
        type="text"
        component={renderField}
        label="Cook time"
      />
      {/* <Field
    component={renderField}
    name="postDate"
    type="text"
    style={{ height: 0 }}
    value={`${new Date().toLocaleString().replace(',','')}`}
/> */}
      <FieldArray name="ingredients" component={renderRecipes} />
      <FieldArray name="directions" component={renderDirections} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "fieldArrays",
  validate,
})(FieldArraysForm);
