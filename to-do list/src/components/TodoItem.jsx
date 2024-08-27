// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
//   const { id } = useParams();
//   const [isEditing, setIsEditing] = useState(false);
//   const [newText, setNewText] = useState(todo.text);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     editTodo(todo.id, newText);
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       <input 
//         type="checkbox" 
//         checked={todo.completed} 
//         onChange={() => toggleTodo(todo.id)} 
//       />
//       {isEditing ? (
//         <input 
//           type="text" 
//           value={newText} 
//           onChange={(e) => setNewText(e.target.value)} 
//         />
//       ) : (
//         <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//           {todo.text}
//         </span>
//       )}
//       <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//       {isEditing ? (
//         <button onClick={handleSave}>Save</button>
//       ) : (
//         <button onClick={handleEdit}>Edit</button>
//       )}
//     </div>
//   );
// };

// export default TodoItem;

