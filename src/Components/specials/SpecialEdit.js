import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchSpecial, editSpecial } from "../../actions";
import SpecialForm from "./SpecialForm";

class SpecialEdit extends React.Component {
  componentDidMount() {
    this.props.fetchSpecial(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editSpecial(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.special) {
      return <div>Loading...</div>;
    }
    var specialData = this.props.special[this.props.match.params.id];

    // console.log(this.props.special);
    return (
      <div
        style={{
          width: window.visualViewport.width * 0.8,
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <h3>Edit a Special</h3>
        <SpecialForm
          initialValues={_.pick(specialData, "title", "text", "type", "geo")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { special: state.specials };
};

export default connect(mapStateToProps, { fetchSpecial, editSpecial })(
  SpecialEdit
);
