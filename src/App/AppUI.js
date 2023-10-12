import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoCreateButton } from '../components/TodoCreateButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { TodosEmpty } from '../components/TodosEmpty';
import { TodoContext } from '../TodoContext';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm'

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completarTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>

      <TodoCounter />
      <TodoSearch />

        <TodoList> 
          {/* Condicionales previas */}
          {loading && <TodosLoading loading={loading}/>}
          {error && <TodosError error={error}/>}
          {(!loading && searchedTodos.length === 0) && <TodosEmpty />}

          {(!error && !loading && searchedTodos.length > 0) && searchedTodos.map(item => (
            <TodoItem 
              key={item.text} 
              tarea={item.text} 
              completed={item.completed}
              onComplete={() => completarTodo(item.text)}
              onDelete={() => deleteTodo(item.text)}
            />
          ))}
        </TodoList>

      <TodoCreateButton 
        setOpenModal={setOpenModal}
      />

      {openModal && (
      <Modal>
        <TodoForm />
      </Modal>
      )}

    </React.Fragment>
  );
}

export { AppUI };