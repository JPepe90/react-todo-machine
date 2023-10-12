import React from 'react';
import '../css/TodoCreateButton.css'
import { TodoContext } from '../TodoContext';

function TodoCreateButton(props) {
  const {
    setOpenModal
  } = React.useContext(TodoContext);
  return(
      <button className='CreateTodoButton'
      // onClick={(event) => {
      //     console.log(event.target);
      // }}
        onClick={() => {
          setOpenModal(state => !state)
        }}
      >+</button>
  );
}

export {
  TodoCreateButton,
}