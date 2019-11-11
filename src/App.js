import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Yelp from './Components/Yelp';
import Header from './Components/Header'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
