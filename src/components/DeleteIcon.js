import React from 'react';
import { TodoIcon } from './TodoIcon';


function DeleteIcon({ onDelete }) {
  return(
    <TodoIcon 
      type="remove"
      color="red"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };