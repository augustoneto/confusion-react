import React, { Component } from 'react';
//import logo from './logo.svg';
//import { Navbar, NavbarBrand } from 'reactstrap';
//import Menu from './MenuComponent';
import Main from './MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
//import {DISHES} from './dishes';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
