import React from 'react';
import '../css/TodosLoading.css';
import { LoadingItem } from './LoadingItem';

function TodosLoading({ loading }) { 
  return(
    <>
      <ul className='loading-list'> 
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </ul>
    </>
    // <p className={`p--loading ${!loading ? 'lightSpeedOut' : 'pulse'}`}> cargando... </p>
  );
}

export {
  TodosLoading,
}