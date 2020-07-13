import React, { useState } from 'react';
import Todo from './components/Todo';
import Lists from './components/Lists';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App container">
      <Todo list={list} setList={setList} />
      <div className="container mt-3">
        {list.map((task, index) => (
          <Lists task={task} index={index} setList={setList} list={list} />
        ))}
      </div>
    </div>
  );
}

export default App;