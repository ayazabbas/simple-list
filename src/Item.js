import React, { useState } from 'react';
import './Item.css';

function Item({ item, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(item.id, editedName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="itemRow">
      {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="itemInput"
          style={{ flexGrow: 1 }} // Ensure input expands
        />
      ) : (
        <span className="itemText" style={{ flexGrow: 1 }}>{item.name}</span> // Ensure text takes available space
      )}
      <div className="itemActions">
        <i className={`fas ${isEditing ? 'fa-save' : 'fa-pencil-alt'} actionIcon`} onClick={handleEdit}></i>
        <i className="fas fa-trash-alt actionIcon" onClick={() => onDelete(item.id)}></i>
      </div>
    </div>
  );
}

export default Item;
