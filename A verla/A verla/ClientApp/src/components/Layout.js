import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from './Navbar';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavBar />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
