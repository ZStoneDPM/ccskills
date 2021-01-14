import React from 'react';
import { connect } from 'react-redux';
import { createSpecial } from '../../actions';
import SpecialForm from './SpecialForm';

class SpecialCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createSpecial(formValues);
  };

  render() {
    return (
      <div style={{width: window.visualViewport.width * .8, marginRight: 'auto', marginLeft: 'auto'}}>
        <h3>Create a Special</h3>
        <SpecialForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createSpecial }
)(SpecialCreate);
