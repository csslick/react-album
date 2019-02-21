import React, { Component} from 'react';

export default class Card extends Component {

  static defaultProps = {
    img: 'http://placehold.it/400x400?text=defaultProps',
    title: 'default title',
    text: 'default text'
  }

  render() {
    
    const css = {
    }
    
    return (
      <div className='card col4'>
        <figure>
          <img 
            className='responsive'
            style={css}
            src={this.props.img} 
            alt="img"/>
        </figure>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

