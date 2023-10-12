import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_v1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  // estados derivados
  const completedTodos = todos.filter(item => item.completed === true).length;  // completados
  const totalTodos = todos.length;  // totales

  const searchedTodos = todos.filter( // buscador
    (item) => {
      return item.text.toLowerCase().includes(searchValue.toLowerCase());
    }
  );
  // -----------------

  // funciones actualizadoras de estado
  const completarTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(item => item.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(item => item.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        text: text,
        completed: false
      }
    ];
    saveTodos(newTodos);
  }

  // ----------------------------------

  return(
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completarTodo,
      deleteTodo,
      loading,
      error,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

function TodoConsumer() {
  return(
    <TodoContext.Consumer>

    </TodoContext.Consumer>
  )
}

export { TodoContext, TodoProvider, TodoConsumer };