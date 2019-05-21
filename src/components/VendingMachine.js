import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar';

import Candy from './pages/Candy';
import Chips from './pages/Chips';
import Soda from './pages/Soda';
import Macbook from './pages/Macbook';
import Home from './pages/Home'


class VendingMachine extends Component {
  state = {

  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        <BrowserRouter>
          <NavBar />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/chips" render={() => <Chips />} />
          <Route exact path="/candy" render={() => <Candy />} />
          <Route exact path="/macbook" render={() => <Macbook />} />
          <Route exact path="/" render={() => <Home />} />
        </BrowserRouter>
      </div>);
  }
}

export default VendingMachine;