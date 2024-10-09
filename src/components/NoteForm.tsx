import React, { useState } from 'react';

type NoteFormProps = {
  addNote: (content: string) => void;
};

const NoteForm: React.FC<NoteFormProps> = ({ addNote }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addNote(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Введите заметку"
      />
      <button type="submit">▶</button>
    </form>
  );
};

export default NoteForm;
