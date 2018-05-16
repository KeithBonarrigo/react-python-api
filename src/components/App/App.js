import React, { Component } from 'react';
import Intro from '../Intro/Intro';
import Works from '../Works/Works';
import Skills from '../Skills/Skills';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Intro message="Driven by React and Python" />
        </header>
        <nav><Navbar message="hello there" /></nav>
        <Skills message="Here are the skills" />
        <Works message="Here are the works" />
        <Contact message="Here is the contact" />
        <footer>Footer</footer>
      </div>

    );
  }
}

export default App;
