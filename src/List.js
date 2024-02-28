import React from 'react';
import './List.css';
import Item from './Item';

function List({ items, onDelete, onEdit }) {
  return (
    <div className="listContainer">
      {items.map(item => (
        <div className="itemRow" key={item.id}>
          <Item item={item} onDelete={onDelete} onEdit={onEdit} />
        </div>
      ))}
    </div>
  );
}

export default List;
