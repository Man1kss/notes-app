import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addNote = () => {
    if (inputValue.trim() === '') return;
    
    const newNote = {
      id: Date.now(),
      text: inputValue.trim(),
    };
    
    setNotes([...notes, newNote]);
    setInputValue('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Список заметок</h1>
      
      <div className="note-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите заметку..."
        />
        <button onClick={addNote}>Добавить</button>
      </div>
      
      <div className="notes-list">
        {notes.map(note => (
          <div key={note.id} className="note-item">
            <span>{note.text}</span>
            <button onClick={() => deleteNote(note.id)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;