import React from 'react';
import { TodoIcon } from './TodoIcon';

function CompleteIcon({ completed, onComplete }) {
  const tipo = completed === true ? 'finished' : 'check';
  return(
    <TodoIcon 
      type={tipo}
      color={completed ? 'green' : 'grey'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };