import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css'

class NavBar extends Component {
  state = {}
  render() {
    const ACTIVE_STYLES = {
      fontWeight: "bold",
      color: "black",
    };

    return (
      <div className="NavBar">
        <nav>
          <NavLink className='navLink' exact to="/" activeStyle={ACTIVE_STYLES}>Home</NavLink>
          <NavLink className='navLink' exact to="/soda" activeStyle={ACTIVE_STYLES}>SODA</NavLink>
          <NavLink className='navLink' exact to="/chips" activeStyle={ACTIVE_STYLES}>CHIPS</NavLink>
          <NavLink className='navLink' exact to="/candy" activeStyle={ACTIVE_STYLES}>CANDY</NavLink>
          <NavLink className='navLink' exact to="/macbook" activeStyle={ACTIVE_STYLES}>MACBOOKS</NavLink>
        </nav>
      </div>
    );
  }
}

export default NavBar;