import '../css/TodoItem.css'
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem(props) {
  return (
    <li className='lightSpeedIn'>
      <DeleteIcon 
        onDelete={props.onDelete}
      />
      <p>
        <CompleteIcon 
          completed={props.completed} 
          onComplete={props.onComplete}
        />
        <span 
          className={`tarea ${props.completed && 'TodoItem--completed'}`}
        >{props.tarea}
        </span>
      </p>
    </li>
  );
}

export {
  TodoItem,
}