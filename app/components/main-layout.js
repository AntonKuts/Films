import React, {Component} from 'react';
import {Link} from 'react-router'

export default class MainLayout extends Component {
  render() {
    return(
      <div>
        <aside>
          <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/mvc"}>MVC</Link></li>
              <li><Link to={"/Articles"}>Article</Link></li>
              <li><Link to={"/Movies"}>Movies</Link></li>
          </ul>
        </aside>
        <main>
        {this.props.children}
        </main>
      </div>
    );
  }
};
