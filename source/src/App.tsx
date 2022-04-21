import React, { ReactElement, useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';

// @atoms
import TestComponent from './components/molecules/test-message';

//export const ThemeContext = React.createContext();

function App(): ReactElement {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme(): void {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  function getText(): string {
    if (darkTheme) {
      return 'tema oscuro';
    } else {
      return 'tema claro';
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>probaaaaandoooo</p>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: darkTheme ? '#000' : '#FFF',
            color: darkTheme ? '#FFF' : '#000',
          }}
        >
          {getText()}
        </button>
        <TestComponent darkTheme={darkTheme} />
      </header>
    </div>
  );
}

export default App;
