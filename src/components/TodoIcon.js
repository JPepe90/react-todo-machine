import { BsCheck2Square, BsX } from "react-icons/bs";
import '../css/TodoIcon.css'

const iconTypes = {
  'finished': (color) => <BsCheck2Square className="Icon-svg" fill={color}/>,
  'check': (color) => <BsCheck2Square className="Icon-svg" fill={color}/>,
  'remove': (color) => <BsX className="Icon-svg" fill={color}/>,
}

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`${type}`} 
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };