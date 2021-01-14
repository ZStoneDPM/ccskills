import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSpecials } from '../../actions';

class SpecialList extends React.Component {
  state={
    specials: this.props.fetchSpecials()
  }
  componentDidMount() {
    this.props.fetchSpecials();
    // console.log(this.props.fetchSpecials())
  }

  renderAdmin(special) {
      return (
        <div className="right floated content">
          <Link to={`/specials/edit/${special.uuid}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/special/delete/${special.uuid}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
   
  }

  renderList() {
    return this.props.specials.map(special => {
      return (
        <div className="item" key={special.uuid}>
          {this.renderAdmin(special)}
          <i className="large middle aligned icon camera" />
          <div className="content">
          {/* <Link to={`/special/${special.uuid}`} className="header"> */}
              {special.title}
            {/* </Link> */}
            <div className="description">{special.text}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    // if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/special/new" className="ui button primary">
            Create Special
          </Link>
        </div>
      );
    // }
  }

  render() {
    return (
      <div style={{width: window.visualViewport.width * .8, marginRight: 'auto', marginLeft: 'auto'}}>
        <h2>Specials</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    specials: Object.values(state.specials)
  };
};

export default connect(mapStateToProps, { fetchSpecials })(SpecialList);
