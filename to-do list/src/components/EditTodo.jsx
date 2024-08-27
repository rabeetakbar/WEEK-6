import React, { useState } from 'react';

function EditTodo({ item, index, editItem, toggleEditMode }) {
  const [newText, setNewText] = useState(item);

  const handleSave = () => {
    editItem(index, newText);
    toggleEditMode(); // Close edit mode after saving
  };

  return (
    <div className="edit-todo">
      <input 
        type="text" 
        value={newText} 
        onChange={(e) => setNewText(e.target.value)} 
      />
      <div className="edit-actions">
        <button onClick={handleSave}>Save</button>
        <button onClick={toggleEditMode}>Cancel</button>
      </div>
    </div>
  );
}

export default EditTodo;
