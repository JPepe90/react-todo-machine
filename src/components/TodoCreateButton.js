import '../css/TodoCreateButton.css'

function TodoCreateButton(props) {
  return(
      <button className='CreateTodoButton'
      onClick={(event) => {
          console.log(event.target);
      }}
      >+</button>
  );
}

export {
  TodoCreateButton,
}