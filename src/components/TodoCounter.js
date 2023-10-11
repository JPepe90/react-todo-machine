import React from 'react';
import { TodoContext } from '../TodoContext';
import '../css/TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);

  return (
    <h1>
      Has completado <span className='completado'>{completedTodos}</span> de <span className='total'>{totalTodos}</span> Pendientes
    </h1>
  );
}

export {
  TodoCounter
}