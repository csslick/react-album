import React, { Component} from 'react';
import Card from './Card';

export default class CardList extends Component {

  render() {
    let card_data = this.props.data;
    console.log(card_data, '111');

    const card_list = card_data.map((list, key) => {
      return (
        <Card
          key={key}
          img={list.img}
          title={list.title}
          text={list.text} />
      )
    });

    return (
      <div className='row'>
        {card_list}
      </div>  
    )
  }
}
