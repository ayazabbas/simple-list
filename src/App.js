import React, { useState } from 'react';
import List from './List';
import AddItem from './AddItem';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = { id: Date.now(), name: itemName };
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id, newName) => {
    const editedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, name: newName };
      }
      return item;
    });
    setItems(editedItems);
  };

  return (
    <div className="App">
      <h1>Simple List</h1>
      <AddItem onAdd={addItem} />
      <List items={items} onDelete={deleteItem} onEdit={editItem} />
    </div>
  );
}


export default App;
