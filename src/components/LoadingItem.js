import { BsFillSquareFill } from 'react-icons/bs';
import '../css/LoadingItem.css'

function LoadingItem() {
  return (
    <li className='loading-item'>
      <p className='loading-p'>
        <span className='icon-left-loading flash'><BsFillSquareFill className='icon-svg' /></span>
        <span className='loading'>
          <div className='text-loading flash'></div>
        </span>
      </p>
    </li>
  );
}

export {
  LoadingItem,
}