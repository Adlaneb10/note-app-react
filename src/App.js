import React from 'react';
import './App.css';

function App() {
  const clicker = () => {
    console.log("you clicked me")
  }

  return (
    <div className="App">
      <input type="text" id="inputadd"></input>
      <button id="btnAdd" onClick={clicker()}></button>
    </div>
  );
}

export default App;
