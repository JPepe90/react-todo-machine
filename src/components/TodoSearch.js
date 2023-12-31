import React from 'react';
import { TodoContext } from '../TodoContext';
import '../css/TodoSearch.css';

function TodoSearch() { 
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  return(
    <input placeholder="Buscar tarea"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}
    />
  );
}

export {
  TodoSearch,
}