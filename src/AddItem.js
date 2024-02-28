import React, { useState } from 'react';
import './AddItem.css';

function AddItem({ onAdd }) {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName.trim()) return;
    onAdd(itemName);
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit} className="addItemForm">
      <input
        type="text"
        placeholder="Add new item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="addItemInput"
      />
      <button type="submit" className="addItemButton">
        <i className="fas fa-plus"></i> {/* Replace text with icon */}
      </button>
    </form>
  );
}

export default AddItem;
