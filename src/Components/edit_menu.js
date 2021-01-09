import React, { Component } from "react";
import { Form, Card } from 'react-bootstrap';
import { connect } from "react-redux";
import Header from "./header";

class EditMenu extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <center style={{position: 'sticky', top:56,left:0,right:0, zIndex: 99, background: '#fff', paddingBottom: 5, borderBottom: 'solid 1px black'}}>
        <h1>Edit Menu</h1>
        </center>
        <Card>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group> 
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(EditMenu);
