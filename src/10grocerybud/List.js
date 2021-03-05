import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='grocery-list-gr'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='grocery-item-gr' key={id}>
            <p className='title-gr'>{title}</p>
            <div className='btn-container-gr'>
              <button
                type='button'
                className='edit-btn-gr'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn-gr'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;