import React, {useState} from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("");
  
  const tester = () => {
    let text = document.getElementById("input-add").value;
    setUserInput(text);
    console.log(userInput);
  }

  return (
    <div className="App">
      <div className='interactive-holder'>
        <input type="text" id="input-add" placeholder="Add a note"/>
        <button id="btnAdd" onClick={tester} >Add</button>
      </div>
    </div>
  );
}

export default App;
