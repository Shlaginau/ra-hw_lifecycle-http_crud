import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css'; // Импортируем стили

type Note = {
  id: number;
  content: string;
};

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const response = await fetch('http://localhost:7070/notes');
    const data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (content: string) => {
    await fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 0, content }),
    });
    fetchNotes();
  };

  const deleteNote = async (id: number) => {
    await fetch(`http://localhost:7070/notes/${id}`, { method: 'DELETE' });
    fetchNotes();
  };

  const updateNotes = () => {
    fetchNotes();
  };

  return (
    <div>
      <div className="header-container"> {}
        <h1>Notes</h1>
        <button className="update" onClick={updateNotes}>⟳</button> {}
      </div>
      <div className="notes-container">
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
      <NoteForm addNote={addNote} />
    </div>
  );
};

export default App;
