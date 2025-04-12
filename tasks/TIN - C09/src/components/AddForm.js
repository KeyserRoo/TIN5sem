import React, { useState } from 'react';

function AddForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
      />
      <textarea 
        value={body} 
        onChange={(e) => setBody(e.target.value)} 
        placeholder="Description" 
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddForm;