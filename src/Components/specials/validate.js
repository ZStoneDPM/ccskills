const validate = values => {
  const errors = {}
  if(!values.title) {
    errors.title = 'Required'
  }
  if(!values.text) {
      errors.text = 'Required'
    }

  return errors
}

export default validate