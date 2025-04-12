import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import AddForm from './AddForm';

function ListElement() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const addItem = async (newItem) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      const data = await response.json();
      setItems([...items, data]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <AddForm onSubmit={addItem} />
      <ul>
        {items.map(item => (
          <ListItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ListElement;