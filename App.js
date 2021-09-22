import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


/*desafio 2*/

import React, { useState } from "react"
import { HeaderWrapper } from "./styles/Header"
import Navbar from "./Navbar"
import MenuButton from "./MenuButton"

function Header() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <HeaderWrapper>
      <h2>Logo</h2>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  )
}

export default Header