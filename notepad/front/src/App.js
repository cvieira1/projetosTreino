import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Notepad App.
        </p>
        <p>
          Sign in.
        </p>
      </header>
      <form>
         E-mail<input type="text" name="email"/>
         Password<input type="password"/>
      </form>
    </div>
  );
}

export default App;
