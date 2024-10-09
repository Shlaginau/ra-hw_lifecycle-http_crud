import React from 'react';

type Note = {
  id: number;
  content: string;
};

type NoteListProps = {
  notes: Note[];
  deleteNote: (id: number) => void;
};

const NoteList: React.FC<NoteListProps> = ({ notes, deleteNote }) => {
    return (
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <p>{note.content}</p>
              <button className="delete" onClick={() => deleteNote(note.id)}>x</button>
            </li>
          ))}
        </ul>
    );
};

export default NoteList;
