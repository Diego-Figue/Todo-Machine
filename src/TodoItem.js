import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

  //estado para definir si el objeto se va a eliminar

  const [deleteItem,setDeleteItem] = React.useState(false);

  //funcion para ejecutar la interfaz grafica de eliminar antes de borrar el objeto

  const handleDelete = () =>{
    setDeleteItem(true);
    setTimeout(() => {
      props.onDelete();
    },1000)
  }

  return (
    <li className={`TodoItem ${props.completed && 'ItemComplete'} ${deleteItem && 'ItemDeleted'}`}>
      <p>{props.text}</p>
      <div className="ContentButtons">
        <span
          onClick={props.onComplete}
        >✅</span>
        <span
          onClick={handleDelete}
        >❌</span>
      </div>
    </li>
  );
}

export { TodoItem };
