import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSpecial, deleteSpecial } from "../../actions";

class SpecialDelete extends React.Component {
  componentDidMount() {
    this.props.fetchSpecial(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteSpecial(id)}
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
    if (!this.props.special) {
      return "Are you sure you want to delete this special?";
    }

    return `Are you sure you want to delete the special with title: ${this.props.special.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Special"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() =>
          (window.location = `${window.location.origin}/editMenu`)
        }
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { special: state.specials[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchSpecial, deleteSpecial })(
  SpecialDelete
);
