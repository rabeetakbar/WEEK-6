import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  const editListItem = (key, newText) => {
    let newListTodo = [...listTodo];
    newListTodo[key] = newText;
    setListTodo([...newListTodo]);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">Tasks:</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList 
              key={i} 
              index={i} 
              item={listItem} 
              deleteItem={deleteListItem}
              editItem={editListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
