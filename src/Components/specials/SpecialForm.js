import React from "react";
import { Field, reduxForm, FieldArray } from "redux-form";
// import { Link } from 'react-router-dom';
import './semantic.css';
import validate from './validate';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderType = ({ fields, meta: { touched, error, submitFailed } }) => (
<div>
        <label>Type</label>
        <div>
          <Field name="type" component="select">
            <option value=''>None</option>
            <option value="event">Event</option>
            <option value="promocode">Promocode</option>
            <option value="local">Local</option>
            <option value="sale">Sale</option>
          </Field>
        </div>
      </div>
)

const FieldArraysForm = (props) => {
  
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="title" type="text" component={renderField} label="Special Name"/>
      <Field name="text" type="text" component={renderField} label="Description"/>
      <Field name="code" type="text" component={renderField} label="Promocode"/>
      <FieldArray name="directions" component={renderType}/> 
      <Field name="geo" type="text" component={renderField} label="Map (lat,lon)"/>

      <div>
        <button type="submit" disabled={submitting} >Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'specialsFieldArrays',     // a unique identifier for this form
  validate
})(FieldArraysForm)
