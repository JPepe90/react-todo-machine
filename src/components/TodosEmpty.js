import React from 'react';
import '../css/TodosEmpty.css';
import { BsFillSquareFill } from 'react-icons/bs';

function TodosEmpty() { 
  return(
    <>
    <ul className='loading-list-empty lightSpeedIn'> 
      <li className='loading-item-empty'>
        <p className='loading-p-empty'>
          <span className='icon-left-loading-empty'><BsFillSquareFill className='icon-svg' /></span>
          <span className='loading text-loading-empty'>Carga tu primer tarea</span>
        </p>
      </li>
    </ul>
  </>
  );
}

export {
  TodosEmpty,
}