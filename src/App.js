import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/Navbar1';
import Popover from './components/popover';

const reactDescription = ['Fundamental','core','Crucial','important','basic','essential','key','main','primary','vital','central','underlying','foundational','elementary','preliminary','introductory','preparatory','rudimentary'];

function getRandomDescription() {
  const randomIndex = Math.floor(Math.random() * reactDescription.length);
  return reactDescription[randomIndex];
}

function App() {
  const [randomWord] = useState(() => getRandomDescription())
  return (
    <>
  <div><Navbar1 /></div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <Popover title="Hello!" buttonText="Show details" getContent={() => getRandomDescription()}>
            <div>This is custom popover content.</div>
          </Popover>

        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         <p>{randomWord.toUpperCase()} CONCEPTS OF REACT</p>
      </header>
    </div>
    </>
  );
}

export default App;
