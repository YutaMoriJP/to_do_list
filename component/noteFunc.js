import React, { useState } from 'react';
import './displaynote.css';

const DisplayNotes = () => {
  const [note, setNote] = useState([]);
  const [text, setText] = useState({ note: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setText(prevNote => ({ ...prevNote, [name]: value, id: Date.now() }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setNote(prevNote => [...prevNote, text]);
  };
  const handleClick = uniqId => {
    setNote(prevNote => prevNote.filter(({ id }) => id !== uniqId));
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>To Do List:</h1>
      <p>
        {!note.length
          ? 'Currently Empty'
          : note.map(({ note, id }) => (
              <div>
                <button onClick={() => handleClick(id)}>Remove</button>
                <p>{note}</p>
              </div>
            ))}
      </p>
      <input
        type="text"
        value={text.note}
        onChange={handleChange}
        name="note"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export { DisplayNotes };
