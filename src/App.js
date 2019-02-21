import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import CardList from './CardList';

class App extends Component {

  state = {
    title: 'Album layout',
    card: [
      {
        img: 'http://placeimg.com/400/400/1',
        title: 'card title1',
        text: 'hello card title1'
      },
      {
        img: 'http://placeimg.com/400/400/2',
        title: 'card title2',
        text: 'hello card title2'
      },
      {
        img: 'http://placeimg.com/400/400/3',
        title: 'card title3',
        text: 'hello card title3'
      },
      {
        img: 'http://placeimg.com/400/400/4',
        title: 'card title4',
        text: 'hello card title3'
      },
    ]  
  }

  render() {
    return (
      <div className="App">
        <Header title={ this.state.title }/>
        <hr/>
        <section>
          <div className='container'>
            <CardList data={ this.state.card } />
          </div>  
        </section>  
      </div>
    );
  }
}

export default App;
