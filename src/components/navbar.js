/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import marvel from '../images/marvel.png';
import search from "../images/search.png";
import './css/navbar.css'

class Navbar extends Component {
  render() {
    return (
      <header>

        <ul>
          <li>
            <a href='/'>
              <img src={marvel} />
            </a>
          </li>
          <div class="marvel">
            <div class="dropdown">
              <a class="dropdown">
                <img src={search} />
              </a>
              <div class="dropdown-content">
                <a href='/search'>Search</a>
                <a href="#">Personage</a>
              </div>
            </div>
          </div>
        </ul>

      </header>
    );
  }
}

export default Navbar;