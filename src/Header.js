import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const css = {
      padding: '20px'  
    } 

    return (
      <header className="container" style={css}>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}


