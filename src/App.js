import React from 'react';
import './App.css';

function App() {

  const tester = () => {
    console.log("you clicked me")
  }

  return (
    <div className="App">
      <div className='interactive-holder'>
        <input type="text" id="add" placeholder="Add a note"/>
        <button id="btnAdd" onClick={tester} >Add</button>
      </div>
    </div>
  );
}

export default App;
