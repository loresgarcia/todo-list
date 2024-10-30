import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>To-do List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
