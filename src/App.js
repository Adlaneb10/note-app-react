import React, {useState} from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    let text = document.getElementById("input-add").value;
  notes.push(text);
  }

  const delNote = () => {
    let text = document.getElementById('input-add').value; 
    let arrayPos = notes.indexOf(text);
    console.log(arrayPos);
  }

  return (
    <div className="App">
      <div className='interactive-holder'>
        <input type="text" id="input-add" placeholder="Add a note"/>
        <button id="btnAdd" onClick={addNote} >Add</button>
      </div>
      <div className='note-holder'>
        <ul>
          {notes.map((words) => 
            <li >{words}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
