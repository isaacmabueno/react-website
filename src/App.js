import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Yelp from './Components/Yelp';
import Header from './Components/Header'
import Nav from './Components/Nav'
import Services from './Components/Services'
import Yelp from './Components/Yelp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Header />
        <Services />
        <Yelp />
      </header>
    </div>
  );
}

export default App;
