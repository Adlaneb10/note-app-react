import React, {useState} from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  let errorMsg = "ERROR: Input entered does not exist! Try again."
  const addNote = () => {
    notes.push(text);
    console.log(notes);
  
  }
  
  const delNote = () => {
    let arrayPos = notes.indexOf(text);
    console.log(arrayPos);
    if(arrayPos !==-1){
      delete notes[arrayPos];
      const newList = notes.filter((item) => item.arrayPos !== arrayPos)
      setNotes(newList);
      document.getElementById("error-input").innerHTML="";

    }
    if(arrayPos === -1) {
      document.getElementById("error-input").innerHTML=errorMsg;
    }
  } 

  const greenNotes = () => {
    document.querySelector('ul').style.backgroundColor='Green';
  }
  const yellowNotes = () => {
    document.querySelector('ul').style.backgroundColor='Yellow';
  }
  const redNotes = () => {
    document.querySelector('ul').style.backgroundColor='Red';
  }

  return (
    <div className="App">
      <div className='interactive-holder'>
        <input type="text" id="input-add" onChange={(e) => setText(e.target.value)} placeholder="Add a note"/>
        <button id="btnAdd" onClick={addNote}  >Add</button>
        <button id="btnDel" onClick={delNote} >Delete</button>
        <button id="btnGreen" onClick={greenNotes}>Green Notes</button>
        <button id="btnYellow" onClick={yellowNotes} >Yellow Notes</button>
        <button id="btnRed" onClick={redNotes} >Red Notes</button>

      </div>
      <div id="error-input">

      </div>
      <div className='note-holder'>
        <ul>
          {notes.map(words => 
            <li>{words}</li>
          )}
        </ul>
      </div>
    </div>
    
  );
}

export default App;
