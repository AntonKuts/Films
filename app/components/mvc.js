import React, {Component} from 'react';
import {Link} from 'react-router';
const books = ["айкидо", "букварь", "водка-лучший напиток", "грибы-как не отравиться", "дом-все места для заначек", "ем и сплю - пособие", "жизнь с большой буквы Ж", "знания и незнания - область видимости", "и Ты тоже", "кто здесь?"];

export default class Mvc extends Component {

  state={searchString:''}

  handleChange = (e) => {
    this.setState({
      searchString: e.target.value
    });
  }

  render() {


    let search = books;
    const searchString = this.state.searchString.trim().toLowerCase();

         if (searchString.length > 0){
           search = search.filter(function(l){
             return l.toLowerCase().match( searchString );
           });
         }
    return(
      <div>
      <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here"/>
    <ul>
    {search.map(function(l) {
      return(<li className="mvc" key={l}>{l}</li>)
    })}
    </ul>

    </div>
    );
    }
  };
