import React from 'react';
import '../css/TodosError.css';
import { BsFillXSquareFill } from 'react-icons/bs'

function TodosError({ error }) { 
  return(
        // <p className='p--error lightSpeedIn'> Hubo un error durante la carga ... </p>
    <>
      <ul className='loading-list lightSpeedIn'> 
        <li className='loading-item-error'>
          <p className='loading-p'>
            <span className='icon-left-loading-error flash'><BsFillXSquareFill className='icon-svg' /></span>
            <span className='loading text-loading-error'>Error al cargar las tareas</span>
          </p>
        </li>
      </ul>
    </>
  );
}

export {
  TodosError,
}