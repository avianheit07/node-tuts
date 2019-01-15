import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo" href="/"> CENAD </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/"> Home </a></li>
            <li><a href="/thumbs"> Thumbs </a></li>
            <li><a href="/sites"> Sites </a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
