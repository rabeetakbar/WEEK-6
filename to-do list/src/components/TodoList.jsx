import React, { useState } from 'react';
import EditTodo from './EditTodo';

function Todolist(props) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li className="list-item">
      {isEditing ? (
        <EditTodo
          item={props.item}
          index={props.index}
          editItem={props.editItem}
          toggleEditMode={toggleEditMode}
        />
      ) : (
        <>
          {props.item}
          <span className='icons'>
            <i 
              className="fa-solid fa-pen-to-square icon-edit"
              onClick={toggleEditMode}
              style={{ marginRight: '10px' }} // Add margin to separate icons
            ></i>
            <i 
              className="fa-solid fa-trash-can icon-delete" 
              onClick={() => props.deleteItem(props.index)}
            ></i>
          </span>
        </>
      )}
    </li>
  );
}

export default Todolist;